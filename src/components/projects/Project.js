import React from "react";
import { Parallax } from "react-scroll-parallax";
import ProjectImage from "../../asset/project/project_1.png";
import ProjectCard from "./ProjectCard";
import {
  ProjectSection,
  SectionHeading,
} from "./Projects.styled";

const Project = () => {
  return (
    <ProjectSection>
      <SectionHeading>Projects</SectionHeading>
      <ProjectCard
        projectImage={ProjectImage}
        projectName="Chess Money"
        projectDetail="Chess Money is a joint venture between a cohort of ex-bankers and a listed company that provides human resources management services.
                       Each of the Chess partners’ competencies is leveraged to offer the best lending experience."
      />
    </ProjectSection>
  );
};

export default Project;
