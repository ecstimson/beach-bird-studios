import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

interface DeploymentConfig {
  projectName: string;
  vercelToken?: string;
  domain?: string;
  environmentVariables?: Record<string, string>;
}

interface DeploymentResult {
  success: boolean;
  url?: string;
  error?: string;
  logs: string[];
}

export class DeploymentManager {
  private config: DeploymentConfig;
  private logs: string[] = [];

  constructor(config: DeploymentConfig) {
    this.config = config;
  }

  private log(message: string) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}`;
    this.logs.push(logEntry);
    console.log(logEntry);
  }

  async checkGitStatus(): Promise<{ clean: boolean; changes: string[] }> {
    try {
      const { stdout } = await execAsync('git status --porcelain');
      const changes = stdout.trim().split('\n').filter(line => line.length > 0);
      return {
        clean: changes.length === 0,
        changes
      };
    } catch (error) {
      this.log(`Error checking git status: ${error}`);
      return { clean: false, changes: [] };
    }
  }

  async commitChanges(message?: string): Promise<boolean> {
    try {
      const gitStatus = await this.checkGitStatus();
      
      if (gitStatus.clean) {
        this.log('No changes to commit');
        return true;
      }

      this.log(`Committing ${gitStatus.changes.length} changes`);
      
      // Add all changes
      await execAsync('git add .');
      
      // Commit with message
      const commitMessage = message || `Deploy update - ${new Date().toISOString()}`;
      await execAsync(`git commit -m "${commitMessage}"`);
      
      this.log('Changes committed successfully');
      return true;
    } catch (error) {
      this.log(`Error committing changes: ${error}`);
      return false;
    }
  }

  async pushToRepository(): Promise<boolean> {
    try {
      this.log('Pushing to remote repository...');
      await execAsync('git push origin main');
      this.log('Successfully pushed to repository');
      return true;
    } catch (error) {
      this.log(`Error pushing to repository: ${error}`);
      return false;
    }
  }

  async installVercelCli(): Promise<boolean> {
    try {
      // Check if Vercel CLI is installed
      await execAsync('vercel --version');
      this.log('Vercel CLI is already installed');
      return true;
    } catch (error) {
      this.log('Installing Vercel CLI...');
      try {
        await execAsync('npm install -g vercel');
        this.log('Vercel CLI installed successfully');
        return true;
      } catch (installError) {
        this.log(`Error installing Vercel CLI: ${installError}`);
        return false;
      }
    }
  }

  async configureVercel(): Promise<boolean> {
    try {
      // Create vercel.json if it doesn't exist
      const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
      
      if (!fs.existsSync(vercelConfigPath)) {
        const vercelConfig = {
          "name": this.config.projectName,
          "version": 2,
          "builds": [
            {
              "src": "package.json",
              "use": "@vercel/static-build"
            }
          ],
          "routes": [
            { "handle": "filesystem" },
            { "src": "/.*", "dest": "/index.html" }
          ]
        };

        await writeFile(vercelConfigPath, JSON.stringify(vercelConfig, null, 2));
        this.log('Created vercel.json configuration');
      }

      return true;
    } catch (error) {
      this.log(`Error configuring Vercel: ${error}`);
      return false;
    }
  }

  async deployToVercel(): Promise<DeploymentResult> {
    try {
      this.log('Starting Vercel deployment...');

      // Install Vercel CLI if needed
      const cliInstalled = await this.installVercelCli();
      if (!cliInstalled) {
        return {
          success: false,
          error: 'Failed to install Vercel CLI',
          logs: this.logs
        };
      }

      // Configure Vercel
      const configured = await this.configureVercel();
      if (!configured) {
        return {
          success: false,
          error: 'Failed to configure Vercel',
          logs: this.logs
        };
      }

      // Deploy to Vercel
      const deployCommand = this.config.vercelToken 
        ? `vercel --prod --token ${this.config.vercelToken}`
        : 'vercel --prod';

      const { stdout } = await execAsync(deployCommand);
      
      // Extract URL from output
      const urlMatch = stdout.match(/https:\/\/[^\s]+/);
      const deploymentUrl = urlMatch ? urlMatch[0] : undefined;

      this.log(`Deployment successful: ${deploymentUrl}`);

      return {
        success: true,
        url: deploymentUrl,
        logs: this.logs
      };

    } catch (error) {
      this.log(`Deployment failed: ${error}`);
      return {
        success: false,
        error: error.toString(),
        logs: this.logs
      };
    }
  }

  async setEnvironmentVariables(variables: Record<string, string>): Promise<boolean> {
    try {
      for (const [key, value] of Object.entries(variables)) {
        this.log(`Setting environment variable: ${key}`);
        await execAsync(`vercel env add ${key} production`, { 
          input: value 
        });
      }
      return true;
    } catch (error) {
      this.log(`Error setting environment variables: ${error}`);
      return false;
    }
  }

  async fullDeploy(commitMessage?: string): Promise<DeploymentResult> {
    this.log('Starting full deployment process...');

    // Step 1: Commit changes
    const committed = await this.commitChanges(commitMessage);
    if (!committed) {
      return {
        success: false,
        error: 'Failed to commit changes',
        logs: this.logs
      };
    }

    // Step 2: Push to repository
    const pushed = await this.pushToRepository();
    if (!pushed) {
      return {
        success: false,
        error: 'Failed to push to repository',
        logs: this.logs
      };
    }

    // Step 3: Deploy to Vercel
    const deployment = await this.deployToVercel();
    
    if (deployment.success) {
      this.log('Full deployment completed successfully!');
    }

    return deployment;
  }

  async rollback(commitHash?: string): Promise<boolean> {
    try {
      this.log('Initiating rollback...');
      
      if (commitHash) {
        await execAsync(`git reset --hard ${commitHash}`);
        await execAsync('git push --force-with-lease origin main');
      } else {
        await execAsync('git reset --hard HEAD~1');
        await execAsync('git push --force-with-lease origin main');
      }
      
      this.log('Rollback completed');
      return true;
    } catch (error) {
      this.log(`Rollback failed: ${error}`);
      return false;
    }
  }

  getLogs(): string[] {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
  }
}

export async function createDeploymentManager(): Promise<DeploymentManager> {
  try {
    // Load configuration
    const configPath = path.join(process.cwd(), '.claude', 'project-config.json');
    const configContent = await readFile(configPath, 'utf8');
    const config = JSON.parse(configContent);

    return new DeploymentManager({
      projectName: config.business.name.toLowerCase().replace(/\s+/g, '-'),
      domain: config.business.contact.website,
    });
  } catch (error) {
    // Fallback configuration
    return new DeploymentManager({
      projectName: 'beach-bird-studios',
    });
  }
}

export async function quickDeploy(commitMessage?: string): Promise<DeploymentResult> {
  const deploymentManager = await createDeploymentManager();
  return await deploymentManager.fullDeploy(commitMessage);
}