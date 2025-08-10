import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant SEO Services - Dominate Local Food Searches | Beach Bird Studios",
  description: "Complete restaurant SEO packages that fill tables. Dominate 'restaurants near me' searches, optimize Google Business Profile, manage reviews, and outrank competitors.",
  keywords: "restaurant seo services, restaurant website design, local restaurant marketing, restaurant google business profile, food delivery seo, restaurant reviews",
  openGraph: {
    title: "Restaurant SEO Services - Fill Every Table",
    description: "Complete SEO solutions for restaurants. Dominate local searches, optimize for delivery platforms, and fill every seat.",
    type: "website",
  },
};

const restaurantChallenges = [
  {
    challenge: "Invisible in 'Restaurants Near Me' Searches",
    impact: "Missing 78% of local discovery traffic",
    solution: "Local SEO domination with map pack optimization"
  },
  {
    challenge: "Poor Google Business Profile Setup", 
    impact: "Losing customers to competitors daily",
    solution: "Complete GBP optimization with photos, posts, and reviews"
  },
  {
    challenge: "Negative Reviews Destroying Reputation",
    impact: "Each negative review costs 22 customers",
    solution: "Professional review management and response strategy"
  },
  {
    challenge: "No Online Menu or Ordering Integration",
    impact: "Losing delivery and takeout revenue",
    solution: "Complete website with integrated ordering systems"
  },
  {
    challenge: "Competitors Dominating Social Media",
    impact: "Missing younger demographics entirely",
    solution: "Social media integration and content strategy"
  },
  {
    challenge: "Zero Content Marketing Strategy",
    impact: "No brand recognition or customer loyalty",
    solution: "Food blog, recipes, and local content creation"
  }
];

const restaurantSeoFeatures = [
  {
    title: "Google Business Profile Mastery",
    description: "Complete optimization with professional photos, daily posts, menu integration, and review management",
    results: ["300% increase in 'near me' visibility", "Higher map pack rankings", "More phone calls and directions"],
    icon: "📍"
  },
  {
    title: "Local Search Domination",
    description: "Target every local food search: 'restaurants near me', 'best [cuisine] in [city]', '[dish] restaurant'",
    results: ["Rank #1 for local food searches", "Dominate delivery app discovery", "Capture weekend and event traffic"],
    icon: "🍽️"
  },
  {
    title: "Menu and Online Ordering SEO",
    description: "Optimized menu pages that rank for specific dishes and integrate with delivery platforms",
    results: ["Individual dishes ranking in search", "Higher online ordering conversion", "Delivery platform visibility"],
    icon: "📱"
  },
  {
    title: "Review and Reputation Management",
    description: "Automated review requests, professional responses, and reputation repair strategies",
    results: ["4.5+ star average ratings", "More positive reviews monthly", "Reputation crisis prevention"],
    icon: "⭐"
  },
  {
    title: "Food Blog and Content Marketing",
    description: "Recipe content, local food guides, and behind-the-scenes content that builds brand loyalty",
    results: ["Increased brand recognition", "Social media engagement", "Customer retention improvement"],
    icon: "✍️"
  },
  {
    title: "Event and Catering Lead Generation",
    description: "Dedicated pages and content targeting private events, catering, and special occasions",
    results: ["Higher-value catering bookings", "Event hosting inquiries", "Corporate client acquisition"],
    icon: "🎉"
  }
];

const restaurantPackages = [
  {
    name: "Local Restaurant Starter",
    price: "$12,000",
    bestFor: "Single location restaurants",
    timeline: "4-6 weeks",
    features: [
      "Complete restaurant website rebuild",
      "Google Business Profile optimization",
      "Local SEO for restaurant searches",
      "Basic review management setup",
      "Menu optimization and integration",
      "Photo optimization and management",
      "Local citation building (25 listings)",
      "3 months performance tracking"
    ]
  },
  {
    name: "Restaurant Growth Package",
    price: "$22,000", 
    bestFor: "Growing restaurant businesses",
    timeline: "6-8 weeks",
    features: [
      "Everything in Local Restaurant Starter",
      "Advanced content marketing strategy",
      "Food blog and recipe content creation",
      "Social media integration and optimization",
      "Event and catering lead generation pages",
      "Delivery platform optimization",
      "Comprehensive review management",
      "Local food guide content creation",
      "50+ local citations and directory listings",
      "6 months optimization and growth tracking"
    ],
    popular: true
  },
  {
    name: "Multi-Location Restaurant Chain",
    price: "$35,000+",
    bestFor: "Restaurant chains and franchises",
    timeline: "8-12 weeks",
    features: [
      "Everything in Restaurant Growth Package",
      "Multi-location SEO strategy",
      "Individual location optimization",
      "Franchise SEO coordination",
      "Corporate brand management",
      "Advanced analytics and reporting",
      "Chain-wide review management",
      "Franchise marketing materials",
      "100+ citations per location",
      "12 months comprehensive management"
    ]
  }
];

const restaurantResults = [
  {
    business: "Miami Bistro",
    before: "2.3 star rating, rarely visible in searches",
    after: "4.7 star rating, #1 for 'Miami restaurants'",
    improvement: "+450% online orders, +280% reservations"
  },
  {
    business: "Orlando Pizza Company", 
    before: "No online presence, losing to chains",
    after: "Dominates local pizza searches",
    improvement: "+380% delivery orders, +200% weekend traffic"
  },
  {
    business: "Tampa Seafood Restaurant",
    before: "Invisible for tourist searches",
    after: "#1 for 'Tampa seafood restaurant'", 
    improvement: "+520% tourist bookings, +160% average ticket"
  }
];

