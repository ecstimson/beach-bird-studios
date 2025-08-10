import React from "react";
import "./style.css";

export const Section = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="overlay-border">
          <p className="text-wrapper">✨ Now Accepting New Projects</p>
        </div>

        <p className="transform-your">
          Transform your vision into stunning websites that captivate audiences
          <br />
          and convert visitors. Let&#39;s build something extraordinary
          together.
        </p>

        <div className="link">
          <div className="div">Get Started Today →</div>
        </div>

        <div className="link-2">
          <div className="text-wrapper-2">View Our Work</div>
        </div>

        <div className="overlap-group">
          <div className="gradient-shadow" />

          <div className="paragraph-background">
            <div className="text-wrapper-3">150+</div>

            <div className="text-wrapper-4">Projects Completed</div>
          </div>

          <div className="paragraph-background-2">
            <div className="text-wrapper-5">98%</div>

            <div className="text-wrapper-6">Client Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};
