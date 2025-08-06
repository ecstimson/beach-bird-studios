import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Beach Bird Studios - Premium SEO & Website Company",
  description: "Learn about Beach Bird Studios' mission to deliver complete SEO websites that dominate search results, AI platforms, and local maps for small-medium businesses.",
};

export default function AboutPage() {
  return (
    <div className="bg-beach-white">
      <section className="py-24 bg-gradient-to-br from-beach-light to-beach-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-beach-gold/20 text-beach-gold rounded-full font-semibold mb-6">
              About Beach Bird Studios
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-beach-teal mb-6">
              We Build Websites That <span className="text-beach-blue">Dominate Search</span>
            </h1>
            <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
              Beach Bird Studios specializes in creating complete SEO websites for small-medium businesses. 
              We don&apos;t just optimize—we build from the ground up with search domination in mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-beach-teal mb-6">
                Our Mission
              </h2>
              <p className="font-body text-lg text-beach-teal/80 mb-6">
                Traditional SEO takes years to show results. AI search is changing everything. 
                Local competition is fiercer than ever. Business owners need a solution that works 
                across all these fronts—immediately.
              </p>
              <p className="font-body text-lg text-beach-teal/80 mb-8">
                We deliver years of SEO work in one complete website build, giving you everything 
                needed to outrank competitors, dominate AI search results, and maximize your 
                Google Business Profile visibility.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl text-beach-blue mb-2">500+</div>
                  <div className="text-sm text-beach-teal/70">Websites Built</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl text-beach-gold mb-2">98%</div>
                  <div className="text-sm text-beach-teal/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-premium">
                <div className="text-beach-gold text-3xl mb-3">🎯</div>
                <h3 className="font-heading text-xl font-semibold text-beach-teal mb-2">
                  Traditional Search Excellence
                </h3>
                <p className="font-body text-beach-teal/70">
                  Complete website architecture with 20-50 pages targeting every service and location you serve
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-premium">
                <div className="text-beach-gold text-3xl mb-3">🤖</div>
                <h3 className="font-heading text-xl font-semibold text-beach-teal mb-2">
                  AI-First Content Strategy
                </h3>
                <p className="font-body text-beach-teal/70">
                  Content structured for ChatGPT, Perplexity, and emerging AI platforms to recommend your business
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-premium">
                <div className="text-beach-gold text-3xl mb-3">📍</div>
                <h3 className="font-heading text-xl font-semibold text-beach-teal mb-2">
                  Local Market Domination
                </h3>
                <p className="font-body text-beach-teal/70">
                  Google Business Profile optimization, review management, and citation building for maximum local visibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-beach-teal mb-12">
            Why Choose Beach Bird Studios?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-heading text-xl font-semibold text-beach-teal mb-3">
                Fast Results
              </h3>
              <p className="font-body text-beach-teal/70">
                See ranking improvements within weeks, not months. Our complete approach delivers immediate impact.
              </p>
            </div>
            
            <div className="p-8">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-heading text-xl font-semibold text-beach-teal mb-3">
                Proven Process
              </h3>
              <p className="font-body text-beach-teal/70">
                Refined methodology from 500+ successful website builds across diverse industries and markets.
              </p>
            </div>
            
            <div className="p-8">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="font-heading text-xl font-semibold text-beach-teal mb-3">
                Beautiful Design
              </h3>
              <p className="font-body text-beach-teal/70">
                SEO-optimized websites that look professional and convert visitors into customers.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-beach-blue to-beach-teal p-12 rounded-3xl text-white">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Ready to Dominate Your Market?
            </h3>
            <p className="font-body text-xl mb-8 opacity-90">
              Get a complete SEO website that works across traditional search, AI platforms, and local maps
            </p>
            <a
              href="/contact"
              className="inline-block bg-beach-gold text-beach-teal px-10 py-4 rounded-lg font-semibold text-lg hover:bg-beach-gold/90 transition-all shadow-premium"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}