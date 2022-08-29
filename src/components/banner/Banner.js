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
} from "./Banner.styled";
import TypeWriter from "typewriter-effect";

import "./Banner.css";

const Banner = () => {
  const getStarted = (e) => {
    e.preventDefault();
    console.log(`button is clicked`);
  };

  return (
    <HeroContainer>
      <ContentSection>
        <IntroSection>
          <Intro>Hello, </Intro>
          <Typo>I'm</Typo>
          <DeveloperName>Mudassir Waheed</DeveloperName>
          <Technology>Full Stack Web Developer</Technology>
          <HeroButton>Let's Talk</HeroButton>
        </IntroSection>
        <PhotoContainer>
          <PhotoBackground></PhotoBackground>
        </PhotoContainer>
      </ContentSection>
    </HeroContainer>
  );
};

export default Banner;
