#!/usr/bin/env python3

import os

locations = [
    # Beaches
    {
        "name": "wrightsville-beach-nc",
        "title": "Wrightsville Beach",
        "type": "Beach Community",
        "population": "2,593",
        "description": "Popular beach destination and residential community",
        "businesses": ["vacation rentals", "restaurants", "surf shops", "real estate"],
        "zip": "28480"
    },
    {
        "name": "carolina-beach-nc", 
        "title": "Carolina Beach",
        "type": "Beach Town",
        "population": "6,398",
        "description": "Family-friendly beach town with boardwalk",
        "businesses": ["hotels", "restaurants", "fishing charters", "retail"],
        "zip": "28428"
    },
    {
        "name": "kure-beach-nc",
        "title": "Kure Beach", 
        "type": "Small Beach Town",
        "population": "2,012",
        "description": "Quiet beach community with fishing pier",
        "businesses": ["vacation rentals", "fishing services", "restaurants"],
        "zip": "28449"
    },
    # Wilmington Areas
    {
        "name": "downtown-wilmington-nc",
        "title": "Downtown Wilmington",
        "type": "Historic Downtown",
        "population": "15,000+",
        "description": "Historic downtown with riverwalk and businesses",
        "businesses": ["restaurants", "law firms", "medical practices", "retail"],
        "zip": "28401"
    },
    {
        "name": "landfall-nc",
        "title": "Landfall",
        "type": "Upscale Community", 
        "population": "3,500",
        "description": "Luxury golf community in Wilmington",
        "businesses": ["luxury services", "medical practices", "professional services"],
        "zip": "28405"
    },
    {
        "name": "porters-neck-nc",
        "title": "Porter's Neck",
        "type": "Suburban Community",
        "population": "8,200", 
        "description": "Growing suburban area north of Wilmington",
        "businesses": ["home services", "medical practices", "retail"],
        "zip": "28411"
    },
    # Nearby Towns
    {
        "name": "leland-nc",
        "title": "Leland",
        "type": "Growing Town",
        "population": "23,504",
        "description": "Fast-growing town near Wilmington",
        "businesses": ["home services", "retail", "restaurants", "professional services"],
        "zip": "28451"
    },
    {
        "name": "southport-nc",
        "title": "Southport", 
        "type": "Historic Port Town",
        "population": "3,971",
        "description": "Historic waterfront town",
        "businesses": ["restaurants", "tourism", "marine services", "real estate"],
        "zip": "28461"
    },
    # Major NC Cities
    {
        "name": "raleigh-nc",
        "title": "Raleigh",
        "type": "State Capital",
        "population": "474,069",
        "description": "North Carolina's state capital and tech hub", 
        "businesses": ["tech companies", "government", "healthcare", "professional services"],
        "zip": "27601"
    },
    {
        "name": "charlotte-nc",
        "title": "Charlotte",
        "type": "Major City",
        "population": "874,579",
        "description": "North Carolina's largest city and banking center",
        "businesses": ["financial services", "healthcare", "manufacturing", "professional services"],
        "zip": "28202"
    },
    {
        "name": "greensboro-nc", 
        "title": "Greensboro",
        "type": "Triad City",
        "population": "296,710",
        "description": "Major city in the Piedmont Triad",
        "businesses": ["manufacturing", "healthcare", "education", "logistics"],
        "zip": "27401"
    },
    {
        "name": "durham-nc",
        "title": "Durham", 
        "type": "Research Triangle",
        "population": "278,993",
        "description": "Part of Research Triangle with Duke University",
        "businesses": ["tech companies", "healthcare", "education", "research"],
        "zip": "27701"
    }
]

