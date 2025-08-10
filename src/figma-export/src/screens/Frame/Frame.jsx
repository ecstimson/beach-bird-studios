import React from "react";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Nav } from "./sections/Nav";
import { ParagraphWrapper } from "./sections/ParagraphWrapper";
import { Section } from "./sections/Section";
import { SectionWrapper } from "./sections/SectionWrapper";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame" data-model-id="15:185">
      <Section />
      <SectionWrapper />
      <div className="overlap">
        <ParagraphWrapper />
        <DivWrapper />
      </div>

      <Footer />
      <Nav />
    </div>
  );
};
