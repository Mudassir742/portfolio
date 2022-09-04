import React from "react";
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
          <Image src={ProjectImage} alt="project" />
        </ProjectImageContainer>
        <ProjectInfoContainer>
          <ProjectHeading>Smaple project</ProjectHeading>
        </ProjectInfoContainer>
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Project;
