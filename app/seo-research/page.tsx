"use client";

import { useState } from "react";
import type { KeywordData, SerpResult } from "@/lib/dataforseo";

export default function SEOResearchPage() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("United States");
  const [loading, setLoading] = useState(false);
  const [keywordData, setKeywordData] = useState<KeywordData[]>([]);
  const [serpResults, setSerpResults] = useState<SerpResult[]>([]);
  const [activeTab, setActiveTab] = useState<"keywords" | "serp">("keywords");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/seo-research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          keyword: keyword.trim(), 
          location,
          type: activeTab 
        })
      });

      const data = await response.json();
      
      if (activeTab === "keywords") {
        setKeywordData(data.keywords || []);
      } else {
        setSerpResults(data.serp || []);
      }
    } catch (error) {
      console.error('Search error:', error);
      // Fallback to mock data for demo
      if (activeTab === "keywords") {
        setKeywordData([
          {
            keyword: keyword.trim(),
            search_volume: Math.floor(Math.random() * 10000) + 100,
            competition: Math.random(),
            cpc: Math.random() * 5 + 0.5,
            difficulty: Math.floor(Math.random() * 100)
          }
        ]);
      } else {
        setSerpResults([
          {
            position: 1,
            title: `Best ${keyword} Services - Professional Solutions`,
            url: `https://example.com/${keyword.replace(/\s+/g, '-').toLowerCase()}`,
            description: `Professional ${keyword} services with years of experience. Get the best solutions from trusted experts.`,
            domain: "example.com"
          },
          {
            position: 2,
            title: `${keyword} Expert - Local Business`,
            url: `https://competitor.com/${keyword.replace(/\s+/g, '-').toLowerCase()}`,
            description: `Local ${keyword} expert serving your area. Quality service and competitive pricing guaranteed.`,
            domain: "competitor.com"
          }
        ]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-beach-white min-h-screen">
      <section className="py-24 bg-gradient-to-br from-beach-light to-beach-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-beach-blue/20 text-beach-blue rounded-full font-semibold mb-6">
              Free SEO Analysis Tool
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-beach-teal mb-6">
              Research Your Market with{" "}
              <span className="text-beach-blue">Professional SEO Data</span>
            </h1>
            <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
              Discover keyword opportunities, analyze competition, and see exactly what it takes 
              to dominate search results in your industry and location.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-premium-hover mb-8">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab("keywords")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "keywords"
                      ? "bg-beach-blue text-white"
                      : "bg-beach-light/30 text-beach-teal hover:bg-beach-light/50"
                  }`}
                >
                  📊 Keyword Research
                </button>
                <button
                  onClick={() => setActiveTab("serp")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "serp"
                      ? "bg-beach-blue text-white"
                      : "bg-beach-light/30 text-beach-teal hover:bg-beach-light/50"
                  }`}
                >
                  🔍 SERP Analysis
                </button>
              </div>

              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block font-body font-medium text-beach-teal mb-2">
                      {activeTab === "keywords" ? "Target Keyword" : "Search Query"}
                    </label>
                    <input
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      placeholder={activeTab === "keywords" ? "e.g., dental services" : "e.g., best dentist near me"}
                      className="w-full px-4 py-3 border border-beach-light/30 rounded-lg focus:border-beach-blue focus:outline-none focus:ring-2 focus:ring-beach-blue/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-beach-teal mb-2">
                      Location
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-beach-light/30 rounded-lg focus:border-beach-blue focus:outline-none focus:ring-2 focus:ring-beach-blue/20"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-beach-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-beach-blue/90 disabled:opacity-50 transition-all shadow-premium"
                >
                  {loading ? "Analyzing..." : `Analyze ${activeTab === "keywords" ? "Keywords" : "SERP Results"}`}
                </button>
              </form>
            </div>

            {/* Results Section */}
            {(keywordData.length > 0 || serpResults.length > 0) && (
              <div className="bg-white rounded-3xl p-8 shadow-premium-hover">
                {activeTab === "keywords" && keywordData.length > 0 && (
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-beach-teal mb-6">
                      Keyword Analysis Results
                    </h2>
                    <div className="grid gap-4">
                      {keywordData.map((data, index) => (
                        <div key={index} className="bg-beach-white p-6 rounded-xl border border-beach-light/20">
                          <div className="flex flex-wrap items-center justify-between mb-4">
                            <h3 className="font-heading text-xl font-semibold text-beach-teal">
                              {data.keyword}
                            </h3>
                            <span className="px-3 py-1 bg-beach-gold/20 text-beach-gold rounded-full text-sm font-semibold">
                              Difficulty: {data.difficulty}/100
                            </span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-3 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-beach-blue">
                                {data.search_volume.toLocaleString()}
                              </div>
                              <div className="text-sm text-beach-teal/70">Monthly Searches</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-beach-gold">
                                ${data.cpc.toFixed(2)}
                              </div>
                              <div className="text-sm text-beach-teal/70">Cost Per Click</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-beach-teal">
                                {(data.competition * 100).toFixed(0)}%
                              </div>
                              <div className="text-sm text-beach-teal/70">Competition</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg">
                              <div className={`text-2xl font-bold ${
                                data.difficulty < 30 ? 'text-green-500' : 
                                data.difficulty < 70 ? 'text-yellow-500' : 'text-red-500'
                              }`}>
                                {data.difficulty < 30 ? 'Easy' : 
                                 data.difficulty < 70 ? 'Medium' : 'Hard'}
                              </div>
                              <div className="text-sm text-beach-teal/70">SEO Difficulty</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "serp" && serpResults.length > 0 && (
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-beach-teal mb-6">
                      SERP Analysis Results for &quot;{keyword}&quot;
                    </h2>
                    <div className="space-y-4">
                      {serpResults.map((result, index) => (
                        <div key={index} className="bg-beach-white p-6 rounded-xl border border-beach-light/20">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-beach-blue text-white rounded-full flex items-center justify-center font-semibold">
                              {result.position}
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-heading text-lg font-semibold text-beach-teal">
                                  {result.title}
                                </h3>
                                <span className="text-sm text-beach-teal/60">{result.domain}</span>
                              </div>
                              <p className="text-beach-teal/80 mb-2">{result.description}</p>
                              <a 
                                href={result.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-beach-blue hover:underline text-sm"
                              >
                                {result.url}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-beach-blue to-beach-teal p-12 rounded-3xl text-white">
                <h3 className="font-heading text-3xl font-bold mb-4">
                  Ready to Dominate These Search Results?
                </h3>
                <p className="font-body text-xl mb-8 opacity-90">
                  Get a complete SEO website that outranks all these competitors and captures 
                  every search opportunity in your market.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-beach-gold text-beach-teal px-10 py-4 rounded-lg font-semibold text-lg hover:bg-beach-gold/90 transition-all shadow-premium"
                >
                  Get Your Complete SEO Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}