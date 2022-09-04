import React from "react";
import { Parallax } from "react-scroll-parallax";
import {
  ProjectContainer,
  Image,
  ProjectHeading,
  ProjectImageContainer,
  ProjectInfoContainer,
  ProjectButton,
  ProjectDetail,
} from "./Projects.styled";

const ProjectCard = ({ projectImage, projectName, projectDetail }) => {
  return (
    <ProjectContainer>
      <ProjectImageContainer>
        <Parallax speed={-25}>
          <Image src={projectImage} alt="project1" />
        </Parallax>
      </ProjectImageContainer>
      <ProjectInfoContainer>
        <ProjectHeading>{projectName}</ProjectHeading>
        <ProjectDetail>{projectDetail}</ProjectDetail>
        <ProjectButton>View Project</ProjectButton>
      </ProjectInfoContainer>
    </ProjectContainer>
  );
};

export default ProjectCard;
