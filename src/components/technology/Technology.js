import React from "react";
import {
  Image,
  SectionHeading,
  TechCard,
  TechContainer,
  TechContent,
  TechDetail,
  TechHeading,
  TechInfo,
  TechnologySection,
} from "./Technology.styled";

import ReactImage from "../../asset/reactjs.png";
import NodeImage from "../../asset/nodejs.png";
import ExpressImage from "../../asset/expressjs.png";

const Technology = () => {
  return (
    <TechnologySection>
      <SectionHeading>Technology Stack</SectionHeading>
      <TechContainer>
        <TechCard>
          <TechContent>
            <Image src={ReactImage} alt="logo" />
            <TechInfo>
              <TechHeading>Reactjs</TechHeading>
              <TechDetail>
                ReactJS is a declarative, efficient, and flexible JavaScript
                library for building reusable UI components.
              </TechDetail>
            </TechInfo>
          </TechContent>
        </TechCard>
        <TechCard>
          <TechContent>
            <Image src={NodeImage} alt="logo" />
            <TechInfo>
              <TechHeading>Nodejs</TechHeading>
              <TechDetail>
                Node.js is an open-source and cross-platform JavaScript runtime
                environment. It is a popular tool for running Javascript.
              </TechDetail>
            </TechInfo>
          </TechContent>
        </TechCard>
        <TechCard>
          <TechContent>
            <Image src={ExpressImage} alt="logo" />
            <TechInfo>
              <TechHeading>Expressjs</TechHeading>
              <TechDetail>
                Express is a Node.js web application framework that provides a
                robust set of features for web and mobile applications.
              </TechDetail>
            </TechInfo>
          </TechContent>
        </TechCard>
      </TechContainer>
    </TechnologySection>
  );
};

export default Technology;
