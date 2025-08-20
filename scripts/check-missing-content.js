#!/usr/bin/env node

/**
 * Missing Content Checker
 * Identifies content that exists in markdown but isn't rendering on pages
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

class MissingContentChecker {
  constructor() {
    this.missingContent = [];
    this.contentGaps = [];
  }

  async run() {
    console.log(chalk.blue.bold('\n🔍 Checking for Missing Content...\n'));
    
    // Check each content collection
    await this.checkCollection('services');
    await this.checkCollection('industry');
    await this.checkCollection('locations');
    await this.checkCollection('blog');
    
    // Check for content gaps
    await this.checkContentGaps();
    
    // Report findings
    this.report();
  }

  async checkCollection(collection) {
    const files = globSync(`src/content/${collection}/*.md`, { cwd: ROOT_DIR });
    console.log(chalk.cyan(`Checking ${collection}: ${files.length} files`));
    
    for (const file of files) {
      const fullPath = path.join(ROOT_DIR, file);
      const content = fs.readFileSync(fullPath, 'utf8');
      const { data, content: body } = matter(content);
      
      // Parse content sections
      const sections = this.parseContentSections(body);
      
      // Check for rendering issues
      if (sections.length === 0 && body.trim().length > 100) {
        this.missingContent.push({
          file,
          issue: 'Content exists but no sections detected',
          contentLength: body.length
        });
      }
      
      // Check for incomplete sections
      sections.forEach(section => {
        if (section.content.trim().length < 50 && section.title !== 'Meta Information') {
          this.contentGaps.push({
            file,
            section: section.title,
            issue: 'Section has minimal content',
            contentLength: section.content.length
          });
        }
      });
    }
  }

  parseContentSections(content) {
    const sections = [];
    const lines = content.split('\n');
    let currentSection = null;
    
    for (const line of lines) {
      if (line.startsWith('## ')) {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          title: line.substring(3).trim(),
          content: ''
        };
      } else if (currentSection) {
        currentSection.content += line + '\n';
      }
    }
    
    if (currentSection) {
      sections.push(currentSection);
    }
    
    return sections;
  }

  async checkContentGaps() {
    // Check for required sections in each content type
    const requiredSections = {
      services: ['Hero Section', 'What We Deliver', 'Our Process'],
      industry: ['Industry Overview', 'Common Challenges', 'Our Solutions'],
      locations: ['Hero Section', 'Why Your Online Presence Matters', 'Service Area Coverage']
    };
    
    for (const [collection, sections] of Object.entries(requiredSections)) {
      const files = globSync(`src/content/${collection}/*.md`, { cwd: ROOT_DIR });
      
      for (const file of files) {
        const fullPath = path.join(ROOT_DIR, file);
        const content = fs.readFileSync(fullPath, 'utf8');
        const { content: body } = matter(content);
        
        const existingSections = this.parseContentSections(body).map(s => s.title);
        
        sections.forEach(required => {
          if (!existingSections.some(s => s.includes(required))) {
            this.contentGaps.push({
              file,
              section: required,
              issue: 'Required section missing',
              contentLength: 0
            });
          }
        });
      }
    }
  }

  report() {
    console.log(chalk.blue.bold('\n📊 Missing Content Report\n'));
    
    if (this.missingContent.length > 0) {
      console.log(chalk.red.bold(`Found ${this.missingContent.length} files with missing content:\n`));
      this.missingContent.forEach(item => {
        console.log(chalk.red(`  ${item.file}`));
        console.log(chalk.red(`    Issue: ${item.issue}`));
        console.log(chalk.red(`    Content length: ${item.contentLength} chars`));
      });
    }
    
    if (this.contentGaps.length > 0) {
      console.log(chalk.yellow.bold(`\nFound ${this.contentGaps.length} content gaps:\n`));
      this.contentGaps.forEach(gap => {
        console.log(chalk.yellow(`  ${gap.file}`));
        console.log(chalk.yellow(`    Section: ${gap.section}`));
        console.log(chalk.yellow(`    Issue: ${gap.issue}`));
      });
    }
    
    if (this.missingContent.length === 0 && this.contentGaps.length === 0) {
      console.log(chalk.green.bold('✅ No missing content detected!\n'));
    }
  }
}

// Run the checker
const checker = new MissingContentChecker();
checker.run().catch(console.error);