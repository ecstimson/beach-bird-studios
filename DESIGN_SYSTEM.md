# Beach Bird Studios Design System - SINGLE SOURCE OF TRUTH

## Brand Identity

### Brand Tokens (CSS Variables)
```css
:root {
  --primary: #47A7EB;        /* Beach Blue - Primary brand color */
  --primary-dark: #0C3745;   /* Beach Dark - Text and high contrast */
  --primary-light: #79C3F0;  /* Beach Light - Subtle accents */
  --accent: #FFC107;         /* Beach Yellow - CTAs and highlights */
  --sand: #F5E6D3;           /* Beach Cream - Background accent */
  --sand-light: #FAF4EC;     /* Beach Sand - Light backgrounds */
}
```

### Tailwind Class Mapping
Use these standardized classes throughout the codebase:

#### Background Colors
- `.bg-beach-blue` (--primary)
- `.bg-beach-dark` (--primary-dark)
- `.bg-beach-yellow` (--accent)
- `.bg-beach-cream` (--sand)
- `.bg-beach-sand` (--sand-light)

#### Text Colors
- `.text-beach-blue` (--primary)
- `.text-beach-dark` (--primary-dark)
- `.text-beach-yellow` (--accent)
- `.text-beach-cream` (--sand)

#### Opacity Variants
- `.text-beach-dark/70` `.text-beach-dark/80` for body text
- `.bg-beach-blue/10` `.bg-beach-blue/20` for subtle backgrounds

### Typography System

#### Font Families
- **Headings**: Chillax (use `font-heading` class)
- **Body Text**: Synonym (use `font-sans` class)
- **CSS Variables**: `var(--font-heading)` `var(--font-body)`

#### Font Weight & Usage
- **Headlines**: Semibold weight, tight letter-spacing
- **Body Text**: Regular weight, comfortable line-height (1.6-1.7)
- **CTAs**: Medium to semibold weight

## Universal Components

### ServiceCards Component
**Purpose**: The ONLY allowed component for displaying Beach Bird Studios' 3 services.

**Usage**: 
```astro
<ServiceCards services={[
  {
    title: 'Custom Web Design',
    headline: 'Beautiful & Fast',
    description: 'Perfect for businesses wanting a stunning, manageable website without the complexity',
    bullets: ['Timeline: Weeks, not months', 'Mobile-responsive design', 'Custom Quote'],
    href: '/custom-website-design'
  },
  {
    title: 'AI Development', 
    headline: '100+ Pages That Dominate',
    description: 'Comprehensive websites with a page for every service and location — built faster than you thought possible',
    bullets: ['Strategic Coverage', 'SEO-optimized content', 'Custom Quote'],
    href: '/ai-website-development',
    featured: true
  },
  {
    title: 'SEO Services',
    headline: 'Keep Your Website, Add Power', 
    description: 'We'll optimize your existing site on any platform — WordPress, Wix, Squarespace, or custom',
    bullets: ['Monthly Service', 'No rebuild required', 'Works with any platform'],
    href: '/seo-services'
  }
]} />
```

**Auto-Injection**: Layout automatically shows ServiceCards on marketing pages unless `hideServiceCards: true` in frontmatter.

### ProcessTimeline Component
**Purpose**: The ONLY allowed component for displaying process explanations.

**Usage**: 
```astro
<ProcessTimeline />
```

**Auto-Injection**: Service pages automatically include ProcessTimeline unless `hideProcessTimeline: true` in frontmatter.

## Business Model Rules

### Pricing Philosophy
- **Custom quotes ONLY** - No fictional packages ever
- **No pricing tables** - Direct all pricing questions to consultation
- **No "Starter/Professional/Enterprise"** packages
- **No "Investment Packages"** sections

### Content Integrity
- **NEVER** create fictional testimonials or client quotes
- **NEVER** invent metrics like "300% increase" 
- **ONLY** use verified data from actual projects
- **Use general benefit statements** instead of fake specifics

### Service Structure (Fixed)
1. **Custom Web Design** - Beautiful & Fast, weeks not months, custom quotes
2. **AI Website Development** - 100+ pages that dominate, built faster than expected
3. **SEO Services** - Keep your website, add power, works with any platform, monthly service

## Implementation Rules

### Component Usage
- **ServiceCards**: Auto-injected by layout on marketing routes
- **ProcessTimeline**: Auto-injected on service pages
- **Manual Override**: Use `hideServiceCards: true` or `hideProcessTimeline: true` in frontmatter to opt out

### Marketing Routes (Auto-ServiceCards)
- `/` (homepage)
- `/services/*` (all service pages)
- `/industry/*` (industry pages)  
- `/locations/*` (location pages)
- `/about` (about page)

### Non-Marketing Routes (No Auto-ServiceCards)
- `/blog/*` (blog posts)
- `/privacy` `/terms` (legal pages)
- `/contact` (contact page)

### Class Standardization
**Use Beach Bird classes instead of raw Tailwind:**
- ❌ `text-gray-900` → ✅ `text-beach-dark`
- ❌ `text-gray-600` → ✅ `text-beach-dark/70`
- ❌ `text-blue-600` → ✅ `text-beach-blue`
- ❌ `bg-yellow-400` → ✅ `bg-beach-yellow`

## Development Workflow

### For New Pages
1. Reference this DESIGN_SYSTEM.md file
2. Use layout auto-injection (don't manually add ServiceCards)
3. Focus content on education and value
4. Use custom quote CTAs only
5. Never create pricing packages

### For Component Updates
1. Use brand classes defined in this system
2. Maintain Beach Bird color palette
3. Follow typography hierarchy
4. Ensure mobile-responsive design

---

**This design system is the authoritative source for all Beach Bird Studios brand implementation. All other files reference this system.**