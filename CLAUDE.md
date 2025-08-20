# Beach Bird Studios Website - Design & Development Guidelines

## Plan and Review

### Before Starting Work

Before you begin, write a detailed implementation plan in a file named `claude/tasks/TASK_NAME.md`.

This plan should include:

- A clear, detailed breakdown of the implementation steps.
- The reasoning behind your approach.
- A list of specific tasks.

Focus on a Minimum Viable Product (MVP) to avoid over-planning. Once the plan is ready, please ask me to review it. Do not proceed with implementation until I have approved the plan.

## While Implementing

As you work, keep the plan updated. After you complete a task, append a detailed description of the changes you've made to the plan. This ensures that the progress and next steps are clear and can be easily handed over to other engineers if needed.

## CRITICAL CONTENT RULES - NEVER VIOLATE THESE

### Testimonials and Reviews
- **NEVER** create fictitious testimonials, reviews, or client quotes
- **NEVER** invent client names or company names for testimonials
- **NEVER** attribute quotes to made-up people or businesses
- **ONLY** use real testimonials with written permission from real clients
- If no testimonials exist, use "Coming soon" or leave the section empty

### Case Studies and Metrics
- **NEVER** invent specific metrics or results (like "300% increase")
- **NEVER** create fake case studies
- **ONLY** use real, verified data from actual client projects
- Use general benefit statements instead of specific fake metrics
- Examples of acceptable general statements:
  - "Improve your search rankings"
  - "Generate more qualified leads"
  - "Increase your online visibility"

### Legal Compliance
- All testimonials must be genuine and verifiable
- Fake testimonials violate FTC guidelines and can result in legal action
- When in doubt, leave it out
- Always prefer general value propositions over specific unverified claims

## Brand Identity

### Colors
- **Primary Blue**: #47A7EB (Ocean blue)
- **Primary Dark**: #0C3745 (Deep ocean)
- **Accent Yellow**: #FFC107 (Beach sun)
- **Sand**: #F5E6D3 (Beach sand)
- **White**: #FFFFFF
- **Gray shades**: Use Tailwind defaults

### Typography
- **Headlines**: Chillax font family (Semibold weight)
- **Body Text**: Synonym font family (Regular weight)
- **Fallbacks**: system-ui, -apple-system, sans-serif

### Logo & Assets
- Logo location: `/public/images/logo.svg`
- Icon (favicon): `/public/images/Icon.svg`
- Font files: `/public/fonts/` (chillax.css and synonym.css)

## Website Structure

### Services (3 Main Offerings)
1. **Custom Web Design** - Beautiful, fast websites built for conversion
2. **AI Website Development** - 100+ page websites that dominate search
3. **SEO Services** - Optimization for existing websites on any platform

### Key Pages
- Homepage (`/`)
- AI Website Development (`/ai-website-development`)
- Custom Website Design (`/custom-website-design`)
- SEO Services (`/seo-services`)
- About (`/about`)
- Contact (`/contact`)

### Service-Location Pages (Examples)
- `/web-design-wilmington-nc`
- `/seo-services-wrightsville-beach`
- `/website-development-carolina-beach`

## Design Patterns

### Hero Sections
- Use gradient backgrounds: `gradient-hero` class
- Include trust indicators (location, reliability, payment options)
- Clear CTAs with primary and secondary buttons

### Buttons
- **Primary**: Yellow gradient background, dark text
- **Secondary**: White background, bordered
- Always include hover states with transform effects

### Cards
- Use `card-hover` class for hover animations
- Featured cards should have the `featured-card` class with ribbon

### Animations
- Fade in up: `animate-fadeInUp`
- Stagger delays: `stagger-1`, `stagger-2`, etc.
- Smooth scroll enabled globally

## Content Guidelines

### Tone
- Professional but approachable
- Focus on results and benefits
- Local focus (Wilmington, NC coastal area)
- Urgency without being pushy

### SEO Focus
- Target local keywords (city + service combinations)
- Emphasize speed of delivery
- Highlight competitive advantages
- Include social proof and trust signals

## Development Notes

### Tech Stack
- Astro framework
- Tailwind CSS
- Lucide icons
- Custom animations and utilities in global.css

### Performance
- Optimize images (use WebP where possible)
- Lazy load below-the-fold content
- Minimize JavaScript usage
- Fast font loading with font-display: swap

