//react
import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa6";
//styled
import {
  ContentSection,
  IntroSection,
  HeroContainer,
  PhotoContainer,
  Slogan,
  Intro,
  NameHighlight,
  Typo,
  HeroButton,
  HeroButtonOutline,
  PhotoBackground,
  SocialLinkContainer,
  SocialIconLink,
  SocialDivider,
  IntroContentSection,
  PhotoFrame,
  TextContainer,
  Line,
  ProfilePhoto,
  Badge,
  BadgeDot,
  ButtonRow,
  StatsRow,
  StatItem,
  StatNumber,
  StatLabel,
  AvailabilityChip,
} from "./Banner.styled";
import profileImg from "../../asset/Mudassir-01-purple-shirt.png";

const RESUME_URL = `${process.env.PUBLIC_URL}/Mudassir_Waheed_Resume.pdf`;

const Banner = () => {
  const handleSendEmail = () => {
    window.location.href = "mailto:mudassirwaheed242@gmail.com";
  };

  return (
    <HeroContainer id="home">
      <ContentSection>
        <IntroSection data-aos="fade-right" data-aos-duration="1400">
          <SocialLinkContainer>
            <SocialIconLink
              href="https://github.com/Mudassir742"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialDivider />
            <SocialIconLink
              href="https://www.linkedin.com/in/mudassir-waheed-69b005206/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialDivider />
            <SocialIconLink
              href="mailto:mudassirwaheed242@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </SocialIconLink>
          </SocialLinkContainer>

          <IntroContentSection>
            <Badge>
              <BadgeDot />
              Open to full-time & freelance opportunities
            </Badge>

            <Intro>
              Hi, I'm <NameHighlight>Mudassir Waheed</NameHighlight>
            </Intro>

            <TextContainer>
              <Line></Line>
              <Typo>
                <Typewriter
                  options={{
                    strings: [
                      "Senior Full-Stack Developer",
                      "React & Next.js Engineer",
                      "Node.js & Python APIs",
                      "Event-Driven Microservices",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 45,
                    deleteSpeed: 25,
                  }}
                />
              </Typo>
            </TextContainer>

            <Slogan>
              I design and build scalable, production-grade web platforms — from
              event-driven microservices and REST APIs to polished React
              interfaces. 5+ years turning ambiguous product ideas into
              software real teams rely on.
            </Slogan>

            <ButtonRow>
              <HeroButton onClick={() => handleSendEmail()}>
                Let's Talk
              </HeroButton>
              <HeroButtonOutline href={RESUME_URL} target="_blank" rel="noreferrer">
                <FaDownload /> Resume
              </HeroButtonOutline>
            </ButtonRow>

            <StatsRow>
              <StatItem>
                <StatNumber>5+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>10+</StatNumber>
                <StatLabel>Products Shipped</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>2-4</StatNumber>
                <StatLabel>Engineers Led</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>100K+</StatNumber>
                <StatLabel>Records at Scale</StatLabel>
              </StatItem>
            </StatsRow>
          </IntroContentSection>
        </IntroSection>
        <PhotoContainer data-aos="fade-left" data-aos-duration="1500">
          <PhotoFrame>
            <PhotoBackground>
              <ProfilePhoto src={profileImg} alt="Mudassir Waheed" />
            </PhotoBackground>
            <AvailabilityChip>🟢 Available for new roles</AvailabilityChip>
          </PhotoFrame>
        </PhotoContainer>
      </ContentSection>
    </HeroContainer>
  );
};

export default Banner;
