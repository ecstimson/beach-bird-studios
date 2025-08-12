import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

// Types
interface ClientInfo {
  name: string;
  businessName: string;
  industry: string;
  location: string;
  website?: string;
  email: string;
  phone: string;
  serviceAreas: string[];
}

interface Service {
  name: string;
  description: string;
  isOffered: boolean;
  experienceLevel: 'beginner' | 'intermediate' | 'expert';
  hasExamples: boolean;
  keywords: string[];
}

interface BrandAssets {
  hasLogo: boolean;
  hasColorPalette: boolean;
  hasFonts: boolean;
  hasFigmaDesigns: boolean;
  hasPhotography: boolean;
  logoPath?: string;
  colorPalette?: string[];
  fonts?: string[];
  figmaFiles?: string[];
}

interface Competitor {
  name: string;
  website: string;
  strengths: string[];
  weaknesses: string[];
  services: string[];
  ranking: number;
}

interface ContentPlan {
  homepage: ContentItem;
  services: ContentItem[];
  locations: ContentItem[];
  blog: ContentItem[];
}

interface ContentItem {
  title: string;
  type: 'homepage' | 'service' | 'location' | 'blog';
  priority: 'high' | 'medium' | 'low';
  keywords: string[];
  status: 'planned' | 'in-progress' | 'draft' | 'review' | 'approved';
  estimatedHours: number;
}

interface WorkflowStatus {
  currentStep: number;
  completedSteps: string[];
  nextActions: string[];
  blockers: string[];
  estimatedCompletion: string;
}

export class ClientOnboardingWorkflow {
  private clientName: string;
  private clientPath: string;
  private workflowStatus: WorkflowStatus;

  constructor(clientName: string) {
    this.clientName = clientName.toLowerCase().replace(/\s+/g, '-');
    this.clientPath = path.join(process.cwd(), 'research', this.clientName);
    this.workflowStatus = {
      currentStep: 1,
      completedSteps: [],
      nextActions: [],
      blockers: [],
      estimatedCompletion: ''
    };
  }

  // Main workflow orchestrator
  async runWorkflow(): Promise<WorkflowStatus> {
    console.log(`🚀 Starting workflow for client: ${this.clientName}`);
    
    try {
      // Step 1: Gather Requirements
      await this.gatherRequirements();
      
      // Step 2: Check Assets
      await this.checkAssets();
      
      // Step 3: Research Competitors
      await this.researchCompetitors();
      
      // Step 4: Confirm Services
      await this.confirmServices();
      
      // Step 5: Generate Content Plan
      await this.generateContentPlan();
      
      // Step 6: Produce Content (after approval)
      await this.prepareContentProduction();

      return this.workflowStatus;
    } catch (error) {
      console.error('Workflow error:', error);
      this.workflowStatus.blockers.push(`Error: ${error.message}`);
      return this.workflowStatus;
    }
  }

  // Step 1: Gather all requirements upfront
  async gatherRequirements(): Promise<ClientInfo> {
    console.log('📋 Step 1: Gathering client requirements...');
    
    // Create client directory structure
    await this.createClientDirectories();
    
    // Generate client intake form
    const intakeForm = await this.generateIntakeForm();
    await writeFile(
      path.join(this.clientPath, 'client-intake-form.md'),
      intakeForm
    );

    // Create placeholder client config
    const clientConfig = this.createInitialClientConfig();
    await writeFile(
      path.join(this.clientPath, 'client-config.json'),
      JSON.stringify(clientConfig, null, 2)
    );

    this.workflowStatus.completedSteps.push('requirements-gathering');
    this.workflowStatus.nextActions.push('Client needs to complete intake form');
    this.workflowStatus.nextActions.push('Schedule 90-minute discovery call');
    
    console.log('✅ Requirements gathering setup complete');
    return clientConfig.client;
  }

