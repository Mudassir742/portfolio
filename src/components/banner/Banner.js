//react
import React from "react";
//styled
import {
  ContentSection,
  IntroSection,
  HeroContainer,
  PhotoContainer,
  DeveloperName,
  Technology,
  Intro,
  Typo,
  HeroButton,
  PhotoBackground,
  IntroDetail,
  QouteCard,
  SocialLinkContainer,
  Partition,
  SocialLink,
  Circle,
  IntroContentSection,
  PhotoFrame,
} from "./Banner.styled";

const Banner = () => {
  return (
    <HeroContainer>
      <ContentSection>
        <IntroSection>
          <SocialLinkContainer>
            <Partition></Partition>
            <SocialLink>Github</SocialLink>
            <Circle></Circle>
            <SocialLink>LinkedIn</SocialLink>
            <Partition></Partition>
          </SocialLinkContainer>
          <IntroContentSection>
            <Intro>Hello, </Intro>
            <Typo>I'm</Typo>
            <DeveloperName>Mudassir Waheed.</DeveloperName>
            <Technology>MERN Stack Developer</Technology>
            <IntroDetail>
              I am a full stack web developer with 2 years of experience. I have
              developed amaizing web apps and worked with different clients.
            </IntroDetail>
            <HeroButton>Let's Talk</HeroButton>
          </IntroContentSection>
        </IntroSection>
        <PhotoContainer>
          <PhotoFrame>
            <PhotoBackground></PhotoBackground>
          </PhotoFrame>
          {/* <QouteCard className="qoute">
            "make it Simple, make it Right, make it Work."
          </QouteCard> */}
        </PhotoContainer>
      </ContentSection>
    </HeroContainer>
  );
};

export default Banner;
