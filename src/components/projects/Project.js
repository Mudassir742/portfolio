import React from "react";
import { Parallax } from "react-scroll-parallax";
import ProjectImage from "../../asset/project/project_1.png";
import {
  ProjectContainer,
  Image,
  ProjectHeading,
  ProjectImageContainer,
  ProjectInfoContainer,
  ProjectButton,
  ProjectSection,
  SectionHeading,
  ProjectDetail,
} from "./Projects.styled";

const Project = () => {
  return (
    <ProjectSection>
      <SectionHeading>Projects</SectionHeading>
      <ProjectContainer>
        <ProjectImageContainer>
          <Parallax speed={-25}>
            <Image src={ProjectImage} alt="project1" />
          </Parallax>
        </ProjectImageContainer>
        <ProjectInfoContainer>
          <ProjectHeading>Chess Monkey</ProjectHeading>
          <ProjectDetail>
            Chess Money is a joint venture between a cohort of ex-bankers and a
            listed company that provides human resources management services.
            Each of the Chess partners’ competencies is leveraged to offer the
            best lending experience.
          </ProjectDetail>
          <ProjectButton>View Project</ProjectButton>
        </ProjectInfoContainer>
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Project;
