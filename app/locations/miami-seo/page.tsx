import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Miami SEO Services - Local SEO Company | Beach Bird Studios",
  description: "Leading Miami SEO company. Complete SEO websites that dominate Miami search results. Local SEO, Google Business Profile, and digital marketing for Miami businesses.",
  keywords: "miami seo services, miami seo company, local seo miami, miami website design, seo miami fl, miami digital marketing, miami beach seo",
  openGraph: {
    title: "Miami SEO Services - Dominate Local Search",
    description: "Complete SEO solutions for Miami businesses. Local search domination and website design.",
    type: "website",
  },
};

const miamiBusinessDistricts = [
  {
    area: "South Beach",
    description: "Tourist and hospitality businesses",
    keywords: ["south beach restaurants", "miami beach hotels", "sobe nightlife"],
    icon: "🏖️"
  },
  {
    area: "Downtown Miami",
    description: "Financial and professional services",
    keywords: ["downtown miami lawyers", "miami financial services", "brickell businesses"],
    icon: "🏙️"
  },
  {
    area: "Coral Gables",
    description: "Upscale retail and medical practices",
    keywords: ["coral gables dentist", "miracle mile shopping", "gables restaurants"],
    icon: "🌺"
  },
  {
    area: "Wynwood",
    description: "Arts, galleries, and creative businesses",
    keywords: ["wynwood art galleries", "wynwood restaurants", "miami arts district"],
    icon: "🎨"
  },
  {
    area: "Little Havana",
    description: "Cultural businesses and restaurants",
    keywords: ["little havana restaurants", "calle ocho businesses", "cuban food miami"],
    icon: "🎭"
  },
  {
    area: "Coconut Grove",
    description: "Boutique shops and local services",
    keywords: ["coconut grove restaurants", "grove shopping", "miami marina services"],
    icon: "🥥"
  }
];

const miamiIndustries = [
  {
    industry: "Restaurants & Hospitality",
    challenges: "Intense competition from chains and tourist-focused establishments",
    solutions: ["Local SEO for 'Miami restaurants'", "Tourist keyword targeting", "Multi-language SEO"],
    results: "Average 340% increase in reservations"
  },
  {
    industry: "Real Estate",
    challenges: "Highly competitive luxury market with international buyers",
    solutions: ["Luxury property SEO", "International buyer targeting", "Neighborhood-specific content"],
    results: "Average 280% increase in qualified leads"
  },
  {
    industry: "Medical & Dental",
    challenges: "Affluent market with high expectations and competition",
    solutions: ["Medical practice SEO", "Luxury healthcare positioning", "Multilingual content"],
    results: "Average 420% increase in appointments"
  },
  {
    industry: "Legal Services",
    challenges: "Saturated market with high-value clients",
    solutions: ["Legal practice authority building", "High-value keyword targeting", "Reputation management"],
    results: "Average 190% increase in consultations"
  },
  {
    industry: "Professional Services",
    challenges: "International business environment",
    solutions: ["B2B SEO strategies", "Professional networking content", "Industry authority building"],
    results: "Average 250% increase in business inquiries"
  }
];

const miamiSeoFeatures = [
  {
    title: "Miami Local SEO Domination",
    description: "Rank #1 for 'businesses near me' searches across all Miami neighborhoods",
    specifics: [
      "Miami Beach SEO optimization",
      "Downtown Miami business listings", 
      "Coral Gables local search",
      "Wynwood district visibility",
      "Little Havana cultural targeting",
      "Coconut Grove local presence"
    ]
  },
  {
    title: "Tourist & Local Dual Targeting",
    description: "Capture both Miami residents and millions of annual tourists",
    specifics: [
      "Tourist-focused keyword strategies",
      "Seasonal traffic optimization",
      "Hotel and tourism partnerships",
      "Multi-language content creation",
      "Tourist attraction proximity SEO",
      "Event-based content marketing"
    ]
  },
  {
    title: "Competitive Market Penetration",
    description: "Outrank established competitors in Miami's saturated markets",
    specifics: [
      "Competitor analysis and gap identification",
      "High-value long-tail keyword targeting",
      "Authority building campaigns",
      "Premium backlink acquisition",
      "Local citation domination",
      "Review and reputation superiority"
    ]
  },
  {
    title: "Miami-Specific Content Strategy",
    description: "Content that resonates with Miami's unique culture and demographics",
    specifics: [
      "Bilingual content optimization",
      "Miami lifestyle and culture content",
      "Hurricane and weather considerations",
      "Local event and festival targeting",
      "Miami neighborhood guides",
      "Art Basel and cultural event SEO"
    ]
  }
];