  // Step 2: Verify all assets upfront
  async checkAssets(): Promise<BrandAssets> {
    console.log('🎨 Step 2: Checking client assets...');

    const assetChecklist = await this.generateAssetChecklist();
    await writeFile(
      path.join(this.clientPath, 'asset-checklist.md'),
      assetChecklist
    );

    // Create assets directory
    const assetsPath = path.join(this.clientPath, 'assets');
    await mkdir(assetsPath, { recursive: true });

    const brandAssets: BrandAssets = {
      hasLogo: false,
      hasColorPalette: false,
      hasFonts: false,
      hasFigmaDesigns: false,
      hasPhotography: false
    };

    this.workflowStatus.completedSteps.push('asset-verification');
    this.workflowStatus.nextActions.push('Client needs to provide brand assets');
    this.workflowStatus.nextActions.push('Verify Figma design access');

    console.log('✅ Asset verification setup complete');
    return brandAssets;
  }

  // Step 3: Research competitors and show results for approval
  async researchCompetitors(): Promise<Competitor[]> {
    console.log('🔍 Step 3: Researching competitors...');

    const researchPlan = await this.generateCompetitorResearchPlan();
    await writeFile(
      path.join(this.clientPath, 'competitor-research-plan.md'),
      researchPlan
    );

    // Create research template
    const competitorTemplate = await this.generateCompetitorAnalysisTemplate();
    await writeFile(
      path.join(this.clientPath, 'competitor-analysis-template.md'),
      competitorTemplate
    );

    this.workflowStatus.completedSteps.push('competitor-research-setup');
    this.workflowStatus.nextActions.push('Execute competitor research using 02-competitor-researcher agent');
    this.workflowStatus.nextActions.push('Present findings to client for validation');

    console.log('✅ Competitor research setup complete');
    return [];
  }

  // Step 4: Client confirms what services they actually offer
  async confirmServices(): Promise<Service[]> {
    console.log('✅ Step 4: Service confirmation setup...');

    const serviceConfirmationForm = await this.generateServiceConfirmationForm();
    await writeFile(
      path.join(this.clientPath, 'service-confirmation-form.md'),
      serviceConfirmationForm
    );

    this.workflowStatus.completedSteps.push('service-confirmation-setup');
    this.workflowStatus.nextActions.push('Client needs to confirm all offered services');
    this.workflowStatus.nextActions.push('Validate service expertise levels');
    this.workflowStatus.nextActions.push('Collect service examples/case studies');

    console.log('✅ Service confirmation setup complete');
    return [];
  }

  // Step 5: Create comprehensive content strategy
  async generateContentPlan(): Promise<ContentPlan> {
    console.log('📝 Step 5: Content planning setup...');

    const contentStrategyTemplate = await this.generateContentStrategyTemplate();
    await writeFile(
      path.join(this.clientPath, 'content-strategy-template.md'),
      contentStrategyTemplate
    );

    // Create content planning directories
    const contentPath = path.join(process.cwd(), 'content-pipeline', this.clientName);
    await mkdir(path.join(contentPath, 'drafts'), { recursive: true });
    await mkdir(path.join(contentPath, 'review'), { recursive: true });
    await mkdir(path.join(contentPath, 'approved'), { recursive: true });
    await mkdir(path.join(contentPath, 'published'), { recursive: true });

    const contentPlan: ContentPlan = {
      homepage: {
        title: 'Homepage',
        type: 'homepage',
        priority: 'high',
        keywords: [],
        status: 'planned',
        estimatedHours: 4
      },
      services: [],
      locations: [],
      blog: []
    };

    this.workflowStatus.completedSteps.push('content-planning-setup');
    this.workflowStatus.nextActions.push('Use 03-content-strategist agent to develop strategy');
    this.workflowStatus.nextActions.push('Client approval required before content creation');

    console.log('✅ Content planning setup complete');
    return contentPlan;
  }

  // Step 6: Prepare for content production (only after approval)
  async prepareContentProduction(): Promise<void> {
    console.log('🏭 Step 6: Content production preparation...');

    const productionGuide = await this.generateContentProductionGuide();
    await writeFile(
      path.join(this.clientPath, 'content-production-guide.md'),
      productionGuide
    );

    this.workflowStatus.completedSteps.push('production-preparation');
    this.workflowStatus.nextActions.push('Await client approval of content strategy');
    this.workflowStatus.nextActions.push('Use 04-content-generator agent when approved');
    this.workflowStatus.nextActions.push('Use 05-figma-integration agent for design implementation');

    console.log('✅ Content production preparation complete');
  }

