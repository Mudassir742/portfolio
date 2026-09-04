import React from "react";
import {
  ExperienceSection,
  Kicker,
  SectionHeading,
  Timeline,
  TimelineItem,
  TimelineDot,
  RoleHeader,
  RoleTitleGroup,
  RoleTitle,
  Company,
  DateRange,
  Location,
  BulletList,
  Bullet,
  TagRow,
  Tag,
} from "./Experience.styled";

const experience = [
  {
    role: "Full Stack Web Developer",
    company: "Sensviz",
    date: "Dec 2022 - Present",
    location: "Lahore, Pakistan",
    bullets: [
      "Led teams of 2-4 developers, delivering a SaaS grant-discovery platform, a testing platform for horse judges, and CRM / lead-management products using React, Next.js, TypeScript, Node.js and MongoDB.",
      "Architected event-driven microservices with RabbitMQ, enabling scalable communication across two Express servers.",
      "Designed and optimized MongoDB schemas & queries for 100K+ records, cutting query times to under 3 seconds.",
      "Built advanced platform features including intelligent search, Stripe subscription billing, and workflow automation.",
      "Implemented hierarchical role-based access control (RBAC) for secure multi-tenant, multi-role systems.",
      "Set up CI/CD pipelines with GitHub Actions and deployed containerized services to AWS and DigitalOcean with Docker.",
    ],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "RabbitMQ",
      "Docker",
      "AWS",
      "Stripe",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Innovage.io",
    date: "Dec 2021 - Dec 2022",
    location: "Lahore, Pakistan",
    bullets: [
      "Integrated the Stripe payment gateway in Next.js to handle subscription and one-time purchases for book solutions.",
      "Built a book management module with CKEditor supporting chapter- and section-wise questions and solutions.",
      "Developed a React analytics dashboard visualizing user metrics and subscription activity.",
      "Integrated LinkedIn and Indeed APIs for job listings and built a responsive Jobs page with SCSS; added Calendly for interview scheduling.",
    ],
    tags: ["Next.js", "React", "SCSS", "Stripe", "CKEditor"],
  },
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Kicker data-aos="fade-up">Career</Kicker>
      <SectionHeading data-aos="fade-up">Experience</SectionHeading>

      <Timeline>
        {experience.map(({ role, company, date, location, bullets, tags }, index) => (
          <TimelineItem
            key={company}
            data-aos="fade-up"
            data-aos-duration={1000 + index * 150}
          >
            <TimelineDot />
            <RoleHeader>
              <RoleTitleGroup>
                <RoleTitle>{role}</RoleTitle>
                <Company>{company}</Company>
              </RoleTitleGroup>
              <DateRange>{date}</DateRange>
            </RoleHeader>
            <Location>{location}</Location>
            <BulletList>
              {bullets.map((bullet) => (
                <Bullet key={bullet}>{bullet}</Bullet>
              ))}
            </BulletList>
            <TagRow>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagRow>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
