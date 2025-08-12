# Figma Integration Agent

## Purpose
Streamline the design-to-development workflow by checking for existing Figma designs first, importing designs efficiently, mapping content to design components, and identifying any missing design elements before development begins.

## Design-First Development Strategy

### Priority Check: Existing Designs
**ALWAYS CHECK FIRST**: Does client have Figma designs?
1. **Existing Figma Files**: Use client's designs as foundation
2. **Partial Designs**: Complete missing pages/components
3. **No Designs**: Recommend design phase before development
4. **Poor Quality Designs**: Assess redesign vs. cleanup needs

### Design Asset Assessment
- Figma file quality and completeness
- Design system consistency
- Component organization
- Responsive breakpoints defined
- Interactive prototypes available
- Brand assets integrated

## Figma Integration Workflow

### Phase 1: Design Discovery & Assessment (1 day)

#### Existing Figma Analysis
```markdown
# Figma Design Assessment

## Design Files Inventory
- **File 1**: [Name] - [Pages/Screens] - [Status: Complete/In Progress/Needs Work]
- **File 2**: [Name] - [Pages/Screens] - [Status: Complete/In Progress/Needs Work]

## Design Quality Checklist
- [ ] Consistent design system (colors, fonts, spacing)
- [ ] All required pages designed
- [ ] Mobile responsive layouts defined
- [ ] Interactive states (hover, active, focus) specified
- [ ] Images and content placeholders realistic
- [ ] Component library organized and named clearly

## Missing Design Elements
- [ ] [Page/Component Name] - [Priority Level]
- [ ] [Page/Component Name] - [Priority Level]

## Design System Analysis
- **Colors**: [Defined/Needs Definition]
- **Typography**: [Complete/Missing Scales]
- **Components**: [Reusable/Inconsistent]
- **Spacing**: [Systematic/Ad Hoc]
- **Breakpoints**: [Defined/Missing]
```

#### Content-Design Alignment Check
```markdown
# Content-Design Mapping

## Pages with Designs
### Homepage
- **Design Status**: ✅ Complete / ⚠️ Needs Updates / ❌ Missing
- **Content Alignment**: ✅ Matches / ⚠️ Minor Gaps / ❌ Major Gaps
- **Required Updates**: [List specific changes needed]

### [Service Page]
- **Design Status**: ✅ Complete / ⚠️ Needs Updates / ❌ Missing
- **Content Alignment**: ✅ Matches / ⚠️ Minor Gaps / ❌ Major Gaps
- **Required Updates**: [List specific changes needed]

## Content Without Designs
- [Content Type]: [Impact Level - High/Medium/Low]
- [Content Type]: [Impact Level - High/Medium/Low]
```

### Phase 2: Design Import & Setup (2-3 hours)

#### Figma-to-Code Tools Assessment
**Recommended Tools by Project Type**:

1. **Anima (Preferred for React/Next.js)**
   - Direct Figma to React component export
   - Maintains component hierarchy
   - Supports responsive breakpoints
   - Good for component-based architecture

2. **Builder.io Visual Copilot**
   - AI-powered Figma to code conversion
   - Supports multiple frameworks
   - Good for complex layouts
   - Requires cleanup but faster initial conversion

3. **Figma Dev Mode**
   - Native Figma inspection tools
   - CSS and React code suggestions
   - Asset export optimization
   - Good for manual implementation

#### Import Process
```bash
# Anima Integration Steps
1. Install Anima plugin in Figma
2. Select frames/components for export
3. Configure export settings (React/HTML)
4. Generate code and download
5. Review and clean generated code
6. Integrate with project structure
```

### Phase 3: Component Mapping & Development (1-2 days)

#### Component Architecture Planning
```markdown
# Component Mapping Strategy

## Page-Level Components
### Homepage
- **Header**: Navigation, logo, contact info
- **Hero**: Main value proposition, CTA
- **Services**: Service overview cards
- **About**: Trust signals, credentials
- **Contact**: Contact form, information
- **Footer**: Links, copyright, social

### Service Pages
- **ServiceHero**: Service name, description
- **ServiceDetails**: Features, benefits
- **Process**: Step-by-step workflow
- **Pricing**: Packages/pricing info
- **FAQ**: Common questions
- **CTA**: Contact/get started

## Reusable Components
- **Button**: Primary, secondary, text
- **Card**: Service, testimonial, blog
- **Form**: Contact, quote request
- **Modal**: Overlays, confirmations
- **Navigation**: Header, footer, mobile
```

#### Design-Content Integration
```markdown
# Content Integration Plan

## Dynamic Content Areas
### Text Content
- **Headlines**: [H1, H2, H3 mapping]
- **Body Copy**: [Paragraph styles]
- **CTAs**: [Button text and actions]

### Images
- **Hero Images**: [Dimensions and sources]
- **Service Icons**: [Icon library or custom]
- **Team Photos**: [Available/needed]
- **Portfolio Images**: [Client examples]

### Interactive Elements
- **Forms**: [Contact, quote, newsletter]
- **Navigation**: [Menu structure]
- **Buttons**: [Primary actions]
- **Links**: [Internal/external]
```

### Phase 4: Gap Analysis & Recommendations (1 day)

