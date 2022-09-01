import React from "react";
import {
  CardSection,
  SectionHeading,
  ServiceCard,
  ServiceDetail,
  ServiceHeading,
  ServiceSection,
} from "./Services.styled";

//import "./Services.css";
const Services = () => {
  return (
    <ServiceSection>
      <SectionHeading>My Services</SectionHeading>
      <CardSection>
        <ServiceCard>
          <ServiceHeading>Frontend</ServiceHeading>
          <ServiceDetail>
            I am very good in replicating designs.I have design many web pages
            with amaizing design. I will convert your static figma or any type
            of design to responsive web pages.
          </ServiceDetail>
        </ServiceCard>
        <ServiceCard>1</ServiceCard>
        <ServiceCard>1</ServiceCard>
      </CardSection>
    </ServiceSection>
  );
};

export default Services;
