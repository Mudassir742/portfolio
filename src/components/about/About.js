import React from "react";
import { FaUsers, FaDiagramProject, FaCloud, FaVial } from "react-icons/fa6";
import {
  AboutSection,
  Kicker,
  SectionHeading,
  AboutGrid,
  AboutText,
  Paragraph,
  InfoList,
  InfoRow,
  InfoLabel,
  HighlightGrid,
  HighlightCard,
  IconWrap,
  HighlightTitle,
  HighlightDetail,
} from "./About.styled";

const highlights = [
  {
    icon: <FaUsers />,
    title: "Team Leadership",
    detail:
      "Led teams of 2-4 developers across SaaS, CRM and lead-management products - owning architecture calls, code reviews and technical direction.",
  },
  {
    icon: <FaDiagramProject />,
    title: "System Architecture",
    detail:
      "Architected event-driven microservices with RabbitMQ and designed MongoDB schemas serving 100K+ records with sub-3s query performance.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    detail:
      "Built CI/CD pipelines with GitHub Actions and shipped containerized services to AWS, DigitalOcean and Oracle Cloud with Docker.",
  },
  {
    icon: <FaVial />,
    title: "API & Quality",
    detail:
      "Documented REST APIs with Swagger and maintained Jest test coverage; contributed to the open-source @r5v/mongoose-paginate library.",
  },
];

const About = () => {
  return (
    <AboutSection id="about">
      <Kicker data-aos="fade-up">Who I Am</Kicker>
      <SectionHeading data-aos="fade-up">About Me</SectionHeading>

      <AboutGrid>
        <AboutText data-aos="fade-right" data-aos-duration="1200">
          <Paragraph>
            I'm a Full-Stack Software Engineer based in Lahore, Pakistan, with
            5+ years of experience building web platforms in the MERN stack
            and Python. I care about the whole lifecycle of a product —
            translating vague requirements into clean architecture, shipping
            reliable APIs, and building interfaces people actually enjoy
            using.
          </Paragraph>
          <Paragraph>
            Over the last few years I've led small engineering teams,
            architected event-driven microservices, and taken products from
            a blank repo to production on AWS and DigitalOcean. I'm just as
            comfortable designing a MongoDB schema as I am polishing a React
            component — and I enjoy the parts in between: code review,
            mentoring, and making pragmatic technical calls under real
            deadlines.
          </Paragraph>

          <InfoList>
            <InfoRow>
              <InfoLabel>Based in</InfoLabel>
              Lahore, Pakistan (open to remote)
            </InfoRow>
            <InfoRow>
              <InfoLabel>Education</InfoLabel>
              BS Computer Science, FAST-NUCES, 2022
            </InfoRow>
            <InfoRow>
              <InfoLabel>Focus</InfoLabel>
              React / Next.js, Node.js, Python, MongoDB
            </InfoRow>
          </InfoList>
        </AboutText>

        <HighlightGrid>
          {highlights.map(({ icon, title, detail }, index) => (
            <HighlightCard
              key={title}
              data-aos="fade-up"
              data-aos-duration={1000 + index * 100}
            >
              <IconWrap>{icon}</IconWrap>
              <HighlightTitle>{title}</HighlightTitle>
              <HighlightDetail>{detail}</HighlightDetail>
            </HighlightCard>
          ))}
        </HighlightGrid>
      </AboutGrid>
    </AboutSection>
  );
};

export default About;