  // Helper methods
  private async createClientDirectories(): Promise<void> {
    const directories = [
      this.clientPath,
      path.join(this.clientPath, 'assets'),
      path.join(this.clientPath, 'research'),
      path.join(this.clientPath, 'content-strategy'),
      path.join(process.cwd(), 'content-pipeline', this.clientName, 'drafts'),
      path.join(process.cwd(), 'content-pipeline', this.clientName, 'review'),
      path.join(process.cwd(), 'content-pipeline', this.clientName, 'approved'),
      path.join(process.cwd(), 'content-pipeline', this.clientName, 'published')
    ];

    for (const dir of directories) {
      await mkdir(dir, { recursive: true });
    }
  }

  private createInitialClientConfig(): any {
    return {
      client: {
        name: '',
        businessName: '',
        industry: '',
        location: '',
        website: '',
        email: '',
        phone: '',
        serviceAreas: [],
        yearsInBusiness: '',
        employees: ''
      },
      services: [],
      targetAudience: {
        primary: '',
        demographics: {},
        painPoints: [],
        goals: []
      },
      competitors: [],
      brandAssets: {
        hasLogo: false,
        hasColorPalette: false,
        hasFonts: false,
        hasFigmaDesigns: false,
        hasPhotography: false
      },
      technicalRequirements: {
        ecommerce: false,
        booking: false,
        membershipArea: false,
        multiLanguage: false,
        integrations: []
      },
      projectDetails: {
        budget: '',
        timeline: '',
        launchDate: '',
        successMetrics: []
      },
      workflowStatus: this.workflowStatus
    };
  }

  private async generateIntakeForm(): Promise<string> {
    return `# Client Intake Form - ${this.clientName}

## Business Information
- [ ] Business name and legal entity
- [ ] Industry and primary focus
- [ ] Years in business
- [ ] Number of employees
- [ ] Geographic service areas
- [ ] Current website (if any)
- [ ] Primary business goals

## Contact Information
- [ ] Primary contact name and role
- [ ] Email address
- [ ] Phone number
- [ ] Preferred communication method
- [ ] Best times to reach you

## Services & Products
Please list ALL services you currently offer:
1. _______________
2. _______________
3. _______________
[Add more as needed]

## Target Audience
- [ ] Who is your ideal customer?
- [ ] What problems do you solve for them?
- [ ] How do customers currently find you?
- [ ] What's your average project/customer value?

## Competitors
Please list 3-5 direct competitors:
1. _______________
2. _______________
3. _______________

## Brand Assets Checklist
Do you have:
- [ ] Logo files (SVG, PNG preferred)
- [ ] Brand colors (hex codes)
- [ ] Typography/fonts
- [ ] Existing Figma designs
- [ ] Professional photography
- [ ] Marketing materials
- [ ] Brand guidelines document

## Project Requirements
- [ ] Desired launch timeline
- [ ] Budget range
- [ ] Special functionality needs
- [ ] Integration requirements
- [ ] Success metrics

## Next Steps
1. Complete this form
2. Gather all brand assets
3. Schedule discovery call
4. Provide competitor list
5. Grant access to current systems (if any)

**Please return completed form within 3 business days.**
`;
  }