### Responsive Design
- Mobile-first approach
- Test on all breakpoints
- Ensure touch targets are adequate
- Optimize for Core Web Vitals

## Dynamic Content Pages System

### How [slug].astro Works
The `/src/pages/services/[slug].astro` file automatically transforms markdown content into visually appealing pages:

1. **Content Location**: Place markdown files in `/src/content/services/`
2. **Automatic Routing**: Files become pages at `/services/[filename]`
3. **Visual Sections**: Each `## H2` header creates a new section with alternating backgrounds
4. **Smart Component Conversion**: Different markdown patterns become different visual components

### Markdown Patterns for Visual Components

#### Creating Pricing Cards
```markdown
## [Any]thing Packages

**Package Name** - Tagline here
- Feature one
- Feature two
- Feature three

**Another Package** - Different tagline
- Feature one
- Feature two
- Feature three
```
Result: 3-column pricing cards with the middle one featured

#### Creating Feature Grids
```markdown
## Section Title

- Feature Name: Description of the feature
- Another Feature: Its description here
- Third Feature: Description text
```
Result: Grid of cards with colored icons

#### Creating Industry/Service Cards
```markdown
## Perfect For These Industries

### Industry Name
Description of how we help this industry.

### Another Industry
How we serve this sector.
```
Result: Grid layout with bordered cards

#### Creating Process Steps
```markdown
## Our Process

### Step One Title
Description of this step

### Step Two Title
What happens in step two
```
Result: Numbered circles with descriptions

### Section Type Detection
The system automatically detects section types based on H2 keywords:
- Contains "package", "investment", "pricing" → Pricing cards
- Contains "perfect for", "industries" → Industry grid
- Contains "process" → Process steps
- Contains "vs", "comparison" → Comparison cards
- Bullet points with colons → Feature grid
- Everything else → Regular content section

### Background Rotation
Sections automatically alternate backgrounds:
1. White (default)
2. Cream (#F5E6D3 with 30% opacity)
3. Gray-50
4. Back to white (repeats)

### Important Notes
- Always use `## H2` for main sections (not `### H3`)
- The `# H1` title is hidden (shown in Hero component instead)
- Bold text starting a line `**Like This**` becomes a card title in pricing sections
- Bullet points with colons `:` become feature cards
- Regular bullet points remain as lists

## SVG Logo Rendering Fix

### The Problem
- SVG text elements with multiple `<tspan>` tags and letter-spacing render incorrectly on mobile
- Safari/WebKit has known bugs with SVG text letter-spacing
- Text appears with gaps or broken spacing

### The Solution (Implemented)
The logo.svg file has been fixed by:
1. Removing all `<tspan>` elements 
2. Removing letter-spacing CSS classes
3. Converting text to a single continuous element

The logo is displayed using:
```html
<img 
  src="/images/logo.svg" 
  alt="Beach Bird Studios" 
  class="h-10 sm:h-12 w-auto"
  style="max-width: 240px;"
/>
```

## Legal Pages

### Required Legal Pages (Now Implemented)
- **Privacy Policy** (`/privacy`) - Comprehensive privacy policy
- **Terms of Service** (`/terms`) - Complete terms and conditions
- **FAQ** (`/faq`) - Frequently asked questions with 6 categories

These pages are linked in the footer for easy access and legal compliance.

## Content Management System

### Location-Based Pages
Location pages are stored in `/src/content/locations/` and automatically generate pages at `/locations/[slug]`

### Service Pages
Service pages are stored in `/src/content/services/` and include:
- Main service pages (custom-website-design, ai-website-development, seo-services)
- Supporting service pages (various specific services)
- Industry-specific pages in `/src/content/industry/`

### Dynamic Page Generation
The `[slug].astro` files in `/src/pages/services/` and `/src/pages/locations/` automatically:
1. Read markdown content from content collections
2. Transform markdown into visual components based on patterns
3. Apply consistent styling and layout
4. Generate SEO-optimized pages

## Contact Information
- **Phone**: 910-512-6990 (consistent throughout site)
- **Email**: eric@beachbirdstudios.com
- **Location**: Wilmington, NC (serving all of North Carolina)

## Build and Deploy
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

The site generates 79 static pages at build time, including all service, location, and industry pages.