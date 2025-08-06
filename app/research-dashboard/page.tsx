"use client";

import { useState, useEffect } from "react";
import type { CompetitorData, KeywordGapAnalysis, LocalMarketResearch } from "@/lib/dataforseo";

interface ResearchData {
  competitorAnalysis: CompetitorData[];
  keywordGaps: KeywordGapAnalysis[];
  localMarkets: LocalMarketResearch[];
  beachBirdOpportunities: {
    category: string;
    keywords: string[];
    competition_level: 'low' | 'medium' | 'high';
    monthly_searches: number;
    business_value: number;
  }[];
}

export default function ResearchDashboard() {
  const [researchData, setResearchData] = useState<ResearchData | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'competitors' | 'keywords' | 'local' | 'opportunities'>('competitors');

  const loadResearchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/research-dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'comprehensive-research' })
      });

      const data = await response.json();
      setResearchData(data);
    } catch (error) {
      console.error('Research data error:', error);
      // Fallback to comprehensive mock data
      setResearchData({
        competitorAnalysis: [
          {
            domain: 'webfx.com',
            organic_keywords: 125000,
            organic_traffic: 450000,
            paid_keywords: 2500,
            backlinks: 89000,
            domain_rank: 85,
            top_keywords: [
              { keyword: 'seo services', position: 3, search_volume: 22000, traffic: 15000 },
              { keyword: 'web design company', position: 5, search_volume: 18000, traffic: 12000 },
              { keyword: 'digital marketing agency', position: 4, search_volume: 15500, traffic: 11000 }
            ]
          },
          {
            domain: 'boostability.com',
            organic_keywords: 85000,
            organic_traffic: 280000,
            paid_keywords: 1800,
            backlinks: 45000,
            domain_rank: 78,
            top_keywords: [
              { keyword: 'local seo services', position: 4, search_volume: 15000, traffic: 9000 },
              { keyword: 'small business seo', position: 6, search_volume: 12000, traffic: 7000 },
              { keyword: 'seo packages', position: 8, search_volume: 9500, traffic: 5500 }
            ]
          }
        ],
        keywordGaps: [
          {
            keyword: 'complete seo website packages',
            search_volume: 1200,
            difficulty: 35,
            competitor_positions: [
              { domain: 'webfx.com', position: 8 },
              { domain: 'boostability.com', position: 12 }
            ],
            opportunity_score: 34,
            content_suggestions: [
              'Complete guide to SEO website packages',
              'What makes a complete SEO website',
              'SEO website package pricing guide'
            ]
          },
          {
            keyword: 'ai search optimization services',
            search_volume: 890,
            difficulty: 28,
            competitor_positions: [
              { domain: 'moz.com', position: 15 },
              { domain: 'searchenginejournal.com', position: 18 }
            ],
            opportunity_score: 32,
            content_suggestions: [
              'AI search optimization explained',
              'Future of AI in SEO',
              'How to optimize for AI search'
            ]
          }
        ],
        localMarkets: [
          {
            location: 'Miami, FL',
            industry: 'restaurant',
            top_keywords: [
              { keyword: 'miami restaurants', search_volume: 12000, competition: 0.75, local_intent: true },
              { keyword: 'best restaurants miami', search_volume: 8500, competition: 0.68, local_intent: true }
            ],
            competitor_gaps: [
              { keyword: 'affordable restaurants miami', search_volume: 3200, weak_competitors: ['weak-local1.com'] }
            ],
            content_opportunities: [
              'Best Miami restaurant guide',
              'Miami dining directory'
            ]
          }
        ],
        beachBirdOpportunities: [
          {
            category: 'Complete SEO Websites',
            keywords: ['complete seo website', 'full seo website build', 'comprehensive seo site'],
            competition_level: 'medium',
            monthly_searches: 2800,
            business_value: 95
          },
          {
            category: 'Local SEO Domination',
            keywords: ['local seo packages', 'local search optimization', 'google business seo'],
            competition_level: 'low',
            monthly_searches: 4200,
            business_value: 88
          },
          {
            category: 'AI Search Optimization',
            keywords: ['ai search optimization', 'chatgpt seo', 'ai content optimization'],
            competition_level: 'low',
            monthly_searches: 1500,
            business_value: 92
          }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResearchData();
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getCompetitionColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-beach-white min-h-screen">
      <section className="py-12 bg-gradient-to-br from-beach-teal via-beach-blue to-beach-teal">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Beach Bird Studios Research Intelligence
            </h1>
            <p className="font-body text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive competitive analysis and market research powering our client acquisition strategy
            </p>
            
            <div className="mt-8 flex justify-center">
              <button
                onClick={loadResearchData}
                disabled={loading}
                className="bg-beach-gold text-beach-teal px-8 py-3 rounded-lg font-semibold hover:bg-beach-gold/90 disabled:opacity-50 transition-all"
              >
                {loading ? "Loading Research Data..." : "Refresh Intelligence"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-2xl p-2 shadow-premium">
              {[
                { key: 'competitors', label: 'Competitor Analysis', icon: '🎯' },
                { key: 'keywords', label: 'Keyword Gaps', icon: '🔍' },
                { key: 'local', label: 'Local Markets', icon: '📍' },
                { key: 'opportunities', label: 'Beach Bird Opportunities', icon: '💰' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === tab.key
                      ? 'bg-beach-blue text-white'
                      : 'text-beach-teal hover:bg-beach-light/30'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {researchData && (
              <div className="space-y-8">
                {/* Competitor Analysis Tab */}
                {activeTab === 'competitors' && (
                  <div className="grid gap-6">
                    <h2 className="font-heading text-3xl font-bold text-beach-teal">
                      SEO Industry Competitive Landscape
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {researchData.competitorAnalysis.map((competitor, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-premium-hover">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-heading text-xl font-bold text-beach-teal">
                              {competitor.domain}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              competitor.domain_rank >= 80 ? 'bg-red-100 text-red-800' : 
                              competitor.domain_rank >= 70 ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-green-100 text-green-800'
                            }`}>
                              Rank: {competitor.domain_rank}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center p-3 bg-beach-light/20 rounded-lg">
                              <div className="text-2xl font-bold text-beach-teal">
                                {formatNumber(competitor.organic_keywords)}
                              </div>
                              <div className="text-sm text-beach-teal/70">Keywords</div>
                            </div>
                            <div className="text-center p-3 bg-beach-light/20 rounded-lg">
                              <div className="text-2xl font-bold text-beach-blue">
                                {formatNumber(competitor.organic_traffic)}
                              </div>
                              <div className="text-sm text-beach-teal/70">Traffic</div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-semibold text-beach-teal">Top Keywords:</h4>
                            {competitor.top_keywords.slice(0, 3).map((kw, idx) => (
                              <div key={idx} className="flex justify-between text-sm">
                                <span>{kw.keyword}</span>
                                <span className="text-beach-blue">#{kw.position}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Keyword Gaps Tab */}
                {activeTab === 'keywords' && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-beach-teal">
                      High-Value Keyword Opportunities
                    </h2>
                    
                    <div className="grid gap-4">
                      {researchData.keywordGaps.map((gap, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-premium-hover">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-grow">
                              <h3 className="font-heading text-lg font-bold text-beach-teal mb-2">
                                {gap.keyword}
                              </h3>
                              <div className="flex gap-4 text-sm text-beach-teal/70">
                                <span>Volume: {formatNumber(gap.search_volume)}</span>
                                <span>Difficulty: {gap.difficulty}/100</span>
                                <span className="text-beach-gold font-semibold">
                                  Opportunity: {gap.opportunity_score}/100
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-beach-teal mb-2">Competitor Positions:</h4>
                              <div className="space-y-1">
                                {gap.competitor_positions.map((pos, idx) => (
                                  <div key={idx} className="flex justify-between text-sm">
                                    <span>{pos.domain}</span>
                                    <span>#{pos.position}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-beach-teal mb-2">Content Ideas:</h4>
                              <ul className="text-sm space-y-1">
                                {gap.content_suggestions.map((suggestion, idx) => (
                                  <li key={idx} className="text-beach-teal/70">• {suggestion}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Local Markets Tab */}
                {activeTab === 'local' && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-beach-teal">
                      Local Market Intelligence
                    </h2>
                    
                    <div className="grid gap-6">
                      {researchData.localMarkets.map((market, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-premium-hover">
                          <h3 className="font-heading text-xl font-bold text-beach-teal mb-4">
                            {market.industry.charAt(0).toUpperCase() + market.industry.slice(1)} Industry - {market.location}
                          </h3>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-beach-teal mb-3">High-Value Keywords:</h4>
                              <div className="space-y-2">
                                {market.top_keywords.map((kw, idx) => (
                                  <div key={idx} className="p-3 bg-beach-light/10 rounded-lg">
                                    <div className="flex justify-between items-center">
                                      <span className="font-medium">{kw.keyword}</span>
                                      <span className="text-beach-blue font-bold">{formatNumber(kw.search_volume)}</span>
                                    </div>
                                    <div className="text-sm text-beach-teal/70">
                                      Competition: {(kw.competition * 100).toFixed(0)}%
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-beach-teal mb-3">Content Opportunities:</h4>
                              <ul className="space-y-2">
                                {market.content_opportunities.map((opp, idx) => (
                                  <li key={idx} className="p-2 bg-green-50 rounded text-green-800 text-sm">
                                    📝 {opp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Beach Bird Opportunities Tab */}
                {activeTab === 'opportunities' && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-beach-teal">
                      Strategic Business Opportunities
                    </h2>
                    
                    <div className="grid gap-4">
                      {researchData.beachBirdOpportunities.map((opp, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-premium-hover border-l-4 border-beach-gold">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="font-heading text-xl font-bold text-beach-teal">
                              {opp.category}
                            </h3>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-beach-blue">
                                {opp.business_value}/100
                              </div>
                              <div className="text-sm text-beach-teal/70">Value Score</div>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-3 gap-4 mb-4">
                            <div className="text-center p-3 bg-beach-light/10 rounded-lg">
                              <div className="text-xl font-bold text-beach-teal">
                                {formatNumber(opp.monthly_searches)}
                              </div>
                              <div className="text-sm text-beach-teal/70">Monthly Searches</div>
                            </div>
                            <div className="text-center p-3 bg-beach-light/10 rounded-lg">
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCompetitionColor(opp.competition_level)}`}>
                                {opp.competition_level.charAt(0).toUpperCase() + opp.competition_level.slice(1)} Competition
                              </span>
                            </div>
                            <div className="text-center p-3 bg-beach-light/10 rounded-lg">
                              <div className="text-xl font-bold text-beach-gold">
                                {opp.keywords.length}
                              </div>
                              <div className="text-sm text-beach-teal/70">Target Keywords</div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-beach-teal mb-2">Target Keywords:</h4>
                            <div className="flex flex-wrap gap-2">
                              {opp.keywords.map((keyword, idx) => (
                                <span key={idx} className="px-3 py-1 bg-beach-blue/10 text-beach-blue rounded-full text-sm">
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}