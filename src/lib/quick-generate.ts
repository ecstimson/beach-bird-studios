import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

interface ContentTemplate {
  type: 'homepage' | 'service' | 'location' | 'blog';
  title: string;
  metaDescription: string;
  keywords: string[];
  content: string;
}

interface BusinessConfig {
  name: string;
  description: string;
  services: Array<{
    name: string;
    description: string;
    keywords: string[];
  }>;
  locations: string[];
  contact: {
    email: string;
    phone: string;
  };
}

export class QuickContentGenerator {
  private config: BusinessConfig;
  private templates: Map<string, string> = new Map();

  constructor(config: BusinessConfig) {
    this.config = config;
    this.loadTemplates();
  }

  private loadTemplates() {
    this.templates.set('homepage', `---
title: "{title}"
meta_description: "{metaDescription}"
keywords: [{keywords}]
author: "Beach Bird Studios"
date: "{date}"
status: "draft"
type: "homepage"
---

# {title}

{content}

## Our Services

{servicesContent}

## Why Choose {businessName}?

- **Expert Development**: Specialized in modern web technologies
- **Design-Focused**: Converting beautiful designs into functional websites
- **SEO Optimized**: Built for search engine success
- **Ongoing Support**: Reliable maintenance and updates

## Ready to Get Started?

Contact us today to discuss your project and get a free consultation.

**Email**: {email}
**Phone**: {phone}
`);

    this.templates.set('service', `---
title: "{title}"
meta_description: "{metaDescription}"
keywords: [{keywords}]
author: "Beach Bird Studios"
date: "{date}"
status: "draft"
type: "service"
---

# {title}

{content}

## What's Included

{includedContent}

## Our Process

1. **Discovery & Planning**
2. **Design & Development**  
3. **Testing & Optimization**
4. **Launch & Support**

## Get Started Today

Ready to begin your project? Contact us for a free consultation.

**Email**: {email}
**Phone**: {phone}
`);

    this.templates.set('location', `---
title: "{title}"
meta_description: "{metaDescription}"
keywords: [{keywords}]
author: "Beach Bird Studios"
date: "{date}"
status: "draft"
type: "location"
---

# {title}

{content}

## Local Web Development Services in {location}

We provide comprehensive web development services to businesses in {location} and surrounding areas.

## Our {location} Services

{servicesContent}

## Why Choose Local?

- **Face-to-face meetings** when needed
- **Understanding of local market**
- **Quick response times**
- **Community investment**

## Contact Us

**Email**: {email}
**Phone**: {phone}
`);

    this.templates.set('blog', `---
title: "{title}"
meta_description: "{metaDescription}"
keywords: [{keywords}]
author: "Beach Bird Studios"
date: "{date}"
status: "draft"
type: "blog"
---

# {title}

{content}

## Conclusion

{conclusion}

---

*Need help with your web development project? [Contact Beach Bird Studios]({email}) for expert assistance.*
`);
  }

  async generateContent(type: ContentTemplate['type'], data: Partial<ContentTemplate>): Promise<string> {
    const template = this.templates.get(type);
    if (!template) {
      throw new Error(`Template not found for type: ${type}`);
    }

    const date = new Date().toISOString().split('T')[0];
    const keywordsString = data.keywords?.map(k => `"${k}"`).join(', ') || '';

    let content = template
      .replace(/\{title\}/g, data.title || '')
      .replace(/\{metaDescription\}/g, data.metaDescription || '')
      .replace(/\{keywords\}/g, keywordsString)
      .replace(/\{date\}/g, date)
      .replace(/\{content\}/g, data.content || '')
      .replace(/\{businessName\}/g, this.config.name)
      .replace(/\{email\}/g, this.config.contact.email)
      .replace(/\{phone\}/g, this.config.contact.phone);

    if (type === 'homepage' || type === 'location') {
      const servicesContent = this.config.services
        .map(service => `- **${service.name}**: ${service.description}`)
        .join('\n');
      content = content.replace(/\{servicesContent\}/g, servicesContent);
    }

    if (type === 'location') {
      const locationName = data.title?.replace(/.*in\s/, '') || '';
      content = content.replace(/\{location\}/g, locationName);
    }

    return content;
  }

