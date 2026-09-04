import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";
import {
  ContactSection,
  Kicker,
  SectionHeading,
  SectionSubtext,
  ContactGrid,
  ContactCard,
  IconWrap,
  ContactLabel,
  CTAWrap,
  CTAButton,
} from "./Contact.styled";

const EMAIL = "mudassirwaheed242@gmail.com";

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    href: `mailto:${EMAIL}`,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mudassir-waheed-69b005206/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/Mudassir742",
  },
];

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Kicker data-aos="fade-up">Get In Touch</Kicker>
      <SectionHeading data-aos="fade-up">Let's build something great</SectionHeading>
      <SectionSubtext data-aos="fade-up" data-aos-duration="1100">
        Have a role, a project, or an idea you'd like a second opinion on?
        My inbox is open — I usually reply within a day.
      </SectionSubtext>

      <ContactGrid>
        {contactLinks.map(({ icon, label, href }, index) => (
          <ContactCard
            key={label}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel="noreferrer"
            data-aos="fade-up"
            data-aos-duration={1000 + index * 120}
          >
            <IconWrap>{icon}</IconWrap>
            <ContactLabel>{label}</ContactLabel>
          </ContactCard>
        ))}
      </ContactGrid>

      <CTAWrap data-aos="fade-up">
        <CTAButton onClick={() => (window.location.href = `mailto:${EMAIL}`)}>
          Say Hello
        </CTAButton>
      </CTAWrap>
    </ContactSection>
  );
};

export default Contact;
