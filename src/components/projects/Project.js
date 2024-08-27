import React from 'react'
import ProjectImage from '../../asset/project/project_1.png'
import ProjectImage2 from '../../asset/project/project_2.png'
import ProjectImage3 from '../../asset/project/project_3.png'
import ProjectImage4 from '../../asset/project/project_4.png'
import ProjectImage5 from '../../asset/project/project_5.png'
import ProjectImage6 from '../../asset/project/project_6.png'
import ProjectImage7 from '../../asset/project/project_7.png'

import ProjectCard from './ProjectCard'
import { ProjectSection, SectionHeading } from './Projects.styled'

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
      <ProjectCard
        projectImage={ProjectImage3}
        projectName="Signeo"
        projectDetail="Signeo is a tool which forecasts sales data for a paint company using historical data analysis
                       and does visualizations on graphs to provide insights into future sales trends, helping the company
                       make data-driven and strategies."
      />
      <ProjectCard
        projectImage={ProjectImage4}
        projectName="Crypto Wave"
        projectDetail="Crypto Wave is a platform which provides real time market prices of crypto and it forecasts selected cryptos
                       future prices in a beautiful visualization graphs."
        reverse={true}
      />
      <ProjectCard
        projectImage={ProjectImage5}
        projectName="Emercient"
        projectDetail="Emercient is a project that enables users to easily search through their data using prompts. Users can create Knowledge Bases
                       and upload data files in Knowlegde Basis and later search through the data using prompts"
      />
      <ProjectCard
        projectImage={ProjectImage6}
        projectName="My Trip Saver"
        projectDetail="My Trip Saver is a flight booking application for Indian airlines. 
                       It provides the realtime flight data of more than 10 flight providers. 
                       Users can easily search through and book flight they"
        reverse={true}
      />
      <ProjectCard
        projectImage={ProjectImage7}
        projectName="Time Pay Jao"
        projectDetail="Time Pay Jao is a ride booking platform. This is the Manager side of the Time Pay Jao application."
      />
    </ProjectSection>
  )
}

export default Project
