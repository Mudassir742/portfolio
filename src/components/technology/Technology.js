import React from "react";
import {
  SectionHeading,
  TechContainer,
  TechnologySection,
} from "./Technology.styled";

import TechnologyCard from "./TechnologyCard";

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
        <TechnologyCard
          image={ReactImage}
          techName="Reactjs"
          techDetail="ReactJS is a declarative, efficient, and flexible JavaScript
                library for building reusable UI components."
        />
        <TechnologyCard
          image={ReactImage}
          techName="React Native"
          techDetail="React Native is also a javascript library use to develope
          cross-platform mobile application with flexibilty of UI
          components."
        />
        <TechnologyCard
          image={NextImage}
          techName="Nextjs"
          techDetail="Nextjs is web development framework created by Vercel enabling
          React-based web applications with server-side rendering."
        />
        <TechnologyCard
          image={NodeImage}
          techName="Nodejs"
          techDetail="Node.js is an open-source and cross-platform JavaScript runtime
          environment. It is a popular tool for running Javascript."
        />
        <TechnologyCard
          image={ExpressImage}
          techName="Expressjs"
          techDetail="Express is a Node.js web application framework that provides a
          robust set of features for web and mobile applications."
        />

        <TechnologyCard
          image={MongoImage}
          techName="MongoDB"
          techDetail="MongoDB is a document-oriented database program. Classified as a
          NoSQL database program, and uses JSON-like documents."
        />
        <TechnologyCard
          image={SqlImage}
          techName="My SQL"
          techDetail="MySQL is a relational database management system. It enables
          users to meet the database challenges scalability."
        />
        <TechnologyCard
          image={PostmanImage}
          techName="Postman"
          techDetail="Postman is an application that allows us to mock up frontend
          requests without writing any JavaScript."
        />
      </TechContainer>
    </TechnologySection>
  );
};

export default Technology;
