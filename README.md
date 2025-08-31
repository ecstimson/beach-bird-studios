# Beach Bird Studios Website

Premium web design & SEO services for North Carolina businesses. Built with Astro, optimized for speed and conversion.

## 🚀 Quick Start

```sh
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview build locally
```

## 📁 Project Structure

```
/
├── public/
│   ├── fonts/         # Chillax & Synonym fonts
│   └── images/        # Logo, icons, assets
├── src/
│   ├── components/    # Reusable Astro components
│   ├── content/       # Markdown content (200+ pages)
│   │   ├── services/  # Service & platform pages
│   │   ├── locations/ # Geographic location pages
│   │   ├── industry/  # Industry-specific pages
│   │   └── blog/      # Blog articles
│   ├── layouts/       # Page layouts
│   └── pages/         # Static pages & dynamic routes
│       └── services/
│           └── [slug].astro  # Dynamic page generator
└── CLAUDE.md         # AI assistant guidelines
```

## 🎯 Development Workflow

### For Building New Pages (200+ remaining)

1. **Check the sitemap** - See `sitemap.md` for complete page list
2. **Check existing pages** - Review `/src/content/` to avoid duplicates
3. **Create markdown files** in appropriate folder:
   - Service pages → `/src/content/services/`
   - Location pages → `/src/content/locations/`
   - Industry pages → `/src/content/industry/`
   - Blog posts → `/src/content/blog/`

4. **Use the template structure**:
```markdown
---
title: "Page Title"
description: "SEO meta description"
---

# Main Heading

## Section with Features
- Feature One: Description here
- Feature Two: Another description

## Our Process
### Step 1
Description of first step
```

**Note**: ServiceCards and ProcessTimeline are enforced by the layout for consistency. See `/DESIGN_SYSTEM.md` for complete brand guidelines.

5. **The magic happens automatically** - `[slug].astro` transforms markdown into beautiful pages

### Design System
All brand tokens, colors, typography, and components are defined in `/DESIGN_SYSTEM.md`. Follow this single source of truth for consistency.

### Page Creation Priority

**Phase 1: Core Services** (50+ pages)
- Platform pages (Framer, Webflow, AI tools)
- SEO services for each platform
- Website design variations

**Phase 2: Locations** (30+ pages)
- Wilmington area beaches
- Major NC cities
- Regional service pages

**Phase 3: Industries** (70+ pages)
- Medical/Healthcare
- Legal Services
- Home Services
- Real Estate
- Professional Services

See `content-creation-guidelines.md` for detailed page lists.

## 🎨 Design System

### Brand Colors
- **Primary Blue**: #47A7EB (Ocean)
- **Dark**: #0C3745 (Deep ocean)
- **Accent**: #FFC107 (Sun)
- **Sand**: #F5E6D3
- **White**: #FFFFFF

### Typography
- **Headlines**: Chillax (Semibold)
- **Body**: Synonym (Regular)

### Dynamic Content Components

The `[slug].astro` file automatically creates different visual components based on markdown patterns:

| Markdown Pattern | Visual Result |
|-----------------|---------------|
| `## Package Names` with bullet lists | 3-column pricing cards |
| `- Feature: Description` | Feature grid with icons |
| `### Subsections` | Industry/service cards |
| `## Our Process` sections | Numbered step circles |
| Regular content | Alternating background sections |

## ⚠️ CRITICAL RULES

### Content Integrity
- **NEVER** create fake testimonials or reviews
- **NEVER** invent metrics like "300% increase"
- **ONLY** use verified client data
- Use general benefits instead of fake specifics

### When Creating Pages
1. **Read existing content first** - Check `/src/content/` folders
2. **Follow the patterns** - Use existing pages as templates
3. **Keep it real** - No fake data, testimonials, or metrics
4. **Focus on value** - Emphasize real benefits and capabilities

## 📝 Content Management

### For Ongoing Development

**Batch Creation Strategy**:
1. Create pages in batches of 10-20
2. Focus on one category at a time
3. Use consistent patterns within categories
4. Test locally before committing

**Blog Content**:
- Create in `/src/content/blog/`
- Follow format: `yyyy-mm-dd-slug.md`
- Include meta descriptions
- Target local SEO keywords

### Using AI Assistants

When using Claude or other AI tools:
1. Reference `CLAUDE.md` for guidelines
2. Provide context from existing pages
3. Create in batches for consistency
4. Always verify no duplicates exist

## 🚢 Deployment

The site auto-deploys via GitHub Actions when pushing to main branch.

```sh
git add .
git commit -m "Add new service pages"
git push origin main
```

## 📊 Page Status Tracking

| Category | Total | Created | Remaining |
|----------|-------|---------|-----------|
| Services | 94 | 3 | 91 |
| Locations | 56 | 1 | 55 |
| Industries | 73 | 1 | 72 |
| Blog | ∞ | 1 | Ongoing |
| **Total** | **223+** | **6** | **217+** |

## 🛠️ Tools & Resources

- **Local Dev**: `npm run dev`
- **Check Build**: `npm run build`
- **Preview**: `npm run preview`
- **Content Location**: `/src/content/`
- **Page Generator**: `/src/pages/services/[slug].astro`
- **Guidelines**: `CLAUDE.md`, `content-creation-guidelines.md`

## 📞 Support

**Beach Bird Studios**
- Owner: Eric Stimson
- Phone: 910-512-6990
- Email: eric@beachbirdstudios.com
- Location: Wilmington, NC

---

*For AI assistants: See `CLAUDE.md` for detailed implementation guidelines.*
*For content creators: See `content-creation-guidelines.md` for page lists and templates.*