import React from "react";
import {
  CardSection,
  Icon,
  IconWrap,
  Kicker,
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
    <ServiceSection id="services">
      <Kicker data-aos="fade-up">Services</Kicker>
      <SectionHeading data-aos="fade-up">What I Do</SectionHeading>
      <CardSection>
        <ServiceCard data-aos="fade-up" data-aos-duration="1200">
          <IconWrap>
            <Icon $src={FrontendImage} />
          </IconWrap>
          <ServiceHeading>Frontend Development</ServiceHeading>
          <ServiceDetail>
            I build responsive, accessible interfaces with React, Next.js and TypeScript —
            from design-system components to data-heavy dashboards that stay fast at scale.
          </ServiceDetail>
        </ServiceCard>
        <ServiceCard data-aos="fade-up" data-aos-duration="1300">
          <IconWrap>
            <Icon $src={BackendImage} />
          </IconWrap>
          <ServiceHeading>Backend & Architecture</ServiceHeading>
          <ServiceDetail>
            I design REST APIs and event-driven microservices with Node.js, Python (FastAPI/Django)
            and RabbitMQ, backed by well-modeled MongoDB/SQL data layers built to scale.
          </ServiceDetail>
        </ServiceCard>
        <ServiceCard data-aos="fade-up" data-aos-duration="1400">
          <IconWrap>
            <Icon $src={BugImage} />
          </IconWrap>
          <ServiceHeading>Testing & DevOps</ServiceHeading>
          <ServiceDetail>
            I write Jest test suites, document APIs with Swagger, and ship via Docker and
            GitHub Actions CI/CD pipelines to AWS, DigitalOcean and Oracle Cloud.
          </ServiceDetail>
        </ServiceCard>
      </CardSection>
    </ServiceSection>
  )
};

export default Services;
