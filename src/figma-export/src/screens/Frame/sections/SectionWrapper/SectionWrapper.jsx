import React from "react";
import "./style.css";

export const SectionWrapper = () => {
  return (
    <div className="section-wrapper">
      <div className="container-2">
        <div className="overlay">
          <div className="text-wrapper-7">Our Services</div>
        </div>

        <p className="we-combine">
          We combine creativity with strategy to deliver digital solutions that
          make
          <br />a lasting impact on your business.
        </p>
      </div>

      <div className="container-3">
        <div className="background-border">
          <div className="background">
            <div className="text-wrapper-8">🎨</div>
          </div>

          <div className="heading-web-design">Web Design</div>

          <p className="beautiful-responsive">
            Beautiful, responsive websites that tell your story
            <br />
            and engage your audience across all devices
            <br />
            and platforms.
          </p>

          <div className="link-learn-more">Learn More →</div>
        </div>

        <div className="background-border-2">
          <div className="background">
            <div className="text-wrapper-9">✨</div>
          </div>

          <div className="heading-brand">Brand Identity</div>

          <p className="strategic-brand">
            Strategic brand development that captures your
            <br />
            essence and resonates with your target market.
          </p>

          <div className="link-learn-more-2">Learn More →</div>
        </div>

        <div className="background-border-3">
          <div className="background">
            <div className="text-wrapper-8">📈</div>
          </div>

          <div className="heading-digital">Digital Marketing</div>

          <p className="data-driven">
            Data-driven campaigns that increase visibility,
            <br />
            drive traffic, and convert visitors into loyal
            <br />
            customers.
          </p>

          <div className="link-learn-more">Learn More →</div>
        </div>
      </div>
    </div>
  );
};
