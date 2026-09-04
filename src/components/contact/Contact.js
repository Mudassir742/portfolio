import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaLocationDot } from "react-icons/fa6";
import {
  ContactSection,
  Kicker,
  SectionHeading,
  SectionSubtext,
  ContactGrid,
  ContactCard,
  IconWrap,
  ContactLabel,
  ContactValue,
  CTAWrap,
  CTAButton,
} from "./Contact.styled";

const EMAIL = "mudassirwaheed242@gmail.com";

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "mudassir-waheed",
    href: "https://www.linkedin.com/in/mudassir-waheed-69b005206/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "Mudassir742",
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
        {contactLinks.map(({ icon, label, value, href }, index) => (
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
            <ContactValue>{value}</ContactValue>
          </ContactCard>
        ))}
        <ContactCard
          as="div"
          data-aos="fade-up"
          data-aos-duration="1360"
        >
          <IconWrap>
            <FaLocationDot />
          </IconWrap>
          <ContactLabel>Based In</ContactLabel>
          <ContactValue>Lahore, Pakistan</ContactValue>
        </ContactCard>
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
