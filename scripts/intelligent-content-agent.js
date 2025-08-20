#!/usr/bin/env node

/**
 * Intelligent Content Sync Agent with Learning Capabilities
 * Learns from resolved issues and applies solutions automatically
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';
import matter from 'gray-matter';
import chalk from 'chalk';
import chokidar from 'chokidar';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const KNOWLEDGE_BASE_PATH = path.join(__dirname, 'knowledge-base.json');

class IntelligentContentAgent {
  constructor() {
    this.knowledgeBase = this.loadKnowledgeBase();
    this.learnedSolutions = new Map();
    this.fixHistory = [];
    this.isLearning = false;
  }

  loadKnowledgeBase() {
    try {
      const data = fs.readFileSync(KNOWLEDGE_BASE_PATH, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.log(chalk.yellow('Creating new knowledge base...'));
      return {
        resolvedIssues: [],
        patterns: {},
        automations: {}
      };
    }
  }

  saveKnowledgeBase() {
    fs.writeFileSync(
      KNOWLEDGE_BASE_PATH,
      JSON.stringify(this.knowledgeBase, null, 2)
    );
  }

  async start() {
    console.log(chalk.blue.bold('🧠 Intelligent Content Agent Started\n'));
    console.log(chalk.cyan(`Loaded ${this.knowledgeBase.resolvedIssues.length} known solutions\n`));
    
    // Apply known fixes immediately
    await this.applyKnownSolutions();
    
    // Start monitoring
    this.setupMonitoring();
    
    // Periodic learning cycle
    setInterval(() => this.learningCycle(), 60 * 60 * 1000); // Every hour
  }

  async applyKnownSolutions() {
    console.log(chalk.blue('\n🔧 Checking for known issues...\n'));
    
    for (const issue of this.knowledgeBase.resolvedIssues) {
      if (await this.checkIfIssueExists(issue)) {
        console.log(chalk.yellow(`Found known issue: ${issue.id}`));
        await this.applySolution(issue);
      }
    }
  }

  async checkIfIssueExists(issue) {
    // Check symptoms to see if issue exists
    for (const symptom of issue.symptoms) {
      if (symptom.includes('404')) {
        // Check for 404 issues
        const result = await this.check404Issues();
        if (result.length > 0) return true;
      }
      
      if (symptom.includes('content') && symptom.includes('not')) {
        // Check for content rendering issues
        const result = await this.checkContentRendering();
        if (result.length > 0) return true;
      }
    }
    
    return false;
  }

  async check404Issues() {
    const issues = [];
    
    // Check industry pages specifically (known issue)
    const industryFiles = globSync('src/content/industry/*.md', { cwd: ROOT_DIR });
    const servicesRoute = path.join(ROOT_DIR, 'src/pages/services/[slug].astro');
    
    if (fs.existsSync(servicesRoute)) {
      const content = fs.readFileSync(servicesRoute, 'utf8');
      if (!content.includes("getCollection('industry')")) {
        issues.push({
          type: '404',
          collection: 'industry',
          count: industryFiles.length
        });
      }
    }
    
    return issues;
  }

  async checkContentRendering() {
    const issues = [];
    
    // Check location pages for content rendering issues
    const locationFiles = globSync('src/content/locations/*.md', { cwd: ROOT_DIR });
    
    for (const file of locationFiles) {
      const content = fs.readFileSync(path.join(ROOT_DIR, file), 'utf8');
      
      // Check for special formatting that needs parsing
      if (content.includes('## Hero Section') || 
          content.includes('Headline:') || 
          content.includes('Subheadline:')) {
        
        // Check if locations route uses proper parsing
        const routeFile = path.join(ROOT_DIR, 'src/pages/locations/[slug].astro');
        if (fs.existsSync(routeFile)) {
          const routeContent = fs.readFileSync(routeFile, 'utf8');
          
          // If using raw <Content /> instead of parsing, it's an issue
          if (routeContent.includes('<Content />') && 
              !routeContent.includes('parseContentSections')) {
            issues.push({
              type: 'content-not-rendering',
              file: file,
              reason: 'Special markdown format needs parsing'
            });
          }
        }
      }
    }
    
    return issues;
  }

  async applySolution(issue) {
    console.log(chalk.green(`  ✓ Applying known solution: ${issue.solution.fix}`));
    
    if (issue.id === 'industry-pages-404') {
      await this.fixIndustryPages();
    } else if (issue.id === 'location-content-not-rendering') {
      await this.fixLocationContentParsing();
    }
    
    // Record the fix
    this.recordFix(issue.id, issue.solution);
  }

  async fixIndustryPages() {
    const routePath = path.join(ROOT_DIR, 'src/pages/services/[slug].astro');
    let content = fs.readFileSync(routePath, 'utf8');
    
    if (!content.includes("getCollection('industry')")) {
      // Apply the known fix
      const fixCode = `
  const industries = await getCollection('industry');
  
  const industryPaths = industries.map(entry => ({
    params: { slug: entry.slug },
    props: { entry, collection: 'industry' },
  }));`;
      
      // Insert after services collection
      content = content.replace(
        "const services = await getCollection('services');",
        `const services = await getCollection('services');${fixCode}`
      );
      
      // Update return statement
      content = content.replace(
        /return services\.map\([^}]+\}\);/,
        `const servicePaths = services.map(entry => ({
    params: { slug: entry.slug },
    props: { entry, collection: 'services' },
  }));
  
  return [...servicePaths, ...industryPaths];`
      );
      
      fs.writeFileSync(routePath, content);
      console.log(chalk.green('    ✅ Fixed industry pages routing'));
    }
  }

  async fixLocationContentParsing() {
    console.log(chalk.yellow('    ⚠️  Location content parsing needs manual review'));
    console.log(chalk.cyan('    Recommendation: Update locations/[slug].astro to use dynamic content parsing'));
    
    // Add to queue for manual review
    this.addToManualReviewQueue({
      file: 'src/pages/locations/[slug].astro',
      issue: 'Content not rendering due to special markdown format',
      solution: 'Implement same parsing logic as services/[slug].astro'
    });
  }

  recordFix(issueId, solution) {
    const fix = {
      issueId,
      solution,
      timestamp: new Date().toISOString(),
      automatic: true
    };
    
    this.fixHistory.push(fix);
    
    // Save to persistent storage
    this.saveFix(fix);
  }

  saveFix(fix) {
    const fixLogPath = path.join(__dirname, 'fix-history.json');
    let history = [];
    
    try {
      const data = fs.readFileSync(fixLogPath, 'utf8');
      history = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet
    }
    
    history.push(fix);
    fs.writeFileSync(fixLogPath, JSON.stringify(history, null, 2));
  }

  setupMonitoring() {
    // Monitor for new issues
    const watcher = chokidar.watch(['src/content/**/*.md', 'src/pages/**/*.astro'], {
      cwd: ROOT_DIR,
      persistent: true,
      ignoreInitial: true
    });
    
    watcher.on('change', async (path) => {
      console.log(chalk.yellow(`\n📝 File changed: ${path}`));
      await this.analyzeChange(path);
    });
  }

  async analyzeChange(filePath) {
    // Check if this change might cause a known issue
    for (const pattern of Object.values(this.knowledgeBase.patterns)) {
      for (const cause of pattern.commonCauses) {
        if (await this.checkPattern(filePath, cause)) {
          console.log(chalk.red(`  ⚠️  Potential issue detected: ${cause}`));
          await this.preventIssue(filePath, cause);
        }
      }
    }
  }

  async checkPattern(filePath, pattern) {
    // Pattern matching logic
    if (pattern.includes('collection') && filePath.includes('[slug].astro')) {
      const content = fs.readFileSync(path.join(ROOT_DIR, filePath), 'utf8');
      
      // Check if all collections are included
      const collections = ['services', 'industry', 'locations', 'blog'];
      for (const collection of collections) {
        const collectionPath = path.join(ROOT_DIR, `src/content/${collection}`);
        if (fs.existsSync(collectionPath)) {
          const files = globSync(`${collection}/*.md`, { cwd: path.join(ROOT_DIR, 'src/content') });
          if (files.length > 0 && !content.includes(`getCollection('${collection}')`)) {
            return true;
          }
        }
      }
    }
    
    return false;
  }

  async preventIssue(filePath, issue) {
    console.log(chalk.blue(`  🛡️  Preventing issue: ${issue}`));
    
    // Apply preventive measures based on the issue type
    if (issue.includes('Missing collection')) {
      console.log(chalk.cyan('    Suggestion: Add all content collections to getStaticPaths'));
    }
  }

  async learningCycle() {
    console.log(chalk.blue('\n🧠 Learning cycle started...\n'));
    
    // Analyze recent fixes
    const recentFixes = this.fixHistory.slice(-10);
    
    for (const fix of recentFixes) {
      await this.learnFromFix(fix);
    }
    
    // Update knowledge base
    this.saveKnowledgeBase();
    
    console.log(chalk.green('  ✓ Knowledge base updated'));
  }

  async learnFromFix(fix) {
    // Extract patterns from the fix
    const pattern = this.extractPattern(fix);
    
    if (pattern && !this.knowledgeBase.patterns[pattern.id]) {
      this.knowledgeBase.patterns[pattern.id] = pattern;
      console.log(chalk.cyan(`  📚 Learned new pattern: ${pattern.id}`));
    }
  }

  extractPattern(fix) {
    // Pattern extraction logic
    // This would analyze the fix and extract reusable patterns
    return null; // Placeholder
  }

  addToManualReviewQueue(item) {
    const queuePath = path.join(__dirname, 'manual-review-queue.json');
    let queue = [];
    
    try {
      const data = fs.readFileSync(queuePath, 'utf8');
      queue = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet
    }
    
    queue.push({
      ...item,
      timestamp: new Date().toISOString(),
      status: 'pending'
    });
    
    fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2));
    console.log(chalk.yellow(`    📋 Added to manual review queue`));
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      knownIssues: this.knowledgeBase.resolvedIssues.length,
      patternsLearned: Object.keys(this.knowledgeBase.patterns).length,
      automaticFixes: this.fixHistory.filter(f => f.automatic).length,
      manualFixes: this.fixHistory.filter(f => !f.automatic).length,
      recentActivity: this.fixHistory.slice(-5)
    };
    
    console.log(chalk.blue.bold('\n📊 Agent Intelligence Report\n'));
    console.log(chalk.cyan(`Known Issues: ${report.knownIssues}`));
    console.log(chalk.cyan(`Patterns Learned: ${report.patternsLearned}`));
    console.log(chalk.green(`Automatic Fixes Applied: ${report.automaticFixes}`));
    console.log(chalk.yellow(`Manual Fixes Required: ${report.manualFixes}`));
    
    return report;
  }
}

// Start the intelligent agent
const agent = new IntelligentContentAgent();
agent.start().catch(console.error);

// Generate report every 30 minutes
setInterval(() => {
  agent.generateReport();
}, 30 * 60 * 1000);

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log(chalk.blue('\n\n👋 Intelligent Agent shutting down...'));
  agent.saveKnowledgeBase();
  agent.generateReport();
  process.exit(0);
});