  private async generateAssetChecklist(): Promise<string> {
    return `# Brand Assets Checklist - ${this.clientName}

## Required Assets

### Logo Files
- [ ] SVG format (preferred)
- [ ] PNG format (high resolution)
- [ ] Different variations (horizontal, vertical, icon only)
- [ ] Usage guidelines

### Brand Colors
- [ ] Primary brand colors (hex codes)
- [ ] Secondary/accent colors
- [ ] Color palette documentation
- [ ] Accessibility considerations

### Typography
- [ ] Primary font files
- [ ] Secondary font files
- [ ] Web font licenses
- [ ] Typography hierarchy guidelines

### Figma Designs
- [ ] Current Figma files (if any)
- [ ] Access permissions granted
- [ ] Design system documentation
- [ ] Component library

### Photography & Graphics
- [ ] Professional headshots
- [ ] Business/office photos
- [ ] Product/service images
- [ ] Stock photo preferences
- [ ] Image style guidelines

### Existing Marketing Materials
- [ ] Business cards
- [ ] Brochures
- [ ] Website (current)
- [ ] Social media profiles
- [ ] Advertising examples

## Asset Quality Assessment

### Logo Quality
- [ ] High resolution (minimum 1000px wide)
- [ ] Transparent background versions
- [ ] Works in black/white
- [ ] Scalable to small sizes

### Photography Quality
- [ ] Professional quality
- [ ] Consistent style
- [ ] High resolution
- [ ] Rights/licenses clear

## Missing Assets Action Plan

### If No Logo:
- Recommend professional logo design
- Provide design brief template
- Timeline: 2-3 weeks additional

### If No Figma Designs:
- Recommend design phase
- Provide wireframe/design proposal
- Timeline: 3-4 weeks additional

### If No Photography:
- Recommend professional photoshoot
- Provide shot list template
- Stock photo alternatives

## Asset Delivery Instructions

1. **Create shared folder** (Google Drive/Dropbox)
2. **Organize by category** (logos, fonts, images)
3. **Include file names** descriptively
4. **Provide access permissions** to our team
5. **Document any restrictions** or usage guidelines

**Asset deadline: [Date - typically 1 week after onboarding]**
`;
  }

  private async generateCompetitorResearchPlan(): Promise<string> {
    return `# Competitor Research Plan - ${this.clientName}

## Research Objectives
1. Identify top 10-15 competitors in client's market
2. Analyze competitor services and positioning
3. Identify content gaps and opportunities
4. Assess market positioning strategy
5. Recommend competitive advantages

## Competitor Categories

### Primary Competitors (Direct)
- Same services in same geographic area
- Similar target market
- Direct business competition

### Secondary Competitors (Indirect)
- Similar services, different area/market
- Different approach to same problems
- Adjacent industry competitors

### Aspirational Competitors (Industry Leaders)
- Market leaders client wants to emulate
- Best-in-class examples
- Innovation/trend leaders

## Research Methodology

### Website Analysis
- [ ] Homepage messaging and value prop
- [ ] Service/product offerings
- [ ] Pricing transparency
- [ ] About page and team
- [ ] Blog/content strategy
- [ ] Case studies/testimonials
- [ ] User experience quality

### SEO Analysis
- [ ] Target keywords
- [ ] Content volume/frequency
- [ ] Top-performing pages
- [ ] Local SEO presence
- [ ] Technical SEO quality

### Social Media Analysis
- [ ] Platform presence
- [ ] Follower engagement
- [ ] Content strategy
- [ ] Customer interactions

### Business Intelligence
- [ ] Years in business
- [ ] Team size
- [ ] Service areas
- [ ] Pricing models
- [ ] Unique selling props

## Deliverables

1. **Competitor Analysis Report**
   - Executive summary
   - Individual competitor profiles
   - Competitive landscape overview

2. **Service Comparison Matrix**
   - Services offered by each competitor
   - Gaps and opportunities
   - Market positioning map

3. **Content Opportunity Report**
   - High-priority topics
   - Keyword opportunities
   - Content format recommendations

4. **Strategic Recommendations**
   - Positioning strategy
   - Competitive advantages
   - Market entry points

## Timeline
- Week 1: Competitor identification and initial analysis
- Week 2: Deep dive research and data collection
- Week 3: Analysis synthesis and report creation
- Week 4: Client presentation and validation

## Success Metrics
- 10+ competitors analyzed comprehensively
- Clear market positioning identified
- Actionable opportunities documented
- Client-approved research findings
`;
  }

