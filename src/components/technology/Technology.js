import React from "react";
import {
  SectionHeading,
  TechCard,
  TechContainer,
  TechnologySection,
} from "./Technology.styled";

const Technology = () => {
  return (
    <TechnologySection>
      <SectionHeading>Technology Stack</SectionHeading>
      <TechContainer>
        <TechCard>tech</TechCard>
        <TechCard>tech2</TechCard>
      </TechContainer>
    </TechnologySection>
  );
};

export default Technology;
