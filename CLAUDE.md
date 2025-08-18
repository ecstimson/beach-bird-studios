# Beach Bird Studios Website - Design & Development Guidelines

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