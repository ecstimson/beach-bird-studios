import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Search Optimization Services - Future-Proof Your SEO | Beach Bird Studios",
  description: "Optimize your website for ChatGPT, Perplexity, Claude, and emerging AI search platforms. Get ahead of competitors with AI-friendly content structure and schema markup.",
  keywords: "ai search optimization, chatgpt seo, perplexity seo, ai content optimization, ai search results, claude seo, gemini search optimization",
  openGraph: {
    title: "AI Search Optimization - Dominate AI Search Results",
    description: "Future-proof your business with AI search optimization that captures traffic from ChatGPT, Perplexity, and emerging platforms.",
    type: "website",
  },
};

const aiPlatforms = [
  {
    name: "ChatGPT Search",
    description: "Optimize content to appear in ChatGPT's search results and citations",
    icon: "🤖",
    traffic: "50M+ monthly searches"
  },
  {
    name: "Perplexity AI",
    description: "Structure content for featured citations in Perplexity's AI-powered search",
    icon: "🔍",
    traffic: "10M+ monthly users"
  },
  {
    name: "Google AI Overviews",
    description: "Position content to appear in Google's AI-generated answer boxes",
    icon: "📊",
    traffic: "Billions of searches"
  },
  {
    name: "Claude Search",
    description: "Format content for optimal visibility in Anthropic's Claude platform",
    icon: "⚡",
    traffic: "Growing rapidly"
  },
  {
    name: "Bing AI Chat",
    description: "Optimize for Microsoft's AI-powered search experience",
    icon: "💬",
    traffic: "100M+ daily users"
  },
  {
    name: "Future AI Platforms",
    description: "Prepare your content for emerging AI search technologies",
    icon: "🚀",
    traffic: "Unlimited potential"
  }
];

const optimizationFeatures = [
  {
    title: "Structured Data Implementation",
    description: "Advanced schema markup that AI platforms understand and prioritize for citations",
    benefits: ["Higher citation rates", "Better AI understanding", "Rich result appearances"]
  },
  {
    title: "AI-Friendly Content Format",
    description: "Content structured with clear hierarchies, definitive answers, and citation-worthy information",
    benefits: ["Direct AI citations", "Featured in AI answers", "Authority establishment"]
  },
  {
    title: "Question-Answer Optimization",
    description: "Content optimized around the questions your customers ask AI platforms",
    benefits: ["Capture voice searches", "Answer-box appearances", "Conversational traffic"]
  },
  {
    title: "Entity-Based SEO",
    description: "Content structured around business entities, locations, and industry concepts AI platforms recognize",
    benefits: ["Enhanced relevance", "Local AI visibility", "Topic authority"]
  },
  {
    title: "Citation-Worthy Content",
    description: "Authoritative, fact-based content that AI platforms trust and cite as sources",
    benefits: ["Increased backlinks", "AI platform trust", "Thought leadership"]
  },
  {
    title: "Multi-Platform Optimization",
    description: "Content optimized for all current and emerging AI search platforms simultaneously",
    benefits: ["Comprehensive coverage", "Future-proof strategy", "Maximum reach"]
  }
];

const beforeAfterComparison = {
  before: {
    title: "Traditional SEO Approach",
    points: [
      "Content optimized only for Google's traditional algorithm",
      "Basic schema markup implementation",
      "Keyword-focused content structure",
      "Limited voice search optimization",
      "No AI platform consideration",
      "Missing conversational content format"
    ]
  },
  after: {
    title: "AI Search Optimized",
    points: [
      "Content structured for AI platform understanding",
      "Advanced entity-based schema markup",
      "Question-answer content architecture", 
      "Voice and conversational search ready",
      "Optimized for 6+ AI platforms simultaneously",
      "Citation-worthy authoritative content format"
    ]
  }
};