  private async generateServiceConfirmationForm(): Promise<string> {
    return `# Service Confirmation Form - ${this.clientName}

## Instructions
**CRITICAL**: We will ONLY create website content for services you actually offer and have experience with. Please be honest about your capabilities.

## Service Validation Process

For each service below, please indicate:
- ✅ **YES** - You currently offer this service
- ❌ **NO** - You don't offer this service
- 🔄 **PLANNING** - You plan to add this service soon

### Common Web Development Services

#### Web Development
- [ ] Custom website development
- [ ] E-commerce websites
- [ ] WordPress development
- [ ] React/Next.js development
- [ ] Landing page creation
- Experience Level: [ ] Beginner [ ] Intermediate [ ] Expert

#### Design Services
- [ ] Figma to code conversion
- [ ] UI/UX design
- [ ] Website redesigns
- [ ] Logo design
- [ ] Brand identity design
- Experience Level: [ ] Beginner [ ] Intermediate [ ] Expert

#### SEO Services
- [ ] Technical SEO
- [ ] Local SEO
- [ ] Content optimization
- [ ] Keyword research
- [ ] SEO audits
- Experience Level: [ ] Beginner [ ] Intermediate [ ] Expert

#### Maintenance Services
- [ ] Website maintenance
- [ ] Security updates
- [ ] Performance optimization
- [ ] Content updates
- [ ] Backup services
- Experience Level: [ ] Beginner [ ] Intermediate [ ] Expert

#### Additional Services
- [ ] Digital marketing
- [ ] Social media management
- [ ] PPC advertising
- [ ] Email marketing
- [ ] Analytics setup
- Experience Level: [ ] Beginner [ ] Intermediate [ ] Expert

## Service Deep Dive

### For Each "YES" Service, Please Provide:

1. **How long have you been offering this service?**
   - Less than 6 months
   - 6 months - 1 year
   - 1-3 years
   - 3+ years

2. **Do you have examples or case studies?**
   - Yes, multiple examples
   - Yes, 1-2 examples
   - In progress/confidential
   - No examples yet

3. **What results do you typically achieve?**
   - Specific metrics/outcomes
   - General improvements
   - Varies by client
   - Too early to measure

4. **What makes your approach different?**
   - Unique methodology
   - Special expertise
   - Technology/tools used
   - Not sure yet

5. **Any certifications or special training?**
   - Professional certifications
   - Formal training/education
   - Self-taught/experience
   - Still learning

## Pricing Structure

For each confirmed service, indicate pricing approach:
- [ ] Fixed packages/pricing
- [ ] Hourly rates
- [ ] Project-based pricing
- [ ] Retainer/monthly
- [ ] Still determining

## Service Priorities

Rank your top 5 services by:
1. **Profitability**: Which make you the most money?
2. **Expertise**: Which are you best at?
3. **Demand**: Which do customers ask for most?
4. **Growth**: Which do you want to grow most?

## Services You DON'T Offer

Please list services that competitors offer but you DON'T:
- _______________
- _______________
- _______________

**Reason for not offering:**
- [ ] Lack of expertise
- [ ] No demand in market
- [ ] Too competitive
- [ ] Not profitable
- [ ] Other: _______________

## Future Service Plans

Services you're considering adding in next 12 months:
1. _______________
2. _______________
3. _______________

**Timeline for adding**: _______________
**Additional training needed**: _______________

## Content Creation Rules

**WE WILL ONLY CREATE CONTENT FOR:**
- ✅ Services you currently offer
- ✅ Services you have experience with
- ✅ Services you can deliver quality results

**WE WILL NOT CREATE CONTENT FOR:**
- ❌ Services you don't actually offer
- ❌ Services you're just planning to offer
- ❌ Services you have no experience with

## Final Confirmation

By signing below, I confirm that:
- [ ] All "YES" services are ones I currently offer
- [ ] I have the expertise to deliver these services
- [ ] I can provide examples/references for these services
- [ ] I understand content will only be created for confirmed services

**Client Signature**: _______________
**Date**: _______________

**Return deadline: 5 business days after receiving this form**
`;
  }

