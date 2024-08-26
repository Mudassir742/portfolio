import React from "react";
import ProjectImage from "../../asset/project/project_1.png";
import ProjectImage2 from "../../asset/project/project_2.png";
import ProjectCard from "./ProjectCard";
import { ProjectSection, SectionHeading } from "./Projects.styled";

const Project = () => {
  return (
    <ProjectSection id="projects">
      <SectionHeading>Projects</SectionHeading>
      <ProjectCard
        projectImage={ProjectImage}
        projectName="Grant Match"
        projectDetail="GrantMatch is a platform which birngs the most relevant grant opportunities to you,
                       so you can stop your tedious & time consuming search processes for the grants with a free 15 day trial
                        without the need of a credit/debit card."
        btnAction={() => window.open('https://grantmatch.ai/', '_blank')}
      />
      <ProjectCard
        projectImage={ProjectImage2}
        projectName="CV Jury"
        projectDetail="CVJury AI Cover Letter Writer A powerful tool helping you create compelling
                       cover letters by suggesting content and language based on industry-specific
                       best practices"
        reverse={true}
        btnAction={() => window.open('https://coverletterai.uk/', 'blank')}
      />
    </ProjectSection>
  )
};

export default Project;