export default function AISearchOptimizationPage() {
  return (
    <div className="bg-beach-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-beach-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="inline-block px-6 py-3 bg-yellow-400/20 text-yellow-300 rounded-full font-semibold mb-8 text-lg">
              🚀 Future-Proof Your Business
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
              AI Search Optimization
            </h1>
            <p className="font-body text-2xl md:text-3xl mb-8 opacity-90 leading-relaxed">
              Dominate ChatGPT, Perplexity, Claude, and emerging AI search platforms while your competitors fall behind
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-beach-gold text-beach-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-beach-gold/90 transition-all shadow-2xl"
              >
                Get AI Search Optimization
              </Link>
              <Link
                href="/guides/ai-search-optimization-guide"
                className="bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all"
              >
                Learn About AI SEO
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-white/90 font-medium text-lg">
                🔥 <strong>First-Mover Advantage:</strong> AI search is exploding with 50M+ monthly ChatGPT searches. 
                Get positioned now before your competition catches on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-6">
                Dominate Every AI Search Platform
              </h2>
              <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
                While competitors focus only on traditional Google SEO, we optimize your content 
                for the AI platforms that are capturing massive search volume.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiPlatforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-premium-hover border border-beach-light/20 group hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{platform.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-beach-teal mb-3">
                    {platform.name}
                  </h3>
                  <p className="font-body text-beach-teal/70 mb-4 leading-relaxed">
                    {platform.description}
                  </p>
                  <div className="bg-beach-gold/10 text-beach-gold px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    {platform.traffic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-beach-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-6">
                Comprehensive AI Search Optimization
              </h2>
              <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
                Our AI search optimization goes far beyond basic SEO. We restructure your entire 
                content strategy for maximum AI platform visibility.
              </p>
            </div>

            <div className="space-y-12">
              {optimizationFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-premium-hover">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <h3 className="font-heading text-2xl font-bold text-beach-teal mb-4">
                        {feature.title}
                      </h3>
                      <p className="font-body text-beach-teal/70 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="bg-beach-light/20 rounded-2xl p-6">
                      <h4 className="font-heading text-lg font-bold text-beach-blue mb-4">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span className="font-body text-beach-teal/80 text-sm">{benefit}</span>
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

      {/* Before vs After */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-6">
                The AI Optimization Difference
              </h2>
              <p className="font-body text-xl text-beach-teal/80">
                See how AI search optimization transforms your content strategy and results
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
                <h3 className="font-heading text-2xl font-bold text-red-800 mb-6 text-center">
                  {beforeAfterComparison.before.title}
                </h3>
                <ul className="space-y-4">
                  {beforeAfterComparison.before.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 text-xl font-bold">✗</span>
                      <span className="font-body text-red-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-3xl p-8">
                <h3 className="font-heading text-2xl font-bold text-green-800 mb-6 text-center">
                  {beforeAfterComparison.after.title}
                </h3>
                <ul className="space-y-4">
                  {beforeAfterComparison.after.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 text-xl font-bold">✓</span>
                      <span className="font-body text-green-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-beach-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-beach-teal mb-6">
                AI Search Optimization for Every Industry
              </h2>
              <p className="font-body text-xl text-beach-teal/80">
                Specialized AI optimization strategies for different business types
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/industries/restaurant-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Restaurant AI SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Optimize for "best restaurants near me" AI searches
                </p>
              </Link>

              <Link href="/industries/dental-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Dental Practice AI SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Capture dental questions asked to AI platforms
                </p>
              </Link>

              <Link href="/industries/legal-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Legal Firm AI SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Dominate legal advice searches on AI platforms
                </p>
              </Link>

              <Link href="/industries/real-estate-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Real Estate AI SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Optimize for property-related AI searches
                </p>
              </Link>

              <Link href="/industries/medical-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Medical Practice AI SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Capture health-related questions on AI platforms
                </p>
              </Link>

              <Link href="/industries/professional-services-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                  Professional Services AI SEO →
                </h3>
                <p className="font-body text-beach-teal/70 text-sm">
                  Optimize for business service AI searches
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-beach-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get Ahead of the AI Revolution
            </h2>
            <p className="font-body text-xl mb-8 opacity-90 leading-relaxed">
              AI search is growing exponentially. Position your business now to capture 
              this massive traffic opportunity before your competitors realize what's happening.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-beach-gold mb-2">50M+</div>
                  <div className="text-white/80">Monthly ChatGPT Searches</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-beach-gold mb-2">10M+</div>
                  <div className="text-white/80">Perplexity Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-beach-gold mb-2">Zero</div>
                  <div className="text-white/80">Competitors Optimizing</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-beach-gold text-beach-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-beach-gold/90 transition-all shadow-2xl"
              >
                Start AI Search Optimization
              </Link>
              <Link
                href="/services/complete-seo-websites"
                className="bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all"
              >
                Complete SEO Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}