  private async generateContentStrategyTemplate(): Promise<string> {
    return `# Content Strategy Template - ${this.clientName}

## Strategy Development Process

### Phase 1: Service-Content Alignment
**Based on Service Confirmation Form Results**

#### Confirmed Services Analysis
[To be completed after service confirmation]

### Phase 2: Competitive Content Analysis
**Based on Competitor Research Results**

#### Content Gap Opportunities
[To be completed after competitor research]

### Phase 3: Keyword Research & SEO Strategy

#### Target Keywords by Service
[To be researched and documented]

#### Local SEO Opportunities
[Geographic targeting strategy]

### Phase 4: Content Priority Matrix

#### Essential Pages (Priority 1)
- Homepage: Core messaging
- About: Trust and credibility
- Contact: Lead generation
- [Top Service]: Highest priority service

#### SEO Content (Priority 2)
- Secondary service pages
- Location-based pages
- Resource/guide pages
- FAQ sections

#### Supporting Content (Priority 3)
- Blog posts
- Case studies
- Testimonials
- Additional resources

### Phase 5: Content Calendar

#### 90-Day Content Plan
Week 1-2: Essential pages
Week 3-4: Priority service pages
Week 5-6: Location pages
Week 7-8: Supporting content
Week 9-10: Blog content
Week 11-12: Review and optimization

### Phase 6: Success Metrics

#### SEO Targets
- Target keywords for each page
- Expected ranking improvements
- Traffic growth projections

#### Business Goals
- Lead generation targets
- Conversion optimization
- Brand awareness metrics

## Content Requirements

### Brand Voice Guidelines
[To be defined based on client input]

### Content Standards
- Minimum word count by page type
- SEO optimization requirements
- Call-to-action strategies
- Image and media requirements

### Approval Process
1. Content strategy presentation
2. Client feedback and revisions
3. Final strategy approval
4. Content creation begins

## Next Steps

1. Complete service confirmation form
2. Finalize competitor research
3. Develop keyword strategy
4. Present strategy to client
5. Get approval before content creation

**Strategy presentation scheduled for**: [Date]
`;
  }

  private async generateContentProductionGuide(): Promise<string> {
    return `# Content Production Guide - ${this.clientName}

## Production Workflow

### Content Creation Process
1. **Strategy Approval**: Client approves content strategy
2. **Content Brief**: Detailed brief for each piece
3. **Content Creation**: Using approved strategy and brand voice
4. **Internal Review**: Quality assurance and SEO check
5. **Client Review**: Client feedback and revisions
6. **Final Approval**: Sign-off for publication

### Roles and Responsibilities

#### Client Responsibilities
- Provide accurate service information
- Review content within agreed timeframes
- Provide examples and case studies
- Approve final content before publication

#### Our Responsibilities
- Create high-quality, SEO-optimized content
- Maintain brand voice consistency
- Meet agreed deadlines
- Incorporate client feedback

### Content Standards

#### SEO Requirements
- Target keyword integration
- Meta descriptions under 160 characters
- Header structure (H1-H6)
- Internal linking strategy
- Image optimization

#### Quality Standards
- Grammatically correct and error-free
- Brand voice consistent
- Factually accurate
- Engaging and valuable to readers
- Clear calls-to-action

### Review Process

#### Client Review Guidelines
- Review timeframe: 3 business days
- Feedback format: Written comments/suggestions
- Approval required before moving to next phase
- Major changes may affect timeline

#### Revision Policy
- 2 rounds of revisions included
- Additional revisions may incur extra time
- Significant scope changes require approval

### Timeline Expectations

#### Typical Production Schedule
- Homepage: 2-3 business days
- Service page: 1-2 business days
- Location page: 1 business day
- Blog post: 1-2 business days

#### Client Response Times
- Content review: 3 business days
- Asset provision: 5 business days
- Final approvals: 2 business days

### Quality Assurance

#### Before Client Review
- [ ] Spelling and grammar check
- [ ] SEO optimization verification
- [ ] Brand voice consistency
- [ ] Factual accuracy confirmation
- [ ] CTA effectiveness review

#### Before Publication
- [ ] Client final approval
- [ ] Technical formatting check
- [ ] Link functionality test
- [ ] Mobile responsiveness
- [ ] Performance optimization

## Content Delivery

### File Organization
```
content-pipeline/[client-name]/
├── drafts/          # Initial content creation
├── review/          # Client review phase
├── approved/        # Final approved content
└── published/       # Live content archive
```

### Delivery Format
- Markdown files with frontmatter
- SEO metadata included
- Image specifications noted
- CTA instructions provided

## Success Metrics

### Content Quality
- Client approval rate on first submission
- Time to completion vs. estimates
- SEO optimization score
- Brand voice consistency rating

### Project Success
- On-time delivery percentage
- Client satisfaction scores
- Content performance metrics
- Lead generation improvements

## Communication Protocol

### Regular Updates
- Weekly progress reports
- Milestone completion notifications
- Issue/blocker communications
- Timeline adjustment discussions

### Client Communication
- Primary contact: [Client contact]
- Communication method: [Email/Slack/etc.]
- Response time expectation: 24-48 hours
- Escalation process: [Defined procedure]

## Next Steps After Strategy Approval

1. **Content Brief Creation**: Detailed briefs for each content piece
2. **Production Schedule**: Final timeline with milestones
3. **Asset Requests**: Any additional materials needed
4. **Kickoff Meeting**: Final alignment before production begins

**Production kickoff scheduled for**: [Date after strategy approval]
`;
  }

