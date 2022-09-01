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
import MongoImage from "../../asset/mongo.png";
import SqlImage from "../../asset/sql.png";
import NextImage from "../../asset/nextjs.png";
import PostmanImage from "../../asset/postman.png";

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
            <Image src={ReactImage} alt="logo" />
            <TechInfo>
              <TechHeading>React Native</TechHeading>
              <TechDetail>
                React Native is also a javascript library use to develope
                cross-platform mobile application with flexibilty of UI
                components.
              </TechDetail>
            </TechInfo>
          </TechContent>
        </TechCard>
        <TechCard>
          <TechContent>
            <Image src={NextImage} alt="logo" />
            <TechInfo>
              <TechHeading>Nextjs</TechHeading>
              <TechDetail>
                Nextjs is web development framework created by Vercel enabling
                React-based web applications with server-side rendering
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
        <TechCard>
          <TechContent>
            <Image src={MongoImage} alt="logo" />
            <TechInfo>
              <TechHeading>MongoDB</TechHeading>
              <TechDetail>
                MongoDB is a document-oriented database program. Classified as a
                NoSQL database program, and uses JSON-like documents.
              </TechDetail>
            </TechInfo>
          </TechContent>
        </TechCard>
        <TechCard>
          <TechContent>
            <Image src={SqlImage} alt="logo" />
            <TechInfo>
              <TechHeading>My SQL</TechHeading>
              <TechDetail>
                MySQL is a relational database management system. It enables
                users to meet the database challenges scalability.
              </TechDetail>
            </TechInfo>
          </TechContent>
        </TechCard>
        <TechCard>
          <TechContent>
            <Image src={PostmanImage} alt="logo" />
            <TechInfo>
              <TechHeading>Postman</TechHeading>
              <TechDetail>
                Postman is an application that allows us to mock up frontend
                requests without writing any JavaScript.
              </TechDetail>
            </TechInfo>
          </TechContent>
        </TechCard>
      </TechContainer>
    </TechnologySection>
  );
};

export default Technology;