  async saveContent(filename: string, content: string, folder: string = 'drafts'): Promise<void> {
    const filePath = path.join(process.cwd(), 'content-pipeline', folder, filename);
    await writeFile(filePath, content, 'utf8');
  }

  async generateHomepage(): Promise<string> {
    const homepage = await this.generateContent('homepage', {
      title: `${this.config.name} - Premium Web Development & Design`,
      metaDescription: `${this.config.description}. Fast, beautiful, SEO-optimized websites.`,
      keywords: ['web development', 'figma to code', 'react development', 'seo services'],
      content: `Welcome to ${this.config.name}, where innovative design meets expert development. We specialize in converting Figma designs into pixel-perfect, high-performance websites that drive results.`
    });

    await this.saveContent('index.md', homepage);
    return homepage;
  }

  async generateServicePages(): Promise<string[]> {
    const results: string[] = [];

    for (const service of this.config.services) {
      const content = await this.generateContent('service', {
        title: `${service.name} - ${this.config.name}`,
        metaDescription: `Professional ${service.name.toLowerCase()} services. ${service.description}`,
        keywords: service.keywords,
        content: service.description,
      });

      const filename = service.name.toLowerCase().replace(/\s+/g, '-') + '.md';
      await this.saveContent(filename, content);
      results.push(content);
    }

    return results;
  }

  async generateLocationPages(locations: string[]): Promise<string[]> {
    const results: string[] = [];

    for (const location of locations) {
      const content = await this.generateContent('location', {
        title: `Web Development Services in ${location} - ${this.config.name}`,
        metaDescription: `Professional web development services in ${location}. Local expertise, modern solutions.`,
        keywords: [`web development ${location.toLowerCase()}`, `websites ${location.toLowerCase()}`, 'local web developer'],
        content: `Looking for professional web development services in ${location}? ${this.config.name} provides comprehensive web development solutions for businesses throughout ${location}.`
      });

      const filename = location.toLowerCase().replace(/[,\s]+/g, '-') + '.md';
      await this.saveContent(filename, content);
      results.push(content);
    }

    return results;
  }

  async generateBlogPosts(topics: Array<{ title: string; content: string; keywords: string[] }>): Promise<string[]> {
    const results: string[] = [];

    for (const topic of topics) {
      const content = await this.generateContent('blog', {
        title: topic.title,
        metaDescription: `${topic.content.substring(0, 150)}...`,
        keywords: topic.keywords,
        content: topic.content,
      });

      const filename = topic.title.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-') + '.md';
      
      await this.saveContent(filename, content);
      results.push(content);
    }

    return results;
  }

  async listContent(folder: string = 'drafts'): Promise<string[]> {
    const folderPath = path.join(process.cwd(), 'content-pipeline', folder);
    try {
      return await readdir(folderPath);
    } catch (error) {
      return [];
    }
  }

  async moveContent(filename: string, from: string, to: string): Promise<void> {
    const fromPath = path.join(process.cwd(), 'content-pipeline', from, filename);
    const toPath = path.join(process.cwd(), 'content-pipeline', to, filename);
    
    const content = await readFile(fromPath, 'utf8');
    await writeFile(toPath, content, 'utf8');
    
    // Remove from original location
    fs.unlinkSync(fromPath);
  }
}

export async function loadBusinessConfig(): Promise<BusinessConfig> {
  const configPath = path.join(process.cwd(), '.claude', 'project-config.json');
  const configContent = await readFile(configPath, 'utf8');
  const config = JSON.parse(configContent);
  
  return {
    name: config.business.name,
    description: config.business.description,
    services: config.services.primary,
    locations: config.business.location.serviceAreas,
    contact: config.business.contact
  };
}