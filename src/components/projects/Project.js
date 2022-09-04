import React from "react";
import { Parallax } from "react-scroll-parallax";
import ProjectImage from "../../asset/project/project_1.png";
import {
  ProjectContainer,
  Image,
  ProjectHeading,
  ProjectImageContainer,
  ProjectInfoContainer,
  ProjectSection,
  SectionHeading,
} from "./Projects.styled";

const Project = () => {
  return (
    <ProjectSection>
      <SectionHeading>Projects</SectionHeading>
      <ProjectContainer>
        <ProjectImageContainer>
          <Parallax speed={-30}>
            <Image src={ProjectImage} alt="project1" />
          </Parallax>
        </ProjectImageContainer>
        <ProjectInfoContainer>
          <ProjectHeading>Chess Monkey</ProjectHeading>
        </ProjectInfoContainer>
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Project;
