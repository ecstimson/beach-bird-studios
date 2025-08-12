#!/usr/bin/env python3

import os

services = [
    {
        "name": "electrical",
        "title": "Electrical Contractor",
        "description": "electrical contractors",
        "emoji": "⚡",
        "services": [
            "Electrical Repair & Installation",
            "Panel Upgrades & Service",
            "Outlet & Switch Installation",
            "Lighting Installation",
            "Generator Installation",
            "Commercial Electrical",
            "Emergency Electrical Service",
            "Electrical Inspections"
        ],
        "problems": [
            "Power Outages",
            "Electrical Fires",
            "Circuit Breaker Issues",
            "Flickering Lights",
            "Electrical Code Violations"
        ]
    },
    {
        "name": "roofing",
        "title": "Roofing Company",
        "description": "roofing companies",
        "emoji": "🏠",
        "services": [
            "Roof Repair & Replacement",
            "Gutter Installation & Repair",
            "Siding Installation",
            "Storm Damage Repair",
            "Commercial Roofing",
            "Roof Inspections",
            "Emergency Roof Service",
            "Roof Maintenance"
        ],
        "problems": [
            "Roof Leaks",
            "Storm Damage",
            "Missing Shingles",
            "Gutter Problems",
            "Old Roof Replacement"
        ]
    },
    {
        "name": "landscaping",
        "title": "Landscaping Service",
        "description": "landscaping companies",
        "emoji": "🌳",
        "services": [
            "Landscape Design & Installation",
            "Lawn Care & Maintenance",
            "Tree & Shrub Service",
            "Irrigation Systems",
            "Hardscape Installation",
            "Seasonal Cleanup",
            "Commercial Landscaping",
            "Garden Maintenance"
        ],
        "problems": [
            "Brown Lawn Issues",
            "Overgrown Landscapes",
            "Irrigation Problems",
            "Seasonal Maintenance",
            "Landscape Design Needs"
        ]
    },
    {
        "name": "pest-control",
        "title": "Pest Control Service",
        "description": "pest control companies",
        "emoji": "🐜",
        "services": [
            "General Pest Control",
            "Termite Treatment",
            "Rodent Control",
            "Ant & Roach Treatment",
            "Bee & Wasp Removal",
            "Mosquito Control",
            "Commercial Pest Control",
            "Wildlife Removal"
        ],
        "problems": [
            "Ant Infestations",
            "Termite Damage",
            "Rodent Problems",
            "Roach Issues",
            "Seasonal Pests"
        ]
    },
    {
        "name": "garage-door",
        "title": "Garage Door Service",
        "description": "garage door companies",
        "emoji": "🚪",
        "services": [
            "Garage Door Repair",
            "Garage Door Installation",
            "Garage Door Opener Repair",
            "Spring Replacement",
            "Cable & Track Repair",
            "Garage Door Maintenance",
            "Emergency Service",
            "Commercial Garage Doors"
        ],
        "problems": [
            "Garage Door Won't Open",
            "Broken Springs",
            "Noisy Garage Door",
            "Remote Control Issues",
            "Off-Track Doors"
        ]
    },
    {
        "name": "dental-practices",
        "title": "Dental Practice",
        "description": "dental practices",
        "emoji": "🦷",
        "services": [
            "General Dentistry",
            "Cosmetic Dentistry",
            "Teeth Whitening",
            "Dental Implants",
            "Root Canal Treatment",
            "Orthodontics",
            "Pediatric Dentistry",
            "Emergency Dental Care"
        ],
        "problems": [
            "Tooth Pain",
            "Missing Teeth",
            "Crooked Teeth",
            "Gum Disease",
            "Dental Emergencies"
        ]
    },
    {
        "name": "law-firms",
        "title": "Law Firm",
        "description": "law firms",
        "emoji": "⚖️",
        "services": [
            "Personal Injury Law",
            "Family Law",
            "Criminal Defense",
            "Business Law",
            "Real Estate Law",
            "Estate Planning",
            "Divorce Law",
            "Traffic Violations"
        ],
        "problems": [
            "Personal Injury Claims",
            "Divorce Proceedings",
            "Criminal Charges",
            "Business Disputes",
            "Real Estate Issues"
        ]
    },
    {
        "name": "real-estate",
        "title": "Real Estate Agency",
        "description": "real estate agencies",
        "emoji": "🏘️",
        "services": [
            "Home Buying Services",
            "Home Selling Services",
            "Property Valuation",
            "Investment Properties",
            "First-Time Buyer Help",
            "Luxury Home Sales",
            "Commercial Real Estate",
            "Property Management"
        ],
        "problems": [
            "Home Selling Challenges",
            "Finding the Right Home",
            "Market Pricing Questions",
            "Investment Decisions",
            "Property Management Needs"
        ]
    }
]

