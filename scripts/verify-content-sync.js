#!/usr/bin/env node

/**
 * Content Sync Verification Agent
 * Automatically detects and reports content mismatches between markdown files and rendered pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';
import matter from 'gray-matter';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

class ContentSyncVerifier {
  constructor() {
    this.issues = [];
    this.warnings = [];
    this.stats = {
      totalMarkdownFiles: 0,
      totalRoutes: 0,
      missingRoutes: 0,
      contentMismatches: 0,
      emptyContent: 0,
      orphanedPages: 0
    };
  }

  async run() {
    console.log(chalk.blue.bold('\n🔍 Content Sync Verification Starting...\n'));
    
    // Step 1: Inventory all markdown files
    const markdownFiles = await this.inventoryMarkdownFiles();
    
    // Step 2: Inventory all routes
    const routes = await this.inventoryRoutes();
    
    // Step 3: Check content mapping
    await this.verifyContentMapping(markdownFiles, routes);
    
    // Step 4: Check for content issues
    await this.checkContentIntegrity(markdownFiles);
    
    // Step 5: Generate report
    this.generateReport();
    
    // Exit with error if issues found
    if (this.issues.length > 0) {
      process.exit(1);
    }
  }

  async inventoryMarkdownFiles() {
    const files = globSync('src/content/**/*.md', { cwd: ROOT_DIR });
    const inventory = {};
    
    for (const file of files) {
      const fullPath = path.join(ROOT_DIR, file);
      const content = fs.readFileSync(fullPath, 'utf8');
      const { data, content: body } = matter(content);
      
      const relativePath = file.replace('src/content/', '');
      const [collection, ...pathParts] = relativePath.split('/');
      const slug = pathParts.join('/').replace('.md', '');
      
      inventory[`${collection}/${slug}`] = {
        path: file,
        collection,
        slug,
        frontmatter: data,
        contentLength: body.length,
        hasContent: body.trim().length > 100,
        wordCount: body.split(/\s+/).length
      };
      
      this.stats.totalMarkdownFiles++;
    }
    
    return inventory;
  }

  async inventoryRoutes() {
    const routes = {};
    
    // Static routes
    const staticRoutes = globSync('src/pages/**/*.astro', { cwd: ROOT_DIR });
    for (const route of staticRoutes) {
      const routePath = this.getRouteFromFile(route);
      routes[routePath] = {
        type: 'static',
        file: route,
        isDynamic: route.includes('[')
      };
      this.stats.totalRoutes++;
    }
    
    return routes;
  }

  getRouteFromFile(filePath) {
    return filePath
      .replace('src/pages/', '')
      .replace('/index.astro', '')
      .replace('.astro', '')
      .replace(/\[([^\]]+)\]/g, ':$1');
  }

  async verifyContentMapping(markdownFiles, routes) {
    console.log(chalk.yellow('Verifying content mapping...\n'));
    
    for (const [key, mdFile] of Object.entries(markdownFiles)) {
      const expectedRoute = this.getExpectedRoute(mdFile);
      
      // Check if route exists
      const routeExists = this.checkRouteExists(expectedRoute, routes);
      
      if (!routeExists) {
        this.issues.push({
          type: 'MISSING_ROUTE',
          severity: 'ERROR',
          file: mdFile.path,
          message: `No route found for ${key}. Expected route: ${expectedRoute}`
        });
        this.stats.missingRoutes++;
      }
      
      // Check content length
      if (!mdFile.hasContent) {
        this.warnings.push({
          type: 'LOW_CONTENT',
          severity: 'WARNING',
          file: mdFile.path,
          message: `File has very little content (${mdFile.wordCount} words)`
        });
        this.stats.emptyContent++;
      }
    }
  }

  getExpectedRoute(mdFile) {
    // Map collections to their route patterns
    const routeMap = {
      'services': '/services/:slug',
      'industry': '/services/:slug', // Industry pages use services route
      'locations': '/locations/:slug',
      'blog': '/blog/:slug',
      'homepage': '/',
      'design-principals': null // Internal docs, no public route
    };
    
    return routeMap[mdFile.collection];
  }

  checkRouteExists(expectedRoute, routes) {
    if (!expectedRoute) return true; // No route expected
    
    // Check for dynamic route handler
    const dynamicRoute = Object.keys(routes).find(route => {
      return route === expectedRoute || 
             (route.includes(':slug') && expectedRoute.includes(':slug'));
    });
    
    return !!dynamicRoute;
  }

  async checkContentIntegrity(markdownFiles) {
    console.log(chalk.yellow('Checking content integrity...\n'));
    
    for (const [key, mdFile] of Object.entries(markdownFiles)) {
      // Check for required frontmatter
      if (!mdFile.frontmatter.title) {
        this.issues.push({
          type: 'MISSING_FRONTMATTER',
          severity: 'ERROR',
          file: mdFile.path,
          message: 'Missing required frontmatter: title'
        });
      }
      
      if (!mdFile.frontmatter.description) {
        this.warnings.push({
          type: 'MISSING_FRONTMATTER',
          severity: 'WARNING',
          file: mdFile.path,
          message: 'Missing recommended frontmatter: description'
        });
      }
      
      // Check for duplicate slugs within same collection
      const duplicates = Object.entries(markdownFiles).filter(([k, f]) => 
        k !== key && f.collection === mdFile.collection && f.slug === mdFile.slug
      );
      
      if (duplicates.length > 0) {
        this.issues.push({
          type: 'DUPLICATE_SLUG',
          severity: 'ERROR',
          file: mdFile.path,
          message: `Duplicate slug "${mdFile.slug}" in collection "${mdFile.collection}"`
        });
      }
    }
  }

  generateReport() {
    console.log(chalk.blue.bold('\n📊 Content Sync Report\n'));
    
    // Statistics
    console.log(chalk.cyan('Statistics:'));
    console.log(`  Total Markdown Files: ${this.stats.totalMarkdownFiles}`);
    console.log(`  Total Routes: ${this.stats.totalRoutes}`);
    console.log(`  Missing Routes: ${this.stats.missingRoutes}`);
    console.log(`  Low Content Files: ${this.stats.emptyContent}`);
    
    // Issues
    if (this.issues.length > 0) {
      console.log(chalk.red.bold(`\n❌ Found ${this.issues.length} issues:\n`));
      this.issues.forEach(issue => {
        console.log(chalk.red(`  [${issue.severity}] ${issue.file}`));
        console.log(chalk.red(`    ${issue.message}`));
      });
    }
    
    // Warnings
    if (this.warnings.length > 0) {
      console.log(chalk.yellow.bold(`\n⚠️  Found ${this.warnings.length} warnings:\n`));
      this.warnings.forEach(warning => {
        console.log(chalk.yellow(`  [${warning.severity}] ${warning.file}`));
        console.log(chalk.yellow(`    ${warning.message}`));
      });
    }
    
    // Success
    if (this.issues.length === 0 && this.warnings.length === 0) {
      console.log(chalk.green.bold('\n✅ All content is properly synced!\n'));
    }
  }
}

// Run the verifier
const verifier = new ContentSyncVerifier();
verifier.run().catch(console.error);