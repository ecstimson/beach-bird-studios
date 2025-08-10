import React from 'react';

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[870px] mt-36 bg-gradient-to-b from-[#fafcff] to-[rgba(71,167,235,0.03)]">
      <div className="relative w-[1312px] h-[600px] mx-auto pt-[140px]">
        {/* Left Content */}
        <div className="relative">
          {/* Status Badge */}
          <div className="absolute left-0 top-[87px] w-[250px] h-[35px] bg-[rgba(230,184,76,0.1)] border border-[rgba(230,184,76,0.3)] rounded-full flex items-center justify-center">
            <span className="text-[#b08a3a] font-inter text-[13.5px] font-bold">
              ✨ Now Accepting New Projects
            </span>
          </div>
          
          {/* Hero Title - positioned to match Figma */}
          <div className="absolute left-0 top-[150px] w-[615px]">
            <h1 className="text-[#0c3745] font-bold text-5xl leading-tight mb-8">
              Transform your vision into stunning websites that captivate audiences
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="absolute left-0 top-[359px] w-[615px] h-[54px] text-[#5a7a8c] font-medium text-[18.6px] leading-[32px]">
            Transform your vision into stunning websites that captivate audiences
            <br />
            and convert visitors. Let's build something extraordinary together.
          </p>
          
          {/* CTA Buttons */}
          <div className="absolute left-0 top-[459px] flex gap-4">
            <a 
              href="#get-started" 
              className="w-[237px] h-[54px] bg-gradient-to-r from-[#47a7eb] to-[#5bb5f5] rounded-full shadow-[0px_4px_16px_rgba(71,167,235,0.25)] flex items-center justify-center hover:shadow-[0px_6px_20px_rgba(71,167,235,0.35)] transition-all"
            >
              <span className="text-white font-medium text-[15.6px]">
                Get Started Today →
              </span>
            </a>
            
            <a 
              href="#our-work" 
              className="w-[197px] h-[54px] bg-white border-2 border-[#e5f2fc] rounded-full flex items-center justify-center hover:border-[#47a7eb] transition-colors"
            >
              <span className="text-[#0c3745] font-medium text-[15.4px]">
                View Our Work
              </span>
            </a>
          </div>
        </div>
        
        {/* Right Visual Element */}
        <div className="absolute left-[636px] top-0 w-[736px] h-[600px]">
          {/* Gradient Background */}
          <div className="absolute left-[60px] top-0 w-[616px] h-[600px] bg-gradient-to-br from-[#47a7eb] to-[#e6b84c] rounded-3xl shadow-[0px_32px_64px_rgba(71,167,235,0.15)]"></div>
          
          {/* Stats Card 1 */}
          <div className="absolute left-[564px] top-[60px] w-[172px] h-[116px] bg-white border border-[rgba(71,167,235,0.1)] rounded-2xl shadow-[0px_16px_48px_rgba(0,0,0,0.08)] flex flex-col justify-center items-start pl-6">
            <div className="text-[#47a7eb] font-medium text-[32.5px] leading-[41px] mb-2">
              150+
            </div>
            <div className="text-[#5a7a8c] font-medium text-[13.1px] leading-[16px]">
              Projects Completed
            </div>
          </div>
          
          {/* Stats Card 2 */}
          <div className="absolute left-0 top-[424px] w-[196px] h-[116px] bg-white border border-[rgba(71,167,235,0.1)] rounded-2xl shadow-[0px_16px_48px_rgba(0,0,0,0.08)] flex flex-col justify-center items-start pl-6">
            <div className="text-[#47a7eb] font-medium text-[33px] leading-[41px] mb-2">
              98%
            </div>
            <div className="text-[#5a7a8c] font-medium text-[13.2px] leading-[16px]">
              Client Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};