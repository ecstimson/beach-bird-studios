# Beach Bird Studios Design Principles

## Design System Reference
**All brand tokens, colors, typography, and components are defined in `/DESIGN_SYSTEM.md`**

This file contains general design principles. For implementation details, see the master design system.

## Brand Overview
Beach Bird Studios is a premium web design and SEO agency based in Wilmington, NC, serving businesses throughout North Carolina. The brand combines coastal elegance with technical excellence.

## Core Brand Values
- **Premium Quality**: High-end web solutions
- **Local Expertise**: Deep understanding of North Carolina markets
- **Speed & Efficiency**: Fast delivery without compromising quality
- **Results-Driven**: Focus on converting visitors to customers

## Visual Identity

### Logo
- Primary: Beach bird icon with flowing design
- Color variations: Full color, white (for dark backgrounds)
- Clear space: Minimum 20px around logo


### Critical Text Color Rules
- **On gradient backgrounds**: H1, H2, H3 must use `!text-white` or `!text-beach-yellow`
- **White buttons on dark backgrounds**: Must have `!text-beach-dark !bg-white` for visibility
- **Hyperlinks**: Use `text-beach-blue hover:text-beach-dark` NOT default blue
- **Never use navy text on blue backgrounds** - ensure proper contrast

## Icon System

### Icon Library
- **Primary**: Lucide Icons (NOT emoji icons)
- **Size**: 20-24px for inline, 32-48px for feature icons
- **Color**: Inherit from parent or use brand colors

### Standard Icons
- `zap` - Speed/Performance
- `layers` - Flexibility/Options
- `trending-up` - Growth/Results
- `map` - Location/Local
- `palette` - Design/Creative
- `cpu` - Technology/AI
- `search` - SEO/Discovery
- `users` - Community/Customers
- `crown` - Premium/Leadership
- `shield-check` - Security/Trust
- `calendar` - Scheduling
- `arrow-right` - Navigation/Progress
- `play-circle` - Video/Demo
- `trophy` - Success/Achievement
- `map-pin` - Location marker
- `credit-card` - Payment

## Component Patterns

### Hero Sections
- Gradient background (`gradient-hero` class)
- White text on dark backgrounds
- Prominent CTA buttons
- Trust indicators below main content

### Service Cards
- Clean white backgrounds
- Subtle shadows on hover
- Icon + title + description pattern
- Featured cards with gradient backgrounds

### Section Flow
- Alternating background colors for visual rhythm
- Smooth transitions between sections
- Consistent padding and spacing

### Buttons
- **Primary**: Yellow gradient with dark text
- **Secondary**: White with border (dark text on light bg, white bg on dark)
- **Accent**: Solid yellow background
- Hover effects: Transform and shadow changes

### Footer
- Dark background (`bg-beach-dark`)
- White and light blue text
- Organized link structure
- Social media icons

## Animation Principles

### Entrance Animations
- `fadeInUp`: Main content entrance
- `fadeIn`: Secondary elements
- `slideInLeft`: Side elements
- Staggered delays for sequential reveals

### Interaction Animations
- Hover transforms (translateY)
- Shadow expansion on hover
- Smooth color transitions
- Button scale effects

### Performance
- CSS animations preferred over JavaScript
- Minimal animation on mobile
- Respect reduced motion preferences

## Layout Principles

### Container Width
- Max width: 1280px (7xl)
- Consistent padding: 16-32px
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Section Padding
- Mobile: 64px (py-16)
- Tablet: 80px (py-20)
- Desktop: 96px (py-24)

### Grid Systems
- Service cards: 1 col mobile, 3 cols desktop
- Feature grids: 1 col mobile, 2 cols tablet, 2-4 cols desktop
- Footer links: 1 col mobile, 5 cols desktop

## Content Guidelines

### Tone of Voice
- Professional yet approachable
- Clear and direct
- Benefits-focused
- Local and personal

### Headlines
- Action-oriented
- Clear value proposition
- Emotional connection
- Urgency without pressure

### Body Copy
- Short paragraphs (2-3 sentences)
- Bullet points for features
- Clear CTAs
- Social proof integration

## Accessibility Standards

### Color Contrast
- Minimum WCAG AA compliance
- White text on dark backgrounds
- Dark text on light backgrounds
- Never low-contrast combinations

### Interactive Elements
- Minimum 44x44px touch targets
- Clear focus states
- Keyboard navigation support
- Screen reader friendly

### Typography
- Minimum 16px base font size
- Line height 1.5-1.7 for body text
- Adequate spacing between elements
- Hierarchy through size and weight

## Dynamic Content Pages ([slug].astro)

### How Content Pages Work
All markdown content in `/src/content/services/` is rendered through `/src/pages/services/[slug].astro`. This file:

1. **Parses markdown into visual sections** - Each H2 header creates a new section
2. **Alternates backgrounds** - white → cream (#F5E6D3/30) → gray-50
3. **Transforms content types into components**:
   - Pricing sections → 3-column card layout with featured middle card
   - Feature lists (with colons) → FeatureGrid with colored icons
   - Industries → Grid of cards with icons
   - Process steps → Numbered circles with descriptions
   - Comparisons → Side-by-side cards

### Markdown Formatting for Visual Components

#### Pricing Cards (3-column layout)
```markdown
## Framer Website Packages

**Starter Site** - Perfect for small businesses
- 5-7 page custom website
- Mobile responsive design
- 3-week delivery

**Professional Site** - Ideal for growing companies
- 10-15 page website
- Advanced features
- 4-week delivery

**Enterprise Site** - For larger organizations
- 20+ pages
- Complex features
- 6-week delivery
```
The middle card will be automatically featured with blue gradient background.

#### Feature Grids (with colored icons)
```markdown
## Why Choose Our Service

- Lightning Fast: Delivery in weeks not months
- Local Expertise: Based in Wilmington NC
- SEO Optimized: Built for search engines
```
Bullet points with colons become feature cards with icons.

#### Industry Grids
```markdown
## Perfect For These Industries

### Professional Services
Law firms, accounting practices, and consulting companies benefit from our professional aesthetic.

### Creative Agencies
Design studios and marketing agencies love our animation capabilities.

### Local Businesses
Restaurants, retail stores, and service businesses use our local SEO expertise.
```

#### Process Steps (numbered circles)
```markdown
## Our Process

### 1. Discovery
Understanding your business and goals

### 2. Design
Creating custom designs for your brand

### 3. Development
Building your website with clean code

### 4. Launch
Deploying and training on your new site
```

### Section Detection Keywords
The [slug].astro file detects special sections by H2 keywords:
- **Pricing**: "package", "investment", "pricing"
- **Industries**: "perfect for", "industries"
- **Process**: "process"
- **Comparison**: "vs", "comparison"

## Implementation Notes

### File Structure
- Components in `/src/components/`
- Pages in `/src/pages/`
- Styles in `/src/styles/`
- Assets in `/public/`
- Content in `/src/content/` (for markdown files)

### Technology Stack
- Astro.js framework
- Tailwind CSS utilities
- Custom CSS for specific needs
- Lucide icons via CDN

### Performance Goals
- Lighthouse score > 90
- First contentful paint < 1.5s
- Time to interactive < 3.5s
- Cumulative layout shift < 0.1

### SEO Requirements
- Semantic HTML structure
- Meta descriptions on all pages
- Open Graph tags
- Schema markup for local business
- XML sitemap
- Robots.txt configuration