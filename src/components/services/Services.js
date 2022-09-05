import React from "react";
import {
  CardSection,
  Image,
  SectionHeading,
  ServiceCard,
  ServiceDetail,
  ServiceHeading,
  ServiceSection,
} from "./Services.styled";

import FrontendImage from "../../asset/icons/frontend.png";
import BackendImage from "../../asset/icons/backend.png";
import BugImage from "../../asset/icons/bug.png";

const Services = () => {
  return (
    <ServiceSection>
      <SectionHeading>My Services</SectionHeading>
      <CardSection>
        <ServiceCard>
          <Image src={FrontendImage} alt="icon" />
          <ServiceHeading>Frontend</ServiceHeading>
          <ServiceDetail>
            I am very good in replicating designs.I have design many web pages
            with amaizing design. I will convert your static figma or any type
            of design to responsive web pages.
          </ServiceDetail>
        </ServiceCard>
        <ServiceCard>
          <Image src={BackendImage} alt="icon" />
          <ServiceHeading>Backend</ServiceHeading>
          <ServiceDetail>
            I am very good in replicating designs.I have design many web pages
            with amaizing design. I will convert your static figma or any type
            of design to responsive web pages.
          </ServiceDetail>
        </ServiceCard>
        <ServiceCard>
          <Image src={BugImage} alt="icon" />
          <ServiceHeading>Bug Fixing</ServiceHeading>
          <ServiceDetail>
            I am very good in replicating designs.I have design many web pages
            with amaizing design. I will convert your static figma or any type
            of design to responsive web pages.
          </ServiceDetail>
        </ServiceCard>
      </CardSection>
    </ServiceSection>
  );
};

export default Services;