def create_location_page(location):
    content = f"""# Web Design {location['title']}, NC - 100+ Pages Built Fast

**URL:** /locations/{location['name']}  
**H1:** Web Design {location['title']}, NC - 100+ Pages Built Fast  
**Meta Title:** Web Design {location['title']}, NC | Beach Bird Studios  
**Meta Description:** Comprehensive websites with 100+ pages for {location['title']}, NC businesses. Built in weeks, not months. Custom solutions from $15K.  

## Serving {location['title']}, North Carolina Businesses

{location['title']} is a {location['type'].lower()} with {location['population']} residents. {location['description']}. Local businesses need comprehensive websites to compete effectively in today's digital marketplace.

## The Problem With Small Websites in {location['title']}

Most local web agencies build basic 10-20 page websites that barely scratch the surface of what your {location['title']} business offers. Your competitors with comprehensive sites are dominating local search results.

While other agencies take 6-8 months to build comprehensive sites, we deliver 100+ page websites in just 3-4 weeks.

## Why {location['title']} Businesses Choose Beach Bird Studios

We understand the unique needs of {location['title']} businesses. Whether you're serving locals or visitors, we build websites that capture every search, answer every question, and convert more visitors into customers.

## Industries We Serve in {location['title']}, NC

### Popular {location['title']} Business Types
{chr(10).join([f'- {business.title()} businesses' for business in location['businesses']])}

### Home Services in {location['title']}
- HVAC companies serving {location['title']} residents
- Plumbing services for {location['title']} homes and businesses  
- Electrical contractors in the {location['title']} area
- Roofing companies serving {location['zip']} zip code
- Landscaping services for {location['title']} properties

### Professional Services in {location['title']}
- Law firms serving {location['title']} clients
- Accounting firms for {location['title']} businesses
- Real estate agencies in the {location['title']} market
- Insurance agencies serving {location['zip']}
- Medical practices in {location['title']}

## What We Build for {location['title']} Businesses

### Comprehensive Website Structure
- Homepage optimized for {location['title']} searches
- Service pages for everything you offer
- Location pages covering your entire service area
- Customer testimonials from {location['title']} clients
- Local business information and directions

### {location['title']}-Specific Content
- Local market information and insights
- Service area coverage including {location['title']}
- Customer success stories from {location['zip']}
- Local business partnerships and community involvement
- {location['title']}-specific service offerings

## Our {location['title']} Website Process

### Week 1: Local Market Analysis
- Research {location['title']} competitors
- Analyze local search trends
- Map service areas around {location['title']}
- Plan {location['title']}-specific content

### Week 2-3: Content Creation
- Generate 100+ pages of relevant content
- Create {location['title']} location-specific pages
- Optimize for "{location['title']} [service]" searches
- Include local business information

### Week 3-4: Design & Development
- Apply professional design reflecting {location['title']} market
- Build modern, mobile-friendly website
- Add local contact forms and scheduling
- Test across all devices

### Week 4: Launch & Local SEO
- Deploy comprehensive website
- Submit to Google My Business for {location['title']}
- Set up local directory listings
- Train your team on website management

## Investment for {location['title']} Businesses

Website investment depends on your specific needs:
- Services offered in {location['title']}
- Target market size around {location['title']}
- Competition level in {location['zip']}
- Growth goals for your {location['title']} business

**Typical investments: $18,000 - $45,000**

Flexible payment options:
- Monthly payments: $2,200 - $4,000
- Terms: 8-18 months  
- Maintenance: $650 - $1,200/month

## Results for {location['title']} Businesses

Our {location['title']} clients typically see:
- Higher rankings for "{location['title']} [service]" searches
- More qualified leads from {location['title']} area
- Increased visibility in {location['zip']} market
- Better conversion of {location['title']} visitors
- Stronger local market presence

## Why {location['title']} Businesses Trust Beach Bird Studios

- **Local Understanding**: We know the {location['title']} market
- **Fast Delivery**: 100+ pages built in 3-4 weeks
- **Comprehensive Coverage**: Every service, every question answered
- **Mobile-Optimized**: Perfect for {location['title']} mobile searches  
- **Local SEO**: Optimized for {location['title']} searches

## Common {location['title']} Website Features

### Local Business Pages
- About your {location['title']} business
- Service areas including {location['title']}
- {location['title']} customer testimonials
- Local business hours and contact
- Directions to your {location['title']} location

### Service Coverage Pages  
- Services offered in {location['title']}
- Coverage areas around {location['zip']}
- Emergency services for {location['title']}
- Residential vs commercial in {location['title']}
- Seasonal services for {location['title']} weather

### Educational Content
- {location['title']} market insights
- Local regulations and requirements
- Weather-related service information
- Community involvement and sponsorships
- {location['title']} business networking

[CTA: Schedule Strategy Call - Dominate {location['title']} Searches]

---

**Ready to dominate the {location['title']} market?**

📧 hello@beachbirdstudios.com  
📞 (910) 555-0123  
📍 Proudly serving {location['title']}, NC businesses

*Get 100+ pages optimized for {location['title']} searches - built in weeks, not months.*"""

    filename = f"content/locations/{location['name']}.md"
    with open(filename, 'w') as f:
        f.write(content)
    print(f"Created {filename}")

# Create location pages
for location in locations:
    create_location_page(location)

print("Location pages generated successfully!")