def create_service_page(service):
    content = f"""# {service['title']} Web Design - 100+ Pages Built Fast

**URL:** /services/{service['name']}  
**H1:** {service['title']} Web Design - 100+ Pages Built Fast  
**Meta Title:** {service['title']} Web Design | Beach Bird Studios  
**Meta Description:** Comprehensive {service['description']} websites with 100+ pages built in weeks, not months. Custom solutions from $15K. Serving North Carolina {service['description']}.  

## The Problem With Most Web Agencies

Most agencies build 10-20 page websites that barely scratch the surface of what your {service['title'].lower()} offers. Your competitors with 100+ pages are dominating search results while your small site gets lost.

TheeDigital takes 6-8 months to build comprehensive sites. Other agencies simply don't have the capability to create content at scale.

## The Beach Bird Solution

We build 100+ page {service['title'].lower()} websites in 3-4 weeks using AI-powered content generation with human oversight. Every service you offer, every location you serve, every question your customers ask - all covered comprehensively.

## What We Build for {service['title']}s

### Core Website Structure
- Homepage showcasing your expertise
- Individual service pages for each offering
- Location pages for every area you serve
- About, team, and contact sections
- Resource library and guides

### Comprehensive Service Coverage
{chr(10).join([f'- **{s}**' for s in service['services']])}

## Our {service['title']} Website Approach

### Week 1: Discovery & Strategy
- Analyze your competition
- Map out your services and specialties
- Plan your custom site architecture
- Research local search trends

### Week 2-3: Content Creation
- Generate 100+ industry-focused pages
- Create service area coverage
- Optimize for local searches
- Ensure brand consistency

### Week 3-4: Design & Development
- Apply professional design
- Build on modern platform
- Add booking and contact systems
- Test and optimize

### Week 4: Launch
- Deploy your comprehensive site
- Submit to search engines
- Set up tracking and analytics
- Training on updates

## Investment for {service['title']}s

Every website is different. Your investment depends on:
- Number of services offered
- Geographic coverage needed
- Industry complexity
- Competitive landscape

**Typical investments range from $18,000 to $45,000**

Payment options:
- Monthly payments: $2,000-$4,000
- Terms: 8-18 months
- Maintenance: $600-$1,200/month after launch

## Why Beach Bird Studios

Based in Wilmington, we serve {service['description']} across North Carolina. We're the only agency that can build comprehensive 100+ page websites in weeks instead of months.

While competitors argue about whether you need 10 or 20 pages, we're building 100+ pages that cover everything your business offers.

## Results You Can Expect

- Outrank competitors with more comprehensive content
- Capture searches competitors miss
- Establish authority in your market
- Generate more qualified leads
- Improve customer education and trust
- Increase service bookings and calls

## Common Problems We Address

{chr(10).join([f'- {p}' for p in service['problems']])}

## Typical Pages We Create

### Service Pages (25-35 pages)
{chr(10).join([f'- {s}' for s in service['services']])}

### Location Pages (50-75 pages)
- Every city and town you serve
- Neighborhood-specific pages
- Service area coverage
- Local market focus

### Problem/Solution Pages (15-25 pages)
{chr(10).join([f'- {p}' for p in service['problems']])}

### Educational Content (10-20 pages)
- Industry guides and tips
- Customer education
- Best practices
- FAQ sections

[CTA: Schedule Strategy Call - See How We Build 100+ Pages in Weeks]

---

**Ready to dominate your market with a comprehensive website?**

📧 hello@beachbirdstudios.com  
📞 (910) 555-0123  
📍 Serving {service['description']} across North Carolina

*Get 100+ pages covering every service, every location, every customer question - built in weeks, not months.*"""

    filename = f"content/services/{service['name']}.md"
    with open(filename, 'w') as f:
        f.write(content)
    print(f"Created {filename}")

# Create service pages
for service in services:
    create_service_page(service)

print("Service pages generated successfully!")