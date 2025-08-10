import React from 'react';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-36 bg-white shadow-[0px_1px_0px_rgba(71,167,235,0.1)] z-50">
      <div className="relative w-full h-full">
        {/* Logo/Brand - positioned based on Figma export */}
        <div className="absolute left-[693px] top-3 w-[534px] h-[66px] bg-cover bg-center bg-no-repeat">
          <div className="text-2xl font-bold text-[#0c3745] flex items-center justify-center h-full">
            Beach Bird Studios
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="absolute left-[803px] top-[93px] h-[18px] w-[61px]">
          <a href="#services" className="text-[#0c3745] font-inter text-[14.9px] font-medium hover:text-[#47a7eb] transition-colors">
            Services
          </a>
        </div>
        
        <div className="absolute left-[904px] top-[93px] h-[18px] w-[59px]">
          <a href="#portfolio" className="text-[#0c3745] font-inter text-[14.4px] font-medium hover:text-[#47a7eb] transition-colors">
            Portfolio
          </a>
        </div>
        
        <div className="absolute left-[1003px] top-[93px] h-[18px] w-[42px]">
          <a href="#about" className="text-[#0c3745] font-inter text-[14.5px] font-medium hover:text-[#47a7eb] transition-colors">
            About
          </a>
        </div>
        
        <div className="absolute left-[1085px] top-[93px] h-[18px] w-[32px]">
          <a href="#blog" className="text-[#0c3745] font-inter text-[15.1px] font-medium hover:text-[#47a7eb] transition-colors">
            Blog
          </a>
        </div>
        
        {/* CTA Button */}
        <div className="absolute left-[1637px] top-[51px] w-[219px] h-[42px]">
          <a 
            href="#start-project" 
            className="flex items-center justify-center w-full h-full bg-gradient-to-r from-[#47a7eb] to-[#5bb5f5] rounded-full shadow-[0px_4px_16px_rgba(71,167,235,0.25)] hover:shadow-[0px_6px_20px_rgba(71,167,235,0.35)] transition-all"
          >
            <span className="text-white font-inter text-[15.8px] font-bold">
              Start Your Project →
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};