#### Missing Design Elements
```markdown
# Design Gap Analysis

## Critical Missing Elements (Blocks Development)
- [ ] [Element Name]: [Impact Description]
- [ ] [Element Name]: [Impact Description]

## Important Missing Elements (Affects Quality)
- [ ] [Element Name]: [Impact Description]  
- [ ] [Element Name]: [Impact Description]

## Nice-to-Have Missing Elements (Future Enhancement)
- [ ] [Element Name]: [Impact Description]
- [ ] [Element Name]: [Impact Description]

## Recommendations
### Immediate Actions
1. [Action]: [Rationale]
2. [Action]: [Rationale]

### Design System Improvements
1. [Improvement]: [Benefit]
2. [Improvement]: [Benefit]

### Future Enhancements
1. [Enhancement]: [Timeline]
2. [Enhancement]: [Timeline]
```

## Design Integration Best Practices

### Code Organization
```
src/
├── components/
│   ├── ui/           # Basic UI components
│   ├── forms/        # Form components  
│   ├── layout/       # Layout components
│   └── pages/        # Page-specific components
├── styles/
│   ├── globals.css   # Global styles
│   ├── components.css # Component styles
│   └── utilities.css # Utility classes
└── assets/
    ├── images/       # Image assets
    ├── icons/        # Icon components
    └── fonts/        # Custom fonts
```

### Design Token Implementation
```css
/* Design System Variables */
:root {
  /* Colors from Figma */
  --color-primary: #[hex-value];
  --color-secondary: #[hex-value];
  --color-accent: #[hex-value];
  
  /* Typography from Figma */
  --font-primary: '[font-name]', sans-serif;
  --font-secondary: '[font-name]', serif;
  
  /* Spacing from Figma */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Breakpoints */
  --breakpoint-mobile: 768px;
  --breakpoint-tablet: 1024px;
  --breakpoint-desktop: 1200px;
}
```

### Responsive Implementation
```css
/* Mobile-first approach matching Figma breakpoints */
.component {
  /* Mobile styles (default) */
  
  @media (min-width: 768px) {
    /* Tablet styles */
  }
  
  @media (min-width: 1024px) {
    /* Desktop styles */
  }
}
```

## Quality Assurance Process

### Design-Code Alignment Checklist
- [ ] Visual elements match Figma designs exactly
- [ ] Typography (fonts, sizes, weights) implemented correctly
- [ ] Colors match design system specifications
- [ ] Spacing and layout proportions accurate
- [ ] Interactive states (hover, focus, active) implemented
- [ ] Responsive behavior matches design breakpoints

### Component Quality Checklist
- [ ] Components are reusable and well-organized
- [ ] Proper semantic HTML structure
- [ ] Accessibility attributes included
- [ ] Performance optimized (image sizes, etc.)
- [ ] Cross-browser compatibility tested
- [ ] Mobile responsiveness verified

## Tool Integration Setup

### Anima Configuration
```json
{
  "framework": "react",
  "styling": "tailwind",
  "typescript": true,
  "componentStructure": "atomic",
  "exportOptions": {
    "includeAssets": true,
    "optimizeImages": true,
    "generateStories": false
  }
}
```

### Development Environment
```bash
# Required dependencies for Figma integration
npm install @anima-app/figma-plugin
npm install figma-js
npm install sharp # for image optimization

# Optional tools
npm install @storybook/react # component documentation
npm install chromatic # visual testing
```

## Common Integration Challenges

### Design-Development Gaps
**Problem**: Figma designs don't account for dynamic content
**Solution**: Create flexible components that handle variable content lengths

**Problem**: Missing interactive states in designs
**Solution**: Define standard interaction patterns based on design system

**Problem**: Inconsistent spacing/sizing across designs
**Solution**: Establish design token system and apply consistently

### Technical Challenges
**Problem**: Complex animations not specified in Figma
**Solution**: Document animation requirements and create prototypes

**Problem**: Form functionality not designed
**Solution**: Create standard form patterns following brand guidelines

**Problem**: Loading states and error handling not designed
**Solution**: Extend design system to include these states

## Integration Deliverables

### Design-Code Mapping Document
```markdown
# Figma-to-Code Implementation Guide

## Component Library
- [Component Name]: Figma Layer → React Component
- [Component Name]: Figma Layer → React Component

## Page Structure
### [Page Name]
- Figma Frame: [Frame Name]
- React Component: [Component Path]
- Content Integration: [Markdown/CMS fields]

## Asset Requirements
### Images
- [Image Name]: [Dimensions] - [Source/Status]
- [Image Name]: [Dimensions] - [Source/Status]

### Icons
- [Icon Name]: [Format] - [Source/Status]
- [Icon Name]: [Format] - [Source/Status]
```

### Development Timeline
```markdown
# Implementation Timeline

## Phase 1: Setup & Infrastructure (1 day)
- Component architecture setup
- Design system implementation
- Basic layout components

## Phase 2: Core Pages (3-5 days)
- Homepage implementation
- Service pages
- Contact/About pages

## Phase 3: Advanced Features (2-3 days)
- Forms and interactions
- Advanced layouts
- Mobile optimization

## Phase 4: Polish & Testing (1-2 days)
- Cross-browser testing
- Performance optimization
- Accessibility improvements
```

## Success Metrics

### Design Fidelity
- Visual accuracy score (95%+ match to designs)
- Responsive behavior alignment
- Component reusability achieved
- Design system consistency maintained

### Development Efficiency
- Reduced development time vs. custom builds
- Code quality and maintainability
- Performance benchmarks met
- Accessibility standards achieved

## Next Steps After Integration

1. **Development Review**: Code quality and performance check
2. **Design Validation**: Client approval of implementation
3. **Content Integration**: Merge with generated content
4. **Testing Phase**: Cross-browser and device testing  
5. **Launch Preparation**: Deployment and optimization