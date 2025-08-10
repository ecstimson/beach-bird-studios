import Link from "next/link";

const features = [
  {
    title: "Complete SEO Packages",
    description: "Full website build with 20-50 optimized pages targeting your entire service area and offerings",
    icon: "📦",
    highlight: true,
    href: "/services/complete-seo-websites"
  },
  {
    title: "Service Pages & Topical Relevance",
    description: "Deep content structure that establishes your business as the topical authority in your industry",
    icon: "📝",
    href: "/industries/restaurant-seo"
  },
  {
    title: "Geographic SEO & Local Domination",
    description: "City-specific pages for every location you serve, maximizing local search visibility",
    icon: "🗺️",
    href: "/services/local-seo"
  },
  {
    title: "AI Search Optimization",
    description: "Content structured for ChatGPT, Perplexity, and other AI platforms to recommend your business",
    icon: "🤖",
    href: "/services/ai-search-optimization"
  },
  {
    title: "Google Business Profile Optimization",
    description: "Complete GBP setup with posts, Q&A, and ongoing management to dominate the map pack",
    icon: "📍",
    href: "/services/local-seo"
  },
  {
    title: "Citation Building & Review Management",
    description: "Build authority with consistent NAP citations and systematic review generation strategies",
    icon: "⭐",
    href: "/services/local-seo"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-beach-gold/10 text-beach-gold rounded-full font-semibold mb-4">
            Our SEO Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-4">
            Everything You Need to Dominate Search
          </h2>
          <p className="font-body text-xl text-beach-teal/70 max-w-3xl mx-auto">
            We don&apos;t just optimize your existing site – we build complete SEO-first websites 
            designed to capture every search opportunity in your market
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className={`relative bg-white p-8 rounded-2xl transition-all hover:transform hover:-translate-y-2 group cursor-pointer ${
                feature.highlight 
                  ? 'border-2 border-beach-gold shadow-premium-hover' 
                  : 'border border-beach-light/30 shadow-premium hover:shadow-premium-hover'
              }`}
            >
              {feature.highlight && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-beach-gold text-white text-sm font-semibold rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="font-heading text-2xl font-semibold mb-3 text-beach-teal group-hover:text-beach-blue transition-colors">
                {feature.title}
              </h3>
              <p className="font-body text-beach-teal/70 leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="text-beach-blue font-semibold text-sm group-hover:text-beach-gold transition-colors">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-beach-blue/10 px-6 py-3 rounded-lg">
            <span className="text-beach-blue text-xl">💡</span>
            <p className="font-body text-beach-teal">
              <strong>Why Beach Bird Studios?</strong> We combine traditional SEO, AI optimization, 
              and local search into one comprehensive strategy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}