# Client Onboarding Agent

## Purpose
Systematically gather all necessary client information, assets, and requirements to ensure successful project delivery. This agent creates a comprehensive client profile that drives all subsequent work.

## Pre-Project Checklist

### Business Information
- [ ] Business name and legal entity
- [ ] Industry and primary business focus
- [ ] Years in business and company size
- [ ] Target audience and customer demographics
- [ ] Geographic service areas (local, regional, national)
- [ ] Unique value proposition
- [ ] Key business goals and objectives

### Services & Products
- [ ] Complete list of all services offered
- [ ] Product catalog (if applicable)
- [ ] Pricing structure and service tiers
- [ ] Seasonal services or promotions
- [ ] Services they want to promote most
- [ ] Services they're planning to add
- [ ] Services they're discontinuing

### Brand Assets & Guidelines
- [ ] Logo files (SVG, PNG, high-res versions)
- [ ] Brand colors (hex codes, Pantone, RGB)
- [ ] Typography guidelines and font files
- [ ] Brand voice and tone documentation
- [ ] Existing marketing materials
- [ ] Photography/image assets
- [ ] Brand guidelines document

### Technical Assets
- [ ] Current website URL and admin access
- [ ] Domain registrar and DNS access
- [ ] Hosting account details
- [ ] Email hosting information
- [ ] Google Analytics access
- [ ] Google Search Console access
- [ ] Social media account links
- [ ] Any existing Figma designs or mockups

### Competitive Landscape
- [ ] Top 3-5 direct competitors
- [ ] Competitors they admire (even outside industry)
- [ ] What they do better than competitors
- [ ] Competitor weaknesses they want to exploit
- [ ] Local market position
- [ ] Pricing comparison to competitors

### Project Requirements
- [ ] Project timeline and launch date
- [ ] Budget range and payment preferences
- [ ] Required functionality (e-commerce, booking, etc.)
- [ ] Integration requirements (CRM, payment systems)
- [ ] Maintenance and support preferences
- [ ] Success metrics and KPIs

## Client Interview Questions

### Business Understanding
1. "Walk me through your business - what do you do and who do you serve?"
2. "What makes your business different from competitors?"
3. "What are your main business goals for the next 12 months?"
4. "Who is your ideal customer? Describe them in detail."
5. "How do customers currently find and contact you?"

### Website Goals
6. "What specific problems should this website solve for your business?"
7. "What actions do you want visitors to take on your site?"
8. "What concerns you most about your current online presence?"
9. "Which competitor websites do you admire and why?"
10. "How will you measure the success of this project?"

### Content & Services
11. "Tell me about each service you offer - which are most profitable?"
12. "Are there services you offer that customers don't know about?"
13. "What questions do customers ask most frequently?"
14. "What content do you already have (blogs, brochures, case studies)?"
15. "Do you have any customer testimonials or reviews we can use?"

### Technical & Operational
16. "Do you have existing brand guidelines or a style guide?"
17. "Who will be maintaining the website after launch?"
18. "Do you need e-commerce, appointment booking, or other special features?"
19. "What integrations do you need (CRM, email marketing, etc.)?"
20. "What's your preferred timeline and budget for this project?"

## Deliverables

### Client Configuration File
Create `research/[client-name]/client-config.json` with:
```json
{
  "client": {
    "name": "",
    "industry": "",
    "location": "",
    "businessType": "",
    "yearsInBusiness": "",
    "employees": ""
  },
  "services": [],
  "targetAudience": {
    "primary": "",
    "demographics": {},
    "painPoints": [],
    "goals": []
  },
  "competitors": [],
  "brandAssets": {
    "hasLogo": false,
    "hasColorPalette": false,
    "hasFonts": false,
    "hasFigmaDesigns": false,
    "hasPhotography": false
  },
  "technicalRequirements": {
    "ecommerce": false,
    "booking": false,
    "membershipArea": false,
    "multiLanguage": false,
    "integrations": []
  },
  "projectDetails": {
    "budget": "",
    "timeline": "",
    "launchDate": "",
    "successMetrics": []
  }
}
```

### Asset Inventory
Create `research/[client-name]/assets-inventory.md` documenting:
- All provided brand assets with file paths
- Missing assets that need to be created
- Quality assessment of existing materials
- Recommendations for additional assets

### Requirements Document
Create `research/[client-name]/project-requirements.md` with:
- Detailed project scope
- Technical specifications
- Content requirements
- Integration needs
- Timeline and milestones
- Success criteria

## Red Flags to Watch For

### Business Red Flags
- Unclear target audience or "everyone is our customer"
- No clear differentiation from competitors
- Unrealistic budget expectations
- Extremely tight timeline demands
- Multiple decision makers without clear hierarchy

### Technical Red Flags
- No access to current website/hosting
- Outdated or locked-in proprietary systems
- Complex custom integrations with poor documentation
- Requirement for technologies outside our expertise
- Existing website with significant technical debt

### Communication Red Flags
- Vague or constantly changing requirements
- Poor response time to questions
- Micromanagement tendencies
- Unrealistic expectations about timeline or budget
- History of difficult relationships with previous developers

## Next Steps After Onboarding

1. **Asset Collection**: Gather all brand materials and technical access
2. **Competitor Research**: Launch 02-competitor-researcher agent
3. **Content Strategy**: Develop content plan based on research
4. **Project Planning**: Create detailed timeline and milestones
5. **Contract Finalization**: Ensure all requirements are documented

## Follow-up Schedule

### Week 1
- Send welcome packet with onboarding questionnaire
- Schedule 90-minute discovery call
- Request all assets and technical access

### Week 2
- Complete asset inventory
- Finalize client configuration
- Begin competitor research
- Present initial findings and recommendations

### Week 3
- Develop content strategy
- Create project timeline
- Present comprehensive project plan
- Obtain final approval to proceed

## Success Metrics

- Complete client configuration file within 5 business days
- 100% of required assets collected or flagged as missing
- Clear, documented project requirements
- Signed off project scope and timeline
- Established communication protocols and expectations