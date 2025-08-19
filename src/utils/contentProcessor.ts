import type { MarkdownHeading } from 'astro';

// Type definitions for processed content
export interface ProcessedSection {
  title: string;
  content: ContentItem[];
  type: SectionType;
  features?: string[];
}

export interface ContentItem {
  type: 'paragraph' | 'h3' | 'bullet' | 'card-title';
  text: string;
}

export type SectionType = 
  | 'content' 
  | 'pricing' 
  | 'industries' 
  | 'process' 
  | 'comparison' 
  | 'features';

export interface ProcessedContent {
  sections: ProcessedSection[];
  headings: MarkdownHeading[];
  metadata: ContentMetadata;
}

export interface ContentMetadata {
  wordCount: number;
  readingTime: number;
  hasCode: boolean;
  hasTables: boolean;
}

/**
 * Content processor for markdown content
 * Provides centralized, type-safe content processing
 */
export class ContentProcessor {
  /**
   * Parse markdown content into structured sections
   */
  static parseMarkdown(rawContent: string): ProcessedContent {
    const sections: ProcessedSection[] = [];
    const headings: MarkdownHeading[] = [];
    let currentSection: ProcessedSection = { 
      title: '', 
      content: [], 
      type: 'content' 
    };

    const lines = rawContent.split('\n');
    let skipNextLine = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip H1 titles (shown in hero)
      if (line.startsWith('# ') && !line.startsWith('## ')) {
        headings.push({
          depth: 1,
          text: line.substring(2).trim(),
          slug: this.slugify(line.substring(2).trim()),
        });
        skipNextLine = true;
        continue;
      }
      
      if (skipNextLine && line.trim() === '') {
        skipNextLine = false;
        continue;
      }
      
      // Process H2 sections
      if (line.startsWith('## ')) {
        if (currentSection.content.length > 0 || currentSection.title) {
          sections.push({ ...currentSection });
        }
        
        const title = line.substring(3).trim();
        headings.push({
          depth: 2,
          text: title,
          slug: this.slugify(title),
        });
        
        currentSection = { 
          title, 
          content: [],
          type: this.detectSectionType(title)
        };
      } 
      // Process H3 headers
      else if (line.startsWith('### ')) {
        const text = line.substring(4).trim();
        headings.push({
          depth: 3,
          text,
          slug: this.slugify(text),
        });
        currentSection.content.push({ type: 'h3', text });
      }
      // Process bold headers (potential card titles)
      else if (this.isBoldLine(line)) {
        currentSection.content.push({ 
          type: currentSection.type === 'pricing' ? 'card-title' : 'paragraph', 
          text: line 
        });
      }
      // Process bullet points
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        const text = line.substring(2).trim();
        
        if (this.isFeatureItem(text)) {
          if (!currentSection.features) currentSection.features = [];
          currentSection.features.push(text);
          if (currentSection.type === 'content') {
            currentSection.type = 'features';
          }
        } else {
          currentSection.content.push({ type: 'bullet', text });
        }
      }
      // Regular paragraphs
      else if (line.trim()) {
        currentSection.content.push({ type: 'paragraph', text: line });
      }
    }
    
    // Add the last section
    if (currentSection.content.length > 0 || currentSection.title) {
      sections.push(currentSection);
    }

    const metadata = this.extractMetadata(rawContent);

    return { sections, headings, metadata };
  }

  /**
   * Detect section type based on title keywords
   */
  private static detectSectionType(title: string): SectionType {
    const lowerTitle = title.toLowerCase();
    
    if (
      lowerTitle.includes('package') || 
      lowerTitle.includes('investment') || 
      lowerTitle.includes('pricing')
    ) {
      return 'pricing';
    }
    
    if (
      lowerTitle.includes('perfect for') || 
      lowerTitle.includes('industries')
    ) {
      return 'industries';
    }
    
    if (lowerTitle.includes('process')) {
      return 'process';
    }
    
    if (
      lowerTitle.includes('comparison') || 
      lowerTitle.includes(' vs ')
    ) {
      return 'comparison';
    }
    
    return 'content';
  }

  /**
   * Check if a line is entirely bold
   */
  private static isBoldLine(line: string): boolean {
    return line.startsWith('**') && 
           line.includes('**') && 
           line.indexOf('**', 2) > 2;
  }

  /**
   * Check if text looks like a feature item
   */
  private static isFeatureItem(text: string): boolean {
    return text.includes(':') || text.includes('**');
  }

  /**
   * Generate URL-safe slug from text
   */
  private static slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with single
      .trim()
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  }

  /**
   * Extract metadata from content
   */
  private static extractMetadata(content: string): ContentMetadata {
    const words = content.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const readingTime = Math.ceil(wordCount / 200); // Avg 200 words per minute
    const hasCode = /```[\s\S]*?```/.test(content) || /`[^`]+`/.test(content);
    const hasTables = /\|.*\|.*\|/.test(content);

    return {
      wordCount,
      readingTime,
      hasCode,
      hasTables,
    };
  }

  /**
   * Validate content against schema
   */
  static validateContent(content: unknown, schema: any): boolean {
    try {
      schema.parse(content);
      return true;
    } catch (error) {
      console.error('Content validation failed:', error);
      return false;
    }
  }

  /**
   * Generate table of contents from headings
   */
  static generateTOC(headings: MarkdownHeading[]): string {
    return headings
      .filter(h => h.depth === 2 || h.depth === 3)
      .map(h => {
        const indent = '  '.repeat(h.depth - 2);
        return `${indent}- [${h.text}](#${h.slug})`;
      })
      .join('\n');
  }
}