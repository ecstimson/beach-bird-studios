import type { Metadata } from "next";
import Link from "next/link";
import InternalLinkingHub from "@/components/InternalLinkingHub";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Local SEO Services - Dominate 'Near Me' Searches | Beach Bird Studios",
  description: "Complete local SEO services that dominate 'near me' searches, Google Business Profile optimization, local citations, review management, and map pack rankings.",
  keywords: "local seo services, google business profile, map pack seo, local search optimization, near me searches, local citations, review management",
  openGraph: {
    title: "Local SEO Services - Dominate Local Search",
    description: "Complete local SEO solutions that put you first when customers search for businesses like yours nearby.",
    type: "website",
  },
};

export default function LocalSEOPage() {
  return (
    <>
      <SchemaMarkup 
        type="service"
        data={{
          name: "Local SEO Services",
          description: "Complete local SEO services including Google Business Profile optimization, local citations, review management, and map pack domination.",
          url: "https://beachbirdstudios.com/services/local-seo"
        }}
      />
      <div className="bg-beach-white min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <span className="inline-block px-6 py-3 bg-emerald-400/20 text-emerald-200 rounded-full font-semibold mb-8 text-lg">
                =Í Local SEO Specialists
              </span>
              <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Local SEO Services
              </h1>
              <p className="font-body text-2xl md:text-3xl mb-8 opacity-90 leading-relaxed">
                Dominate "near me" searches and be the first business customers find in your local area
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link
                  href="/contact"
                  className="bg-beach-gold text-beach-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-beach-gold/90 transition-all shadow-2xl"
                >
                  Start Local SEO Campaign
                </Link>
                <Link
                  href="/seo-research"
                  className="bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all"
                >
                  Free Local SEO Analysis
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl font-bold text-beach-teal mb-6">
                  Are Local Customers Finding Your Competitors Instead?
                </h2>
                <p className="font-body text-xl text-beach-teal/80">
                  78% of mobile local searches result in offline purchases within 24 hours. 
                  If you're not visible, you're losing customers every single day.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200 text-center">
                  <div className="text-4xl mb-4">=</div>
                  <h3 className="font-heading text-lg font-bold text-red-800 mb-2">
                    Invisible in Local Search
                  </h3>
                  <p className="text-red-700 text-sm">
                    Your business doesn't show up when customers search for services "near me"
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200 text-center">
                  <div className="text-4xl mb-4">=ñ</div>
                  <h3 className="font-heading text-lg font-bold text-red-800 mb-2">
                    Poor Google Business Profile
                  </h3>
                  <p className="text-red-700 text-sm">
                    Incomplete or unoptimized Google listing loses customers to competitors
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200 text-center">
                  <div className="text-4xl mb-4">P</div>
                  <h3 className="font-heading text-lg font-bold text-red-800 mb-2">
                    Negative Reviews Impact
                  </h3>
                  <p className="text-red-700 text-sm">
                    Bad reviews and poor reputation management drives customers away
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-beach-light/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl font-bold text-beach-teal mb-6">
                  Complete Local SEO Solutions
                </h2>
                <p className="font-body text-xl text-beach-teal/80">
                  Everything you need to dominate local search results and capture more customers
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-premium-hover">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-beach-teal mb-4">
                        <Æ Google Business Profile Mastery
                      </h3>
                      <p className="font-body text-beach-teal/70 mb-4">
                        Complete optimization of your Google Business Profile for maximum local visibility and customer engagement.
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Professional photo optimization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Regular posts and updates</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Q&A management and optimization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Category and attribute optimization</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Expected Results:</h4>
                      <div className="text-2xl font-bold text-green-700 mb-1">300%+</div>
                      <div className="text-green-600 text-sm">Increase in local visibility</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-premium-hover">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-beach-teal mb-4">
                        =Í Local Citation Building
                      </h3>
                      <p className="font-body text-beach-teal/70 mb-4">
                        Build authority and consistency across 50+ local directories and citation sources.
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>NAP consistency across all platforms</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Industry-specific directory submissions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Local chamber and association listings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Geographic-specific citations</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Citations Built:</h4>
                      <div className="text-2xl font-bold text-blue-700 mb-1">50+</div>
                      <div className="text-blue-600 text-sm">High-authority local directories</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-premium-hover">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-beach-teal mb-4">
                        P Review Management System
                      </h3>
                      <p className="font-body text-beach-teal/70 mb-4">
                        Systematic approach to generating positive reviews and managing your online reputation.
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Automated review request campaigns</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Professional review response service</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Reputation monitoring and alerts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500"></span>
                          <span>Review response templates and training</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">Average Rating:</h4>
                      <div className="text-2xl font-bold text-yellow-700 mb-1">4.7+</div>
                      <div className="text-yellow-600 text-sm">Stars across all platforms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations We Serve */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold text-beach-teal mb-4">
                  Local SEO Services by Location
                </h2>
                <p className="font-body text-beach-teal/70">
                  Specialized local SEO strategies for major markets
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/locations/miami-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                  <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                    Miami Local SEO ’
                  </h3>
                  <p className="font-body text-beach-teal/70 text-sm">
                    Dominate Miami's competitive local market
                  </p>
                </Link>

                <Link href="/locations/orlando-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                  <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                    Orlando Local SEO ’
                  </h3>
                  <p className="font-body text-beach-teal/70 text-sm">
                    Capture tourist and resident traffic
                  </p>
                </Link>

                <Link href="/locations/charleston-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                  <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                    Charleston Local SEO ’
                  </h3>
                  <p className="font-body text-beach-teal/70 text-sm">
                    Historic city local search domination
                  </p>
                </Link>

                <Link href="/locations/durham-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                  <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                    Durham Local SEO ’
                  </h3>
                  <p className="font-body text-beach-teal/70 text-sm">
                    Research Triangle area optimization
                  </p>
                </Link>

                <Link href="/industries/restaurant-seo" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                  <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                    Restaurant Local SEO ’
                  </h3>
                  <p className="font-body text-beach-teal/70 text-sm">
                    Fill tables with local search traffic
                  </p>
                </Link>

                <Link href="/services/complete-seo-websites" className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all group">
                  <h3 className="font-heading text-lg font-bold text-beach-teal mb-2 group-hover:text-beach-blue">
                    Complete SEO Packages ’
                  </h3>
                  <p className="font-body text-beach-teal/70 text-sm">
                    Full website + local SEO solutions
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinkingHub 
          currentPage="/services/local-seo" 
          serviceType="local-seo"
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Ready to Dominate Local Search?
              </h2>
              <p className="font-body text-xl mb-8 opacity-90 leading-relaxed">
                Stop losing customers to competitors who show up first in local searches. 
                Get complete local SEO services that put you on the map.
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-beach-gold mb-2">78%</div>
                    <div className="text-white/80">of local searches result in purchases</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-beach-gold mb-2">50%</div>
                    <div className="text-white/80">of consumers visit stores within 24 hours</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-beach-gold mb-2">#1</div>
                    <div className="text-white/80">Google result gets 33% of clicks</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-beach-gold text-beach-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-beach-gold/90 transition-all shadow-2xl"
                >
                  Start Local SEO Campaign
                </Link>
                <Link
                  href="/seo-research"
                  className="bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all"
                >
                  Free Local SEO Analysis
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}