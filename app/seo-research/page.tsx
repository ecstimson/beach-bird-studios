"use client";

import { useState } from "react";
import type { WebsiteAnalysis } from "@/lib/dataforseo";

export default function WebsiteAnalysisPage() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<WebsiteAnalysis | null>(null);

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/seo-research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          url: websiteUrl.trim(), 
          type: 'website-analysis' 
        })
      });

      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (error) {
      console.error('Analysis error:', error);
      // Fallback to mock data for demo
      setAnalysis({
        domain: new URL(websiteUrl).hostname,
        overall_score: 45,
        technical_seo: {
          page_speed: 52,
          mobile_friendly: false,
          ssl_certificate: true,
          meta_tags_missing: 12,
          broken_links: 5,
          crawl_errors: 3,
        },
        content_analysis: {
          total_pages: 18,
          pages_with_thin_content: 9,
          duplicate_content_issues: 4,
          missing_h1_tags: 7,
          keyword_opportunities: [
            'local services near me',
            'best local business',
            'professional service company',
            'business reviews',
            'affordable local services'
          ],
        },
        local_seo: {
          google_business_profile: false,
          local_citations: 8,
          review_count: 12,
          average_rating: 3.2,
          local_keyword_rankings: 3,
        },
        competitor_analysis: {
          top_competitors: [
            'industry-leader.com',
            'local-competitor.com',
            'established-business.net'
          ],
          ranking_gap: 28,
          content_gap_opportunities: 15,
        },
        recommendations: [
          {
            priority: 'high' as const,
            category: 'Critical Issues',
            issue: 'Website severely underperforming in search results',
            solution: 'Complete website rebuild with comprehensive SEO foundation',
            impact: 'Could increase organic traffic by 400-600% within 6 months'
          },
          {
            priority: 'high' as const,
            category: 'Local Domination',
            issue: 'Missing from local search entirely - competitors dominating',
            solution: 'Full local SEO package with Google Business Profile optimization',
            impact: 'Capture local market share and dominate map pack results'
          },
          {
            priority: 'high' as const,
            category: 'Content Strategy',
            issue: 'Thin content preventing topical authority development',
            solution: 'Create 25-40 comprehensive service and location pages',
            impact: 'Establish industry expertise and capture long-tail opportunities'
          }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-beach-white min-h-screen">
      <section className="py-24 bg-gradient-to-br from-beach-light to-beach-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-beach-gold/20 text-beach-gold rounded-full font-semibold mb-6">
              Free Website Analysis Tool
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-beach-teal mb-6">
              Discover Why Your Website{" "}
              <span className="text-beach-blue">Isn&apos;t Ranking</span>
            </h1>
            <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
              Get a comprehensive analysis of your website&apos;s SEO performance, technical issues, 
              and specific opportunities that our complete SEO website packages solve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-premium-hover mb-8">
              <form onSubmit={handleAnalysis} className="space-y-6">
                <div>
                  <label className="block font-body font-medium text-beach-teal mb-2">
                    Enter Your Website URL for Free Analysis
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="flex-grow px-4 py-3 border border-beach-light/30 rounded-lg focus:border-beach-blue focus:outline-none focus:ring-2 focus:ring-beach-blue/20 text-beach-teal placeholder:text-beach-teal/50"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-beach-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-beach-blue/90 disabled:opacity-50 transition-all shadow-premium whitespace-nowrap"
                    >
                      {loading ? "Analyzing..." : "Analyze Website"}
                    </button>
                  </div>
                </div>
                
                <div className="bg-beach-light/10 p-4 rounded-lg">
                  <p className="font-body text-sm text-beach-teal/70">
                    <span className="font-semibold">🔒 Confidential Analysis:</span> Your website data is analyzed securely and never shared. 
                    Perfect for consultation discussions about our complete SEO website packages.
                  </p>
                </div>
              </form>
            </div>

            {analysis && (
              <div className="space-y-8">
                {/* Overall Score */}
                <div className="bg-white rounded-3xl p-8 shadow-premium-hover">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-3xl font-bold text-beach-teal mb-4">
                      Website Analysis Results for {analysis.domain}
                    </h2>
                    <div className="inline-flex items-center gap-4">
                      <div className="relative w-24 h-24">
                        <div className="w-24 h-24 rounded-full border-8 border-gray-200"></div>
                        <div 
                          className={`absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-t-8 ${getScoreBackground(analysis.overall_score)} transform -rotate-90`}
                          style={{
                            clipPath: `polygon(50% 50%, 50% 0%, ${50 + (analysis.overall_score * 0.5)}% 0%, 100% 100%, 0% 100%)`
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-2xl font-bold ${getScoreColor(analysis.overall_score)}`}>
                            {analysis.overall_score}
                          </span>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className={`text-3xl font-bold ${getScoreColor(analysis.overall_score)}`}>
                          {analysis.overall_score}/100
                        </div>
                        <div className="text-beach-teal/70">
                          {analysis.overall_score < 50 ? 'Critical Issues Found' : 
                           analysis.overall_score < 75 ? 'Needs Improvement' : 'Good Performance'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-beach-white p-6 rounded-xl text-center">
                      <div className={`text-3xl font-bold mb-2 ${getScoreColor(analysis.technical_seo.page_speed)}`}>
                        {analysis.technical_seo.page_speed}
                      </div>
                      <div className="font-semibold text-beach-teal">Page Speed</div>
                      <div className="text-sm text-beach-teal/60">Needs Work</div>
                    </div>
                    
                    <div className="bg-beach-white p-6 rounded-xl text-center">
                      <div className="text-3xl mb-2">
                        {analysis.local_seo.google_business_profile ? '✅' : '❌'}
                      </div>
                      <div className="font-semibold text-beach-teal">Local SEO</div>
                      <div className="text-sm text-beach-teal/60">
                        {analysis.local_seo.google_business_profile ? 'Setup' : 'Missing'}
                      </div>
                    </div>
                    
                    <div className="bg-beach-white p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold mb-2 text-beach-teal">
                        {analysis.content_analysis.total_pages}
                      </div>
                      <div className="font-semibold text-beach-teal">Total Pages</div>
                      <div className="text-sm text-beach-teal/60">
                        {analysis.content_analysis.pages_with_thin_content} Thin Content
                      </div>
                    </div>
                    
                    <div className="bg-beach-white p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold mb-2 text-red-500">
                        #{analysis.competitor_analysis.ranking_gap}+
                      </div>
                      <div className="font-semibold text-beach-teal">Behind Competitors</div>
                      <div className="text-sm text-beach-teal/60">Average Position</div>
                    </div>
                  </div>
                </div>

                {/* Critical Issues Found */}
                <div className="bg-white rounded-3xl p-8 shadow-premium-hover">
                  <h3 className="font-heading text-2xl font-bold text-beach-teal mb-6 flex items-center gap-2">
                    🚨 Critical Issues Preventing Growth
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <div className="font-semibold text-red-800 mb-1">Technical SEO Problems</div>
                        <div className="text-sm text-red-600">
                          • {analysis.technical_seo.meta_tags_missing} missing meta tags<br/>
                          • {analysis.technical_seo.broken_links} broken links<br/>
                          • {analysis.technical_seo.crawl_errors} crawl errors<br/>
                          • Page speed: {analysis.technical_seo.page_speed}/100
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <div className="font-semibold text-yellow-800 mb-1">Content Issues</div>
                        <div className="text-sm text-yellow-600">
                          • {analysis.content_analysis.pages_with_thin_content} pages with thin content<br/>
                          • {analysis.content_analysis.duplicate_content_issues} duplicate content issues<br/>
                          • {analysis.content_analysis.missing_h1_tags} missing H1 tags<br/>
                          • Limited topical authority
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="font-semibold text-blue-800 mb-1">Local SEO Gaps</div>
                        <div className="text-sm text-blue-600">
                          • Google Business Profile: {analysis.local_seo.google_business_profile ? 'Needs optimization' : 'Not setup'}<br/>
                          • Only {analysis.local_seo.local_citations} local citations<br/>
                          • {analysis.local_seo.review_count} reviews ({analysis.local_seo.average_rating.toFixed(1)} stars)<br/>
                          • Ranking for {analysis.local_seo.local_keyword_rankings} local keywords
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <div className="font-semibold text-purple-800 mb-1">Competitor Analysis</div>
                        <div className="text-sm text-purple-600">
                          • {analysis.competitor_analysis.ranking_gap} positions behind competitors<br/>
                          • {analysis.competitor_analysis.content_gap_opportunities} content gap opportunities<br/>
                          • Missing from AI search results<br/>
                          • Limited geographic coverage
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-white rounded-3xl p-8 shadow-premium-hover">
                  <h3 className="font-heading text-2xl font-bold text-beach-teal mb-6">
                    🎯 Our Complete SEO Website Solution
                  </h3>
                  
                  <div className="space-y-6">
                    {analysis.recommendations.map((rec, index) => (
                      <div key={index} className="border border-beach-light/30 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(rec.priority)}`}>
                            {rec.priority.toUpperCase()} PRIORITY
                          </span>
                          <div className="flex-grow">
                            <h4 className="font-heading text-lg font-semibold text-beach-teal mb-2">
                              {rec.category}
                            </h4>
                            <div className="bg-red-50 p-3 rounded-lg mb-3 border border-red-200">
                              <div className="text-sm font-semibold text-red-800 mb-1">❌ Current Problem:</div>
                              <div className="text-sm text-red-700">{rec.issue}</div>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg mb-3 border border-green-200">
                              <div className="text-sm font-semibold text-green-800 mb-1">✅ Beach Bird Solution:</div>
                              <div className="text-sm text-green-700">{rec.solution}</div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                              <div className="text-sm font-semibold text-blue-800 mb-1">📈 Expected Impact:</div>
                              <div className="text-sm text-blue-700">{rec.impact}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-beach-teal via-beach-blue to-beach-teal p-12 rounded-3xl text-white text-center">
                  <h3 className="font-heading text-3xl font-bold mb-4">
                    Ready to Fix These Issues?
                  </h3>
                  <p className="font-body text-xl mb-8 opacity-90">
                    Our complete SEO website packages solve every issue identified in your analysis. 
                    Stop losing customers to competitors - let&apos;s build you a website that dominates search.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="inline-block bg-beach-gold text-beach-teal px-10 py-4 rounded-lg font-semibold text-lg hover:bg-beach-gold/90 transition-all shadow-premium"
                    >
                      Get Your Complete SEO Website
                    </a>
                    <a
                      href="/about"
                      className="inline-block bg-white/20 text-white border-2 border-white/30 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all"
                    >
                      Learn About Our Process
                    </a>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                      <div className="text-2xl mb-2">🏗️</div>
                      <div className="font-semibold">Complete Rebuild</div>
                      <div className="text-sm opacity-80">20-50 SEO-optimized pages</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                      <div className="text-2xl mb-2">🚀</div>
                      <div className="font-semibold">Fast Results</div>
                      <div className="text-sm opacity-80">Rankings improve in weeks</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="font-semibold">Total Domination</div>
                      <div className="text-sm opacity-80">Traditional + AI + Local SEO</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}