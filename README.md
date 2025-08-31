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
│   │   └── blog/      # Blog articles (includes comparisons + thought leadership)
│   ├── layouts/       # Page layouts
│   └── pages/         # Static pages & dynamic routes
│       └── services/
│           └── [slug].astro  # Dynamic page generator
└── DESIGN_SYSTEMS.md  # Canonical brand, tokens, and component rules
```

## 🎯 Development Workflow

### For Building New Pages (200+ remaining)

1. **Check the sitemap** – See `sitemap.md` for complete page list  
2. **Check existing pages** – Review `/src/content/` to avoid duplicates  
3. **Create markdown files** in appropriate folder:  
   - Service pages → `/src/content/services/`  
   - Location pages → `/src/content/locations/`  
   - Industry pages → `/src/content/industry/`  
   - Blog posts (comparisons & thought leadership) → `/src/content/blog/`  

4. **Use this template structure:**

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

**Note:** `ServiceCards` and `ProcessTimeline` are enforced by the layout for consistency. See `/DESIGN_SYSTEMS.md` for canonical implementation and brand tokens.  

5. **Rendering:** `[slug].astro` (and related routes) transform markdown into styled sections automatically.

## 🎨 Design System (Authoritative)

All brand tokens, colors, typography, and component rules live in `/DESIGN_SYSTEMS.md`.  
Follow this single source of truth:

- Use `ServiceCards` for service promo blocks (layout auto-injects them on key marketing routes).  
- Use `ProcessTimeline` for process sections.  
- **Never generate pricing tables or packages — all services are custom quotes only.**  
- Do not fabricate testimonials or metrics.  

### Brand Colors
- **Primary Blue**: #47A7EB (Ocean)
- **Dark**: #0C3745 (Deep ocean)
- **Accent**: #FFC107 (Sun)
- **Sand**: #F5E6D3
- **White**: #FFFFFF

### Typography
- **Headlines**: Chillax (Semibold)
- **Body**: Synonym (Regular)

## 📑 Page Creation Priority

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

## ⚠️ Content Integrity (Critical)

- **NEVER** create fake testimonials or reviews  
- **NEVER** invent metrics like “300% increase”  
- **ONLY** use verified client data  
- Prefer honest benefits and capabilities over specifics when data isn’t verified

## 📝 Content Management

### Batch Creation Strategy
1. Create pages in batches of 10–20  
2. Focus on one category at a time  
3. Use consistent patterns within categories  
4. Test locally before committing  

### Blog Content
- Create in `/src/content/blog/`  
- Recommended filename format: `yyyy-mm-dd-slug.md`  
- Include meta descriptions  
- Target local SEO keywords  
- *Optional:* set `category: "Comparison"` in frontmatter for head‑to‑head posts

### Using AI Assistants
- Provide context from existing pages  
- Create in batches for consistency  
- Always verify no duplicates exist  

## 🚢 Deployment

The site auto-deploys via GitHub Actions when pushing to the `main` branch.

```sh
git add .
git commit -m "Add pages"
git push origin main
```

## 📊 Page Status Tracking (example)

| Category   | Total | Created | Remaining |
|------------|-------|---------|-----------|
| Services   | 94    | 3       | 91        |
| Locations  | 56    | 1       | 55        |
| Industries | 73    | 1       | 72        |
| Blog (incl. Comparisons) | ∞ | — | Ongoing |
| **Total**  | **223+** | **—** | **—** |

> Update numbers as work progresses.

## 🛠️ Useful Commands

- **Local Dev:** `npm run dev`  
- **Build Check:** `npm run build`  
- **Preview Build:** `npm run preview`  
- **Content Root:** `/src/content/`  
- **Service Renderer:** `/src/pages/services/[slug].astro`  

## 📞 Support

**Beach Bird Studios**  
Owner: Eric Stimson  
Phone: 910-512-6990  
Email: eric@beachbirdstudios.com  
Location: Wilmington, NC

---

*For design/dev rules: see `DESIGN_SYSTEMS.md`.*  
*For content planning: see `sitemap.md` and `content-creation-guidelines.md`.*