export default function RestaurantSEOPage() {
  return (
    <div className="bg-beach-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="inline-block px-6 py-3 bg-yellow-400/20 text-yellow-300 rounded-full font-semibold mb-8 text-lg">
              🍽️ Restaurant Marketing Specialists
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Restaurant SEO Services
            </h1>
            <p className="font-body text-2xl md:text-3xl mb-8 opacity-90 leading-relaxed">
              Fill every table with customers who find you first in "restaurants near me" searches
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-beach-gold text-beach-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-beach-gold/90 transition-all shadow-2xl"
              >
                Fill More Tables Today
              </Link>
              <Link
                href="/seo-research"
                className="bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all"
              >
                Free Restaurant Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-6">
                Is Your Restaurant Losing Customers Every Day?
              </h2>
              <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
                Most restaurants are invisible online while competitors fill tables with customers 
                who should be finding you first.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {restaurantChallenges.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-premium-hover border border-beach-light/20">
                  <div className="bg-red-50 p-4 rounded-lg mb-4 border border-red-200">
                    <h3 className="font-heading text-lg font-bold text-red-800 mb-2">
                      ❌ {item.challenge}
                    </h3>
                    <p className="font-body text-red-600 text-sm font-medium">
                      {item.impact}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-heading text-sm font-bold text-green-800 mb-1">
                      ✅ Our Solution:
                    </h4>
                    <p className="font-body text-green-700 text-sm">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-beach-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-6">
                Complete Restaurant SEO Solutions
              </h2>
              <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
                Everything your restaurant needs to dominate local searches, fill tables, 
                and build a loyal customer base.
              </p>
            </div>

            <div className="space-y-8">
              {restaurantSeoFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-premium-hover">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-4xl">{feature.icon}</span>
                        <div>
                          <h3 className="font-heading text-2xl font-bold text-beach-teal mb-3">
                            {feature.title}
                          </h3>
                          <p className="font-body text-beach-teal/70 text-lg leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                      <h4 className="font-heading text-lg font-bold text-green-800 mb-4">
                        Expected Results:
                      </h4>
                      <ul className="space-y-2">
                        {feature.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500 font-bold text-sm">✓</span>
                            <span className="font-body text-green-700 text-sm">{result}</span>
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

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-6">
                Restaurant SEO Packages
              </h2>
              <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
                Choose the package that matches your restaurant's growth goals
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {restaurantPackages.map((pkg, index) => (
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
                    <div className="text-beach-teal/70 mb-2">
                      {pkg.bestFor}
                    </div>
                    <div className="text-sm text-beach-teal/60">
                      {pkg.timeline}
                    </div>
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
                    Start Filling Tables
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-beach-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-beach-teal mb-6">
                Real Restaurant Results
              </h2>
              <p className="font-body text-xl text-beach-teal/80">
                See how our restaurant SEO services have transformed local food businesses
              </p>
            </div>

            <div className="space-y-8">
              {restaurantResults.map((result, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-premium-hover">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-beach-teal mb-2">
                        {result.business}
                      </h3>
                      <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                        <div className="font-semibold text-red-800 text-sm mb-1">Before:</div>
                        <div className="text-red-700 text-sm">{result.before}</div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-800 text-sm mb-1">After:</div>
                      <div className="text-green-700 text-sm">{result.after}</div>
                    </div>
                    <div className="bg-beach-blue/10 p-3 rounded-lg border border-beach-blue/20">
                      <div className="font-semibold text-beach-blue text-sm mb-1">Results:</div>
                      <div className="text-beach-blue text-sm font-bold">{result.improvement}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location-Based Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-beach-teal mb-4">
                Restaurant SEO Services by Location
              </h2>
              <p className="font-body text-beach-teal/70">
                Specialized local restaurant marketing for major cities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/locations/miami-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Miami Restaurant SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Dominate Miami's competitive restaurant scene
                </p>
              </Link>

              <Link href="/locations/orlando-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Orlando Restaurant SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Capture tourist and local dining traffic
                </p>
              </Link>

              <Link href="/locations/charleston-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Charleston Restaurant SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Stand out in Charleston's famous food scene
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
                  Optimize your restaurant's Google presence
                </p>
              </Link>

              <Link href="/services/review-management" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Review Management →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Build and maintain your restaurant's reputation
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Fill Every Table?
            </h2>
            <p className="font-body text-xl mb-8 opacity-90 leading-relaxed">
              Stop watching customers find your competitors first. Get a restaurant SEO 
              strategy that fills tables, increases orders, and builds customer loyalty.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-beach-gold mb-2">78%</div>
                  <div className="text-white/80">of diners search "restaurants near me"</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-beach-gold mb-2">92%</div>
                  <div className="text-white/80">check reviews before visiting</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-beach-gold mb-2">46%</div>
                  <div className="text-white/80">of Google searches are local</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-beach-gold text-beach-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-beach-gold/90 transition-all shadow-2xl"
              >
                Get Restaurant SEO Package
              </Link>
              <Link
                href="/seo-research"
                className="bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all"
              >
                Free Restaurant Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}