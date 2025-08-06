import type { Metadata } from "next";
import Link from "next/link";
import InternalLinkingHub from "@/components/InternalLinkingHub";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Complete SEO Website Packages - All-in-One SEO Solutions | Beach Bird Studios",
  description: "Get a complete SEO website package that outranks competitors. 20-50 optimized pages, technical SEO, local domination, AI search optimization, and Google Business Profile setup included.",
  keywords: "complete seo website, full seo website build, comprehensive seo site, all-in-one seo website, turnkey seo website, complete seo packages",
  openGraph: {
    title: "Complete SEO Website Packages - Dominate Search Results",
    description: "Years of SEO work delivered in one complete website package. Outrank competitors from day one.",
    type: "website",
  },
};

const serviceFeatures = [
  {
    title: "20-50 SEO-Optimized Pages",
    description: "Service pages, location pages, about pages, and content hubs all optimized for maximum search visibility",
    icon: "📄"
  },
  {
    title: "Technical SEO Foundation",
    description: "Lightning-fast loading, mobile-first design, Core Web Vitals optimization, and clean code structure",
    icon: "⚡"
  },
  {
    title: "Local SEO Domination",
    description: "Complete Google Business Profile optimization, local citations, review management, and map pack domination",
    icon: "📍"
  },
  {
    title: "AI Search Optimization",
    description: "Content structured for ChatGPT, Perplexity, and emerging AI search platforms for future-proof visibility",
    icon: "🤖"
  },
  {
    title: "Content Strategy & Creation",
    description: "Expert-written content targeting your industry's most valuable keywords and customer questions",
    icon: "✍️"
  },
  {
    title: "Ongoing Performance Tracking",
    description: "Monthly reports showing ranking improvements, traffic growth, and lead generation metrics",
    icon: "📈"
  }
];

const pricingPackages = [
  {
    name: "Small Business Complete",
    price: "$15,000",
    pages: "20-25 Pages",
    timeline: "4-6 Weeks",
    features: [
      "Complete website rebuild with SEO foundation",
      "Google Business Profile optimization",
      "10 local citations and directory listings",
      "Basic review management setup",
      "Technical SEO audit and fixes",
      "Content for core service and location pages",
      "3 months of performance tracking"
    ],
    cta: "Perfect for Local Businesses",
    popular: false
  },
  {
    name: "Professional Complete",
    price: "$28,000",
    pages: "30-40 Pages",
    timeline: "6-8 Weeks", 
    features: [
      "Everything in Small Business Complete",
      "Advanced content strategy and creation",
      "50+ local citations and premium listings",
      "Comprehensive review management system",
      "Competitor analysis and gap closure",
      "AI search optimization implementation",
      "Industry-specific landing pages",
      "6 months of performance tracking and optimization"
    ],
    cta: "Most Popular Choice",
    popular: true
  },
  {
    name: "Enterprise Complete",
    price: "$45,000",
    pages: "40-50+ Pages",
    timeline: "8-12 Weeks",
    features: [
      "Everything in Professional Complete",
      "Multi-location SEO optimization",
      "Advanced schema markup implementation",
      "Custom conversion tracking and analytics",
      "Comprehensive competitor domination strategy",
      "Premium citation and directory placements",
      "Advanced content marketing strategy",
      "12 months of optimization and growth tracking"
    ],
    cta: "Maximum Market Domination",
    popular: false
  }
];

const competitorComparison = [
  {
    feature: "Complete Website Rebuild",
    beachBird: true,
    competitors: "Partial updates only"
  },
  {
    feature: "20-50 Optimized Pages",
    beachBird: true,
    competitors: "5-10 pages typical"
  },
  {
    feature: "AI Search Optimization",
    beachBird: true,
    competitors: "Not offered"
  },
  {
    feature: "Local SEO Domination",
    beachBird: true,
    competitors: "Basic setup only"
  },
  {
    feature: "Technical SEO Foundation",
    beachBird: true,
    competitors: "Often overlooked"
  },
  {
    feature: "Industry-Specific Strategy",
    beachBird: true,
    competitors: "Generic approach"
  }
];