  // Status and reporting methods
  async getWorkflowStatus(): Promise<WorkflowStatus> {
    return this.workflowStatus;
  }

  async updateStatus(step: string, status: 'completed' | 'blocked', notes?: string): Promise<void> {
    if (status === 'completed') {
      if (!this.workflowStatus.completedSteps.includes(step)) {
        this.workflowStatus.completedSteps.push(step);
      }
    } else if (status === 'blocked' && notes) {
      this.workflowStatus.blockers.push(`${step}: ${notes}`);
    }

    // Save updated status to client config
    const configPath = path.join(this.clientPath, 'client-config.json');
    try {
      const config = JSON.parse(await readFile(configPath, 'utf8'));
      config.workflowStatus = this.workflowStatus;
      await writeFile(configPath, JSON.stringify(config, null, 2));
    } catch (error) {
      console.warn('Could not update workflow status in config file:', error.message);
    }
  }

  async generateProjectReport(): Promise<string> {
    const report = `# Project Report - ${this.clientName}

## Workflow Status
- **Current Step**: ${this.workflowStatus.currentStep}/6
- **Completed Steps**: ${this.workflowStatus.completedSteps.length}
- **Active Blockers**: ${this.workflowStatus.blockers.length}

## Completed Steps
${this.workflowStatus.completedSteps.map(step => `- ✅ ${step}`).join('\n')}

## Next Actions Required
${this.workflowStatus.nextActions.map(action => `- [ ] ${action}`).join('\n')}

## Current Blockers
${this.workflowStatus.blockers.map(blocker => `- ⚠️ ${blocker}`).join('\n')}

## Estimated Completion
${this.workflowStatus.estimatedCompletion}

## Project Files Created
- Client intake form
- Asset checklist  
- Competitor research plan
- Service confirmation form
- Content strategy template
- Content production guide

## Next Steps
1. ${this.workflowStatus.nextActions[0] || 'Awaiting client input'}
2. ${this.workflowStatus.nextActions[1] || 'Continue workflow'}

---
*Report generated: ${new Date().toISOString()}*
`;

    await writeFile(
      path.join(this.clientPath, 'project-report.md'),
      report
    );

    return report;
  }
}

// Utility functions for workflow management
export async function startNewClientWorkflow(clientName: string): Promise<ClientOnboardingWorkflow> {
  const workflow = new ClientOnboardingWorkflow(clientName);
  await workflow.runWorkflow();
  return workflow;
}

export async function getClientWorkflow(clientName: string): Promise<ClientOnboardingWorkflow> {
  return new ClientOnboardingWorkflow(clientName);
}

export async function listActiveWorkflows(): Promise<string[]> {
  const researchPath = path.join(process.cwd(), 'research');
  try {
    const items = await fs.promises.readdir(researchPath);
    return items.filter(item => {
      const itemPath = path.join(researchPath, item);
      return fs.statSync(itemPath).isDirectory();
    });
  } catch (error) {
    return [];
  }
}