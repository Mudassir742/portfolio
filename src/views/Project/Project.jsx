import React, { useState, useEffect } from 'react'
import {
  Tag,
  Image,
  TechStacks,
  SubHeading,
  MainHeading,
  PageContainer,
  ImageContainer,
  ContentContainer,
  TechStackContainer,
  ContentDescription,
  MainHeadingContainer,
  PreviewButton,
} from './Project.styles'
import { useParams } from 'react-router-dom'

import { ProjectsDictionary } from '../../data/ProjectsDictionary'

const Project = () => {
  const { projectId = '' } = useParams()
  const [projectDetail, setProjectDetail] = useState(null)

  useEffect(() => {
    if (projectId) {
      const _detail = ProjectsDictionary[projectId] || null
      setProjectDetail(_detail)
    }
  }, [projectId])

  return (
    <>
      {projectDetail && (
        <PageContainer>
          <MainHeadingContainer>
            <MainHeading>{projectDetail.title}</MainHeading>
          </MainHeadingContainer>

          <ContentContainer>
            <ContentDescription>{projectDetail.description}</ContentDescription>

            <TechStackContainer>
              <SubHeading>Technology</SubHeading>
              <TechStacks>
                {projectDetail.technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </TechStacks>
              
              {projectDetail.link && (
                <PreviewButton onClick={() => window.open(projectDetail.link, '_blank')}>
                  View Project
                </PreviewButton>
              )}
            </TechStackContainer>
          </ContentContainer>

          <ImageContainer>
            {projectDetail.images.map((image, index) => (
              <Image key={index} src={image} alt="crypto" />
            ))}
          </ImageContainer>
        </PageContainer>
      )}
    </>
  )
}

export default Project
