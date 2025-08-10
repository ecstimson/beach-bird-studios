import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white w-full relative">
      <div className="w-full px-8 py-16">
        {/* Company Info */}
        <div className="mb-12">
          <h2 className="text-[#0c3745] text-xl font-bold mb-4">Beach Bird Studios</h2>
          <p className="text-[#5a7a8c] text-base leading-6 max-w-md">
            Crafting digital experiences that inspire action and drive
            <br />
            measurable results for ambitious brands worldwide.
          </p>
        </div>
        
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Services Column */}
          <div>
            <h3 className="text-[#0c3745] font-bold text-sm tracking-wider mb-6">SERVICES</h3>
            <div className="space-y-4">
              <a href="#web-design" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Web Design
              </a>
              <a href="#brand-identity" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Brand Identity
              </a>
              <a href="#digital-marketing" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Digital Marketing
              </a>
              <a href="#consulting" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Consulting
              </a>
            </div>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="text-[#0c3745] font-bold text-sm tracking-wider mb-6">COMPANY</h3>
            <div className="space-y-4">
              <a href="#about" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                About Us
              </a>
              <a href="#portfolio" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Portfolio
              </a>
              <a href="#blog" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Blog
              </a>
              <a href="#careers" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Careers
              </a>
            </div>
          </div>
          
          {/* Resources Column */}
          <div>
            <h3 className="text-[#0c3745] font-bold text-sm tracking-wider mb-6">RESOURCES</h3>
            <div className="space-y-4">
              <a href="#case-studies" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Case Studies
              </a>
              <a href="#help-center" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Help Center
              </a>
              <a href="#contact" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                Contact
              </a>
              <a href="#faq" className="block text-[#5a7a8c] hover:text-[#47a7eb] transition-colors">
                FAQ
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