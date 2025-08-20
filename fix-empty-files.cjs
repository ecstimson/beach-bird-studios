const fs = require('fs');
const path = require('path');

// Helper to convert filename to title
function filenameToTitle(filename) {
  return filename
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\bNc\b/g, 'NC')
    .replace(/\bSeo\b/g, 'SEO')
    .replace(/\bAi\b/g, 'AI')
    .replace(/\bVs\b/g, 'vs')
    .replace(/\bPpc\b/g, 'PPC')
    .replace(/\bDiy\b/g, 'DIY')
    .replace(/\bRoi\b/g, 'ROI')
    .replace(/\bCro\b/g, 'CRO')
    .replace(/\bB2b\b/g, 'B2B')
    .replace(/\bIt\b/g, 'IT')
    .replace(/\bHr\b/g, 'HR')
    .replace(/\bHipaa\b/g, 'HIPAA')
    .replace(/\bIdx\b/g, 'IDX')
    .replace(/\bGmb\b/g, 'GMB')
    .replace(/\bUx\b/g, 'UX')
    .replace(/\bCpa\b/g, 'CPA')
    .replace(/\bPi\b/g, 'PI')
    .replace(/\bPt\b/g, 'PT')
    .replace(/\bRe\b/g, 'RE')
    .replace(/\bRei\b/g, 'REI')
    .replace(/\bMls\b/g, 'MLS')
    .replace(/\bHvac\b/g, 'HVAC');
}

// Templates for different content types
const templates = {
  location: (city) => ({
    title: `${city} Web Design & Development Services`,
    description: `Professional web design services in ${city}. Custom websites, AI development, and SEO services for local businesses.`,
    content: `# Web Design Services in ${city}

Looking for professional web design in ${city}? Beach Bird Studios delivers modern, conversion-focused websites that help local businesses thrive online.

## Why Choose Beach Bird Studios

- Fast 3-4 week delivery
- Mobile-first responsive design
- SEO optimization for local searches
- Competitive pricing

## Our Services

**Custom Website Design** - Beautiful, fast websites built with modern tools like Framer and Webflow.

**AI Website Development** - Generate 100+ optimized pages to dominate local search results.

**SEO Services** - Monthly SEO management for any platform.

## Ready to Grow Your Business?

Call **910-512-6990** or email eric@beachbirdstudios.com for a free consultation.`
  }),
  
  service: (service) => ({
    title: service,
    description: `${service} from Beach Bird Studios. Professional web design, development, and digital marketing services.`,
    content: `# ${service}

Transform your online presence with our professional ${service.toLowerCase()}. Beach Bird Studios delivers results-driven solutions for businesses across North Carolina.

## Our Approach

We combine modern technology with proven strategies to deliver exceptional results. Our ${service.toLowerCase()} help businesses:

- Increase online visibility
- Generate more qualified leads
- Improve conversion rates
- Build stronger digital presence

## Why Beach Bird Studios?

- **Experience**: Years of expertise in web design and digital marketing
- **Results**: Proven track record of client success
- **Speed**: Fast delivery without compromising quality
- **Support**: Ongoing assistance and optimization

## Get Started Today

Ready to elevate your business online? Contact us for a free consultation.

**Call 910-512-6990** or email eric@beachbirdstudios.com`
  }),
  
  industry: (industry) => ({
    title: `${industry} Website Design & Development`,
    description: `Professional website design for ${industry.toLowerCase()}. Custom solutions tailored to your industry needs.`,
    content: `# ${industry} Website Design

Specialized web design solutions for ${industry.toLowerCase()}. Beach Bird Studios understands the unique needs of your industry and delivers websites that drive results.

## Industry-Specific Features

We create websites tailored to ${industry.toLowerCase()} with features like:

- Professional design that builds trust
- Mobile-responsive for all devices
- SEO optimization for industry keywords
- Conversion-focused layouts
- Fast loading speeds

## Our Process

1. **Discovery** - Understanding your specific needs
2. **Design** - Creating a custom solution
3. **Development** - Building with modern technology
4. **Launch** - Going live with optimization

## Why Industry Expertise Matters

Working with a web design partner who understands ${industry.toLowerCase()} gives you a competitive advantage. We know what works in your industry.

## Start Your Project

Get a website that sets you apart from competitors.

**Call 910-512-6990** or email eric@beachbirdstudios.com`
  }),
  
  comparison: (title) => ({
    title: title,
    description: `Compare ${title.toLowerCase()}. Make informed decisions for your business website and digital marketing.`,
    content: `# ${title}

Making the right choice for your business website requires understanding your options. This guide helps you compare and choose the best solution.

## Key Considerations

When evaluating options, consider:

- Your business goals and objectives
- Budget and timeline requirements
- Technical needs and functionality
- Long-term scalability
- Maintenance and support needs

## Making the Right Choice

The best solution depends on your specific needs. Consider factors like:

- **Budget**: Initial investment and ongoing costs
- **Timeline**: How quickly you need to launch
- **Features**: Required functionality and capabilities
- **Growth**: Ability to scale with your business

## Our Expertise

Beach Bird Studios offers various solutions to match different needs. We help you choose the right approach for your business.

## Get Expert Guidance

Not sure which option is best? We'll help you make the right decision.

**Call 910-512-6990** or email eric@beachbirdstudios.com for a free consultation.`
  })
};

// Process all empty files
function processEmptyFiles() {
  const contentDir = 'src/content';
  const directories = ['services', 'locations', 'industry', 'comparisons'];
  let totalFixed = 0;
  
  directories.forEach(dir => {
    const dirPath = path.join(contentDir, dir);
    if (!fs.existsSync(dirPath)) return;
    
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
    let dirFixed = 0;
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file is empty or nearly empty
      if (content.trim().length < 10 || !content.includes('---')) {
        const baseName = path.basename(file, '.md');
        const title = filenameToTitle(baseName);
        
        let template;
        if (dir === 'locations') {
          const city = title.replace(' Web Design', '');
          template = templates.location(city);
        } else if (dir === 'services') {
          template = templates.service(title);
        } else if (dir === 'industry') {
          template = templates.industry(title);
        } else if (dir === 'comparisons') {
          template = templates.comparison(title);
        }
        
        const newContent = `---
title: "${template.title}"
description: "${template.description}"
---

${template.content}`;
        
        fs.writeFileSync(filePath, newContent);
        dirFixed++;
        totalFixed++;
      }
    });
    
    console.log(`✅ Fixed ${dirFixed} files in ${dir}/`);
  });
  
  console.log(`\n🎉 Total files fixed: ${totalFixed}`);
}

// Run the fix
processEmptyFiles();