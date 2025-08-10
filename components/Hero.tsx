import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-beach-blue via-beach-light to-beach-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-beach-blue/20 to-beach-gold/10"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-beach-gold/20 text-beach-teal px-4 py-2 rounded-full">
            <span className="text-beach-gold text-2xl">🏖️</span>
            <span className="font-semibold">Beach Bird Studios</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-beach-teal leading-tight">
            Dominate Search, AI Results & Local Maps with{" "}
            <span className="text-beach-blue">Complete SEO Websites</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl mb-10 text-beach-teal/80 max-w-3xl mx-auto">
            Years of SEO work delivered in one complete website with all pages needed to 
            outrank competitors, dominate AI search results, and maximize Google Business Profile visibility
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-beach-blue text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-beach-blue/90 transform hover:scale-105 transition-all shadow-premium"
            >
              Get Your SEO Website
            </Link>
            <Link
              href="/seo-research"
              className="bg-white text-beach-teal border-2 border-beach-blue/20 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-beach-blue/5 transition-all"
            >
              Free SEO Analysis
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur p-4 rounded-lg shadow-sm">
              <div className="text-beach-gold text-3xl mb-2">🎯</div>
              <p className="font-semibold text-beach-teal">Traditional Search</p>
              <p className="text-sm text-beach-teal/70">Google & Bing Domination</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-lg shadow-sm">
              <div className="text-beach-gold text-3xl mb-2">🤖</div>
              <p className="font-semibold text-beach-teal">AI Search Results</p>
              <p className="text-sm text-beach-teal/70">ChatGPT & Perplexity Ready</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-lg shadow-sm">
              <div className="text-beach-gold text-3xl mb-2">📍</div>
              <p className="font-semibold text-beach-teal">Local Visibility</p>
              <p className="text-sm text-beach-teal/70">Google Maps & Reviews</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-beach-white to-transparent"></div>
    </section>
  );
}