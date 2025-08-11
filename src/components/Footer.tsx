import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white w-full relative">
      <div className="w-full px-8 py-16">
        {/* Company Info */}
        <div className="mb-12">
          <h2 className="text-[#0c3745] text-xl font-bold mb-4">Beach Bird Studios</h2>
          <p className="text-[#5a7a8c] text-base leading-6 max-w-md">
            Launch Website Analysis Tool for client consultations and
            <br />
            complete SEO websites that dominate AI search results.
          </p>
        </div>
        
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* SEO Services Column */}
          <div>
            <h3 className="text-[#0c3745] font-bold text-sm tracking-wider mb-6">SEO SERVICES</h3>
            <div className="space-y-4">
              <a href="#complete-seo-websites" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Complete SEO Websites
              </a>
              <a href="#local-seo" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Local SEO & GMB
              </a>
              <a href="#ai-search-optimization" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                AI Search Optimization
              </a>
              <a href="#seo-consulting" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                SEO Consulting
              </a>
            </div>
          </div>
          
          {/* Tools Column */}
          <div>
            <h3 className="text-[#0c3745] font-bold text-sm tracking-wider mb-6">SEO TOOLS</h3>
            <div className="space-y-4">
              <a href="#website-analysis" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Website Analysis Tool
              </a>
              <a href="#competitor-analysis" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Competitor Analysis
              </a>
              <a href="#keyword-research" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Keyword Research
              </a>
              <a href="#rank-tracking" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Rank Tracking
              </a>
            </div>
          </div>
          
          {/* Resources Column */}
          <div>
            <h3 className="text-[#0c3745] font-bold text-sm tracking-wider mb-6">RESOURCES</h3>
            <div className="space-y-4">
              <a href="#seo-case-studies" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                SEO Case Studies
              </a>
              <a href="#seo-guides" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                SEO Guides
              </a>
              <a href="#contact" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Contact
              </a>
              <a href="#pricing" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Pricing
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-[rgba(71,167,235,0.1)] pt-8">
          <p className="text-[#5a7a8c] text-sm">
            © 2024 Beach Bird Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};