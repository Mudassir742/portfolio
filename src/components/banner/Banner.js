//react
import React from "react";
//styled
import {
  ContentSection,
  IntroSection,
  HeroContainer,
  PhotoContainer,
  Slogan,
  DeveloperName,
  Intro,
  Typo,
  HeroButton,
  PhotoBackground,
  SocialLinkContainer,
  Partition,
  SocialLink,
  Circle,
  IntroContentSection,
  PhotoFrame,
  TextContainer,
  Line,
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
            <Intro>Mudassir Waheed.</Intro>
            <TextContainer>
              <Line></Line>
              <Typo>MERN DEVELOPER</Typo>
            </TextContainer>
            <Slogan>Where imagination meets creativity.</Slogan>
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
      <DeveloperName>Mudassir Waheed.</DeveloperName>
    </HeroContainer>
  );
};

export default Banner;
