#!/usr/bin/env node

/**
 * Content Report Generator
 * Generates a comprehensive report of all content status
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

class ContentReportGenerator {
  constructor() {
    this.collections = {};
    this.issues = [];
    this.stats = {
      total: 0,
      complete: 0,
      incomplete: 0,
      missing: 0
    };
  }

  async generate() {
    await this.analyzeContent();
    return this.generateMarkdownReport();
  }

  async analyzeContent() {
    const collections = ['services', 'industry', 'locations', 'blog'];
    
    for (const collection of collections) {
      this.collections[collection] = await this.analyzeCollection(collection);
    }
  }

  async analyzeCollection(collection) {
    const files = globSync(`src/content/${collection}/*.md`, { cwd: ROOT_DIR });
    const items = [];
    
    for (const file of files) {
      const fullPath = path.join(ROOT_DIR, file);
      const content = fs.readFileSync(fullPath, 'utf8');
      const { data, content: body } = matter(content);
      
      const analysis = {
        file: file.replace('src/content/', ''),
        title: data.title || 'MISSING TITLE',
        description: data.description || 'MISSING DESCRIPTION',
        wordCount: body.split(/\s+/).length,
        sections: this.countSections(body),
        completeness: this.calculateCompleteness(body, data),
        issues: []
      };
      
      // Check for issues
      if (!data.title) analysis.issues.push('Missing title');
      if (!data.description) analysis.issues.push('Missing description');
      if (analysis.wordCount < 300) analysis.issues.push('Low word count');
      if (analysis.sections < 3) analysis.issues.push('Too few sections');
      
      // Update stats
      this.stats.total++;
      if (analysis.completeness >= 80) {
        this.stats.complete++;
      } else if (analysis.completeness >= 40) {
        this.stats.incomplete++;
      } else {
        this.stats.missing++;
      }
      
      items.push(analysis);
    }
    
    return items;
  }

  countSections(content) {
    return (content.match(/^##\s+/gm) || []).length;
  }

  calculateCompleteness(content, frontmatter) {
    let score = 0;
    const checks = [
      { test: () => frontmatter.title, weight: 10 },
      { test: () => frontmatter.description, weight: 10 },
      { test: () => content.length > 500, weight: 20 },
      { test: () => content.length > 1000, weight: 20 },
      { test: () => this.countSections(content) >= 3, weight: 20 },
      { test: () => this.countSections(content) >= 5, weight: 20 }
    ];
    
    checks.forEach(check => {
      if (check.test()) score += check.weight;
    });
    
    return score;
  }

  generateMarkdownReport() {
    const report = [];
    
    // Header
    report.push('# Content Sync Report');
    report.push(`Generated: ${new Date().toISOString()}\n`);
    
    // Summary
    report.push('## Summary');
    report.push(`- **Total Files**: ${this.stats.total}`);
    report.push(`- **Complete**: ${this.stats.complete} (${Math.round(this.stats.complete/this.stats.total*100)}%)`);
    report.push(`- **Incomplete**: ${this.stats.incomplete} (${Math.round(this.stats.incomplete/this.stats.total*100)}%)`);
    report.push(`- **Critical**: ${this.stats.missing} (${Math.round(this.stats.missing/this.stats.total*100)}%)\n`);
    
    // Collection Details
    for (const [collection, items] of Object.entries(this.collections)) {
      report.push(`## ${collection.charAt(0).toUpperCase() + collection.slice(1)} Collection`);
      report.push(`Total: ${items.length} files\n`);
      
      // Sort by completeness
      items.sort((a, b) => a.completeness - b.completeness);
      
      // Show problematic files first
      const problematic = items.filter(i => i.completeness < 80);
      if (problematic.length > 0) {
        report.push('### ⚠️ Needs Attention');
        problematic.forEach(item => {
          report.push(`- **${item.file}** (${item.completeness}% complete)`);
          if (item.issues.length > 0) {
            report.push(`  - Issues: ${item.issues.join(', ')}`);
          }
          report.push(`  - Word count: ${item.wordCount}`);
          report.push(`  - Sections: ${item.sections}`);
        });
        report.push('');
      }
      
      // Show complete files
      const complete = items.filter(i => i.completeness >= 80);
      if (complete.length > 0) {
        report.push('### ✅ Complete');
        complete.forEach(item => {
          report.push(`- ${item.file} (${item.wordCount} words, ${item.sections} sections)`);
        });
        report.push('');
      }
    }
    
    // Action Items
    report.push('## Action Items');
    const criticalFiles = Object.values(this.collections)
      .flat()
      .filter(i => i.completeness < 40)
      .sort((a, b) => a.completeness - b.completeness);
    
    if (criticalFiles.length > 0) {
      report.push('### Critical (Immediate attention required)');
      criticalFiles.forEach(item => {
        report.push(`1. Fix **${item.file}**`);
        item.issues.forEach(issue => {
          report.push(`   - [ ] ${issue}`);
        });
      });
    }
    
    return report.join('\n');
  }
}

// Run and output report
const generator = new ContentReportGenerator();
generator.generate().then(report => {
  console.log(report);
}).catch(console.error);