const miamiPackages = [
  {
    name: "Miami Local Business",
    price: "$18,000",
    description: "Perfect for single-location Miami businesses",
    features: [
      "Complete Miami-focused website rebuild",
      "Google Business Profile optimization",
      "Miami neighborhood targeting",
      "Local citation building (50+ Miami directories)",
      "Tourist keyword integration",
      "Bilingual content setup",
      "Hurricane/weather page optimization",
      "6 months Miami market tracking"
    ]
  },
  {
    name: "Miami Market Domination", 
    price: "$32,000",
    description: "Comprehensive Miami SEO for growing businesses",
    features: [
      "Everything in Miami Local Business",
      "Multi-neighborhood SEO strategy",
      "Advanced tourist targeting",
      "Miami lifestyle content creation",
      "Art Basel and event marketing",
      "Luxury market positioning (if applicable)",
      "International buyer targeting",
      "100+ premium Miami citations",
      "12 months optimization and growth"
    ],
    popular: true
  },
  {
    name: "Miami Enterprise",
    price: "$50,000+",
    description: "Maximum market share for established Miami businesses",
    features: [
      "Everything in Miami Market Domination",
      "Multi-location Miami optimization",
      "Corporate Miami presence building",
      "Advanced international SEO",
      "Premium PR and link building",
      "Miami influencer partnerships",
      "Comprehensive reputation management",
      "Custom Miami market research",
      "18 months comprehensive management"
    ]
  }
];

export default function MiamiSEOPage() {
  return (
    <div className="bg-beach-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="inline-block px-6 py-3 bg-pink-400/20 text-pink-200 rounded-full font-semibold mb-8 text-lg">
              🌴 Miami SEO Specialists
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Miami SEO Services
            </h1>
            <p className="font-body text-2xl md:text-3xl mb-8 opacity-90 leading-relaxed">
              Dominate Miami search results and capture both local customers and millions of annual tourists
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-beach-gold text-beach-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-beach-gold/90 transition-all shadow-2xl"
              >
                Dominate Miami Search
              </Link>
              <Link
                href="/seo-research"
                className="bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all"
              >
                Free Miami SEO Analysis
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-beach-gold mb-1">16M+</div>
                  <div className="text-white/80 text-sm">Annual Tourists</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-beach-gold mb-1">470K+</div>
                  <div className="text-white/80 text-sm">Miami Residents</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-beach-gold mb-1">$170B</div>
                  <div className="text-white/80 text-sm">Economic Impact</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-beach-gold mb-1">#1</div>
                  <div className="text-white/80 text-sm">Tourist Destination</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Districts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-6">
                Dominate Every Miami Neighborhood
              </h2>
              <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
                Miami's diverse districts require specialized SEO strategies. We know exactly 
                how to position your business for maximum visibility in each area.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {miamiBusinessDistricts.map((district, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-premium-hover border border-beach-light/20">
                  <div className="text-4xl mb-4 text-center">{district.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-beach-teal mb-3 text-center">
                    {district.area}
                  </h3>
                  <p className="font-body text-beach-teal/70 mb-4 text-center text-sm">
                    {district.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-beach-blue text-sm">Key Search Terms:</h4>
                    {district.keywords.map((keyword, idx) => (
                      <span key={idx} className="inline-block bg-beach-blue/10 text-beach-blue px-2 py-1 rounded text-xs mr-1 mb-1">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-beach-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-beach-teal mb-6">
                Miami Industry SEO Solutions
              </h2>
              <p className="font-body text-xl text-beach-teal/80">
                Specialized strategies for Miami's most competitive industries
              </p>
            </div>

            <div className="space-y-8">
              {miamiIndustries.map((industry, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-premium-hover">
                  <div className="grid md:grid-cols-4 gap-6 items-start">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-beach-teal mb-2">
                        {industry.industry}
                      </h3>
                      <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                        <h4 className="font-semibold text-red-800 text-sm mb-1">Challenge:</h4>
                        <p className="text-red-700 text-xs">{industry.challenges}</p>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-beach-blue mb-3">Our Miami Solutions:</h4>
                      <ul className="space-y-1">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500 text-sm">✓</span>
                            <span className="font-body text-beach-teal/80 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                      <h4 className="font-semibold text-green-800 text-sm mb-2">Results:</h4>
                      <p className="text-green-700 font-bold text-sm">{industry.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Miami SEO Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-beach-teal mb-6">
                Miami-Specific SEO Strategies
              </h2>
              <p className="font-body text-xl text-beach-teal/80">
                What makes our Miami SEO different from generic SEO agencies
              </p>
            </div>

            <div className="space-y-12">
              {miamiSeoFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-premium-hover">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-beach-teal mb-4">
                        {feature.title}
                      </h3>
                      <p className="font-body text-beach-teal/70 text-lg mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="bg-beach-light/20 rounded-2xl p-6">
                      <h4 className="font-heading text-lg font-bold text-beach-blue mb-4">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {feature.specifics.map((specific, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-beach-blue font-bold text-sm">•</span>
                            <span className="font-body text-beach-teal/80 text-sm">{specific}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Miami SEO Packages */}
      <section className="py-20 bg-beach-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-beach-teal mb-6">
                Miami SEO Packages
              </h2>
              <p className="font-body text-xl text-beach-teal/80">
                Comprehensive SEO solutions designed specifically for Miami businesses
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {miamiPackages.map((pkg, index) => (
                <div key={index} className={`bg-white rounded-3xl p-8 shadow-premium-hover relative ${
                  pkg.popular ? 'border-4 border-beach-gold transform scale-105' : 'border border-beach-light/20'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-beach-gold text-beach-teal px-6 py-2 rounded-full font-bold text-sm">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="font-heading text-2xl font-bold text-beach-teal mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-bold text-beach-blue mb-2">
                      {pkg.price}
                    </div>
                    <p className="text-beach-teal/70 text-sm">
                      {pkg.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 text-lg">✓</span>
                        <span className="font-body text-beach-teal/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full block text-center py-4 rounded-xl font-bold text-lg transition-all ${
                      pkg.popular
                        ? 'bg-beach-blue text-white hover:bg-beach-blue/90 shadow-premium'
                        : 'bg-beach-teal text-white hover:bg-beach-teal/90'
                    }`}
                  >
                    Dominate Miami Search
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-beach-teal mb-4">
                Complete Miami Business Solutions
              </h2>
              <p className="font-body text-beach-teal/70">
                Specialized services for Miami businesses across all industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/industries/restaurant-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Miami Restaurant SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Dominate Miami's competitive restaurant scene
                </p>
              </Link>

              <Link href="/industries/real-estate-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Miami Real Estate SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Luxury property and international buyer targeting
                </p>
              </Link>

              <Link href="/industries/dental-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Miami Dental SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Medical and dental practice optimization
                </p>
              </Link>

              <Link href="/services/local-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Local SEO Services →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Complete local search optimization
                </p>
              </Link>

              <Link href="/services/google-business-profile" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Google Business Profile →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Miami Google My Business optimization
                </p>
              </Link>

              <Link href="/locations/orlando-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Orlando SEO Services →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  SEO services for Orlando businesses
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Own Miami Search Results?
            </h2>
            <p className="font-body text-xl mb-8 opacity-90 leading-relaxed">
              Miami is one of the most competitive markets in the world. You need SEO specialists 
              who understand the unique challenges and opportunities of the Magic City.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
              <p className="text-white font-medium text-lg">
                🔥 <strong>Miami Advantage:</strong> Capture both 470K+ residents and 16M+ annual tourists 
                with SEO strategies designed specifically for Miami's unique market dynamics.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-beach-gold text-beach-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-beach-gold/90 transition-all shadow-2xl"
              >
                Start Miami SEO Campaign
              </Link>
              <Link
                href="/seo-research"
                className="bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all"
              >
                Free Miami Market Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}