import React from 'react'

import {
  Image,
  TechCard,
  Kicker,
  TechHeading,
  TechContent,
  TechContainer,
  SectionHeading,
  TechnologySection,
  CategoryBlock,
  CategoryTitle,
} from './Technology.styled'

import { skillsByCategory } from '../../asset/skills'

const Technology = () => {
  return (
    <TechnologySection id="technology">
      <Kicker data-aos="fade-up">Toolbox</Kicker>
      <SectionHeading data-aos="fade-up">Skills & Technologies</SectionHeading>

      {skillsByCategory.map(({ category, skills }) => (
        <CategoryBlock key={category} data-aos="fade-up">
          <CategoryTitle>{category}</CategoryTitle>
          <TechContainer>
            {skills.map(({ logo, title }) => (
              <TechCard key={title}>
                <TechContent>
                  <Image src={logo} alt={title} />
                  <TechHeading>{title}</TechHeading>
                </TechContent>
              </TechCard>
            ))}
          </TechContainer>
        </CategoryBlock>
      ))}
    </TechnologySection>
  )
}

export default Technology
