import Link from "next/link";

interface InternalLinkingHubProps {
  currentPage: string;
  industry?: string;
  location?: string;
  serviceType?: string;
}

export default function InternalLinkingHub({ 
  currentPage, 
  industry, 
  location, 
  serviceType 
}: InternalLinkingHubProps) {
  
  // Core service pages - highest priority internal links
  const coreServices = [
    { href: "/services/complete-seo-websites", title: "Complete SEO Website Packages", description: "20-50 optimized pages for total search domination" },
    { href: "/services/local-seo", title: "Local SEO Services", description: "Dominate 'near me' searches and map pack results" },
    { href: "/services/ai-search-optimization", title: "AI Search Optimization", description: "Future-proof your business for ChatGPT and AI search" },
    { href: "/services/google-business-profile", title: "Google Business Profile", description: "Complete local presence optimization" },
  ];

  // Industry-specific pages for cross-linking
  const industries = [
    { href: "/industries/restaurant-seo", title: "Restaurant SEO", description: "Fill tables with local search traffic" },
    { href: "/industries/dental-seo", title: "Dental Practice SEO", description: "More patients through search dominance" },
    { href: "/industries/real-estate-seo", title: "Real Estate SEO", description: "Generate high-quality buyer leads" },
    { href: "/industries/legal-seo", title: "Legal Firm SEO", description: "Attract high-value legal clients" },
    { href: "/industries/medical-seo", title: "Medical Practice SEO", description: "Patient acquisition through search" },
  ];

  // Location-based pages for geographic coverage
  const locations = [
    { href: "/locations/miami-seo", title: "Miami SEO Services", description: "Dominate Miami's competitive market" },
    { href: "/locations/orlando-seo", title: "Orlando SEO Services", description: "Capture tourist and local traffic" },
    { href: "/locations/charleston-seo", title: "Charleston SEO Services", description: "Historic city, modern SEO results" },
    { href: "/locations/durham-seo", title: "Durham SEO Services", description: "Research Triangle digital presence" },
    { href: "/locations/wilmington-seo", title: "Wilmington SEO Services", description: "Coastal Carolina SEO specialists" },
  ];

  // Content/guide pages for topical authority
  const guides = [
    { href: "/guides/complete-seo-vs-traditional", title: "Complete SEO vs Traditional Websites", description: "Why complete SEO websites win every time" },
    { href: "/guides/local-seo-ranking-factors-2025", title: "Local SEO Ranking Factors 2025", description: "Latest local search optimization strategies" },
    { href: "/guides/ai-search-optimization-guide", title: "AI Search Optimization Guide", description: "Dominate ChatGPT and emerging platforms" },
    { href: "/guides/small-business-seo-packages", title: "Small Business SEO Packages", description: "Complete SEO for growing businesses" },
  ];

  // Filter out current page from suggestions
  const filteredServices = coreServices.filter(service => service.href !== currentPage);
  const filteredIndustries = industries.filter(industry => industry.href !== currentPage);
  const filteredLocations = locations.filter(location => location.href !== currentPage);
  const filteredGuides = guides.filter(guide => guide.href !== currentPage);

  // Smart suggestions based on current page context
  const getSmartSuggestions = () => {
    const suggestions = [];

    // Always suggest core services
    suggestions.push(...filteredServices.slice(0, 2));

    // If on industry page, suggest other industries and relevant locations
    if (currentPage.includes('/industries/')) {
      suggestions.push(...filteredIndustries.slice(0, 2));
      suggestions.push(...filteredLocations.slice(0, 2));
    }
    
    // If on location page, suggest other locations and relevant industries  
    if (currentPage.includes('/locations/')) {
      suggestions.push(...filteredLocations.slice(0, 2));
      suggestions.push(...filteredIndustries.slice(0, 2));
    }

    // If on service page, suggest industries and locations
    if (currentPage.includes('/services/')) {
      suggestions.push(...filteredIndustries.slice(0, 2));
      suggestions.push(...filteredLocations.slice(0, 2));
    }

    // Always include a guide
    suggestions.push(...filteredGuides.slice(0, 1));

    // Limit to 6 suggestions to avoid overwhelming
    return suggestions.slice(0, 6);
  };

  const smartSuggestions = getSmartSuggestions();

  return (
    <section className="py-16 bg-beach-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-beach-teal mb-4">
              Explore Related SEO Solutions
            </h2>
            <p className="font-body text-beach-teal/70 max-w-2xl mx-auto">
              Discover more ways Beach Bird Studios can help your business dominate search results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartSuggestions.map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group border border-beach-light/20"
              >
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue transition-colors">
                  {link.title} →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm leading-relaxed">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>

          {/* CTA for main service */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-premium-hover border border-beach-gold/20">
              <h3 className="font-heading text-2xl font-bold text-beach-teal mb-4">
                Ready to Get Started?
              </h3>
              <p className="font-body text-beach-teal/70 mb-6 max-w-2xl mx-auto">
                Get a complete SEO website that outranks competitors and generates more traffic, 
                leads, and sales than you ever thought possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-beach-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-beach-blue/90 transition-all shadow-premium"
                >
                  Get Your SEO Website
                </Link>
                <Link
                  href="/seo-research"
                  className="bg-beach-gold text-beach-teal px-8 py-3 rounded-lg font-bold hover:bg-beach-gold/90 transition-all"
                >
                  Free Website Analysis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}