export default function CompleteSeWebsitesPage() {
  return (
    <>
      <SchemaMarkup 
        type="service"
        data={{
          name: "Complete SEO Website Packages",
          description: "Comprehensive SEO websites with 20-50 optimized pages, technical SEO, local domination, AI search optimization, and Google Business Profile setup.",
          url: "https://beachbirdstudios.com/services/complete-seo-websites",
          services: [
            {
              name: "Small Business Complete SEO Website",
              description: "20-25 page complete SEO website for small businesses",
              offers: [
                {
                  price: "15000",
                  priceCurrency: "USD", 
                  description: "Complete website rebuild with comprehensive SEO optimization"
                }
              ]
            },
            {
              name: "Professional Complete SEO Website", 
              description: "30-40 page complete SEO website for growing businesses",
              offers: [
                {
                  price: "28000",
                  priceCurrency: "USD",
                  description: "Advanced SEO website with content marketing and competitor domination"
                }
              ]
            },
            {
              name: "Enterprise Complete SEO Website",
              description: "40-50+ page complete SEO website for maximum market domination", 
              offers: [
                {
                  price: "45000",
                  priceCurrency: "USD",
                  description: "Premium SEO website with multi-location optimization and advanced features"
                }
              ]
            }
          ]
        }}
      />
      <div className="bg-beach-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-beach-teal via-beach-blue to-beach-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="inline-block px-6 py-3 bg-beach-gold/20 text-beach-gold rounded-full font-semibold mb-8 text-lg">
              🏆 Most Popular Service
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Complete SEO Website Packages
            </h1>
            <p className="font-body text-2xl md:text-3xl mb-8 opacity-90 leading-relaxed">
              Years of SEO work delivered in one comprehensive website that dominates search results from day one
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-beach-gold text-beach-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-beach-gold/90 transition-all shadow-2xl"
              >
                Get Your Complete SEO Website
              </Link>
              <Link
                href="/seo-research"
                className="bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all"
              >
                Analyze Your Current Site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-6">
                Everything You Need to Dominate Search
              </h2>
              <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
                Unlike other agencies that offer piecemeal services, our complete SEO website packages 
                include everything needed for total search domination in one comprehensive solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-premium-hover border border-beach-light/20">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-beach-teal mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-body text-beach-teal/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-beach-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-6">
                Complete SEO Website Packages
              </h2>
              <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
                Choose the package that matches your business goals. Every package includes 
                a complete website rebuild with comprehensive SEO optimization.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, index) => (
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
                  
                  <div className="text-center mb-8">
                    <h3 className="font-heading text-2xl font-bold text-beach-teal mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-bold text-beach-blue mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-beach-teal/70 mb-4">
                      {pkg.pages} • {pkg.timeline}
                    </div>
                    <div className="text-sm font-semibold text-beach-gold bg-beach-gold/10 px-4 py-2 rounded-full">
                      {pkg.cta}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-beach-blue text-lg">✓</span>
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
                    Get Started Today
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Complete SEO Websites Win */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-6">
                Why Complete SEO Websites Dominate
              </h2>
              <p className="font-body text-xl text-beach-teal/80">
                See how our complete approach compares to traditional web design and piecemeal SEO services
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-premium-hover overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-beach-light/30">
                    <th className="text-left py-4 font-heading text-lg text-beach-teal">Feature</th>
                    <th className="text-center py-4 font-heading text-lg text-beach-blue">Beach Bird Complete</th>
                    <th className="text-center py-4 font-heading text-lg text-beach-teal/60">Traditional Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((item, index) => (
                    <tr key={index} className="border-b border-beach-light/20">
                      <td className="py-4 font-body text-beach-teal font-medium">
                        {item.feature}
                      </td>
                      <td className="py-4 text-center">
                        <span className="text-2xl text-green-500">✓</span>
                      </td>
                      <td className="py-4 text-center font-body text-beach-teal/60">
                        {typeof item.competitors === 'string' ? item.competitors : '✗'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <InternalLinkingHub 
        currentPage="/services/complete-seo-websites" 
        serviceType="complete-seo"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-beach-teal via-beach-blue to-beach-teal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Dominate Your Market?
            </h2>
            <p className="font-body text-xl mb-8 opacity-90 leading-relaxed">
              Stop losing customers to competitors. Get a complete SEO website that 
              ranks on page 1, dominates local search, and captures every opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-beach-gold text-beach-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-beach-gold/90 transition-all shadow-2xl"
              >
                Start Your Complete SEO Website
              </Link>
              <Link
                href="/seo-research"
                className="bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all"
              >
                Free Website Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}