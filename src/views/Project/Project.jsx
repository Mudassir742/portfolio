import React, { useState, useEffect, useCallback } from 'react'
import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare, FaXmark, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import {
  Tag,
  Title,
  Kicker,
  ContentWrap,
  HeroWrap,
  TechStacks,
  SubHeading,
  StatusDot,
  StatusBadge,
  PageContainer,
  Description,
  CTARow,
  PreviewButton,
  BackLink,
  FrameOuter,
  FrameBar,
  FrameDot,
  FrameUrl,
  FeaturedImage,
  GallerySection,
  GalleryGrid,
  GalleryFrame,
  GalleryImageWrap,
  GalleryImage,
  LightboxOverlay,
  LightboxImage,
  LightboxClose,
  LightboxPrev,
  LightboxNext,
  LightboxCounter,
  ProjectNavSection,
  NavCard,
  NavDirection,
  NavTitle,
  NotFoundWrap,
  NotFoundTitle,
  NotFoundText,
} from './Project.styles'
import { useParams, useNavigate } from 'react-router-dom'

import { ProjectsDictionary } from '../../data/ProjectsDictionary'
import { ProjectsList } from '../../data/ProjectsList'

const getDisplayUrl = (link) => {
  if (!link) return 'Private build · not publicly deployed'
  try {
    return new URL(link).hostname.replace(/^www\./, '')
  } catch (e) {
    return link
  }
}

const Project = () => {
  const { projectId = '' } = useParams()
  const navigate = useNavigate()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const projectDetail = ProjectsDictionary[projectId] || null
  const currentIndex = ProjectsList.findIndex((p) => p.id === projectId)
  const prevProject = currentIndex > -1 ? ProjectsList[(currentIndex - 1 + ProjectsList.length) % ProjectsList.length] : null
  const nextProject = currentIndex > -1 ? ProjectsList[(currentIndex + 1) % ProjectsList.length] : null

  useEffect(() => {
    window.scrollTo(0, 0)
    setLightboxIndex(null)
  }, [projectId])

  // Lightbox: lock page scroll while open, support Escape / arrow keys.
  useEffect(() => {
    if (lightboxIndex === null || !projectDetail) return undefined

    document.body.style.overflow = 'hidden'
    const total = projectDetail.images.length

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % total)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + total) % total)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxIndex, projectDetail])

  const goToProject = useCallback((id) => navigate(`/${id}`), [navigate])

  if (!projectDetail) {
    return (
      <PageContainer>
        <NotFoundWrap data-aos="fade-up">
          <NotFoundTitle>Project not found</NotFoundTitle>
          <NotFoundText>
            This case study doesn't exist, or the link may be out of date.
          </NotFoundText>
          <BackLink onClick={() => navigate('/', { state: { scrollTo: '#projects' } })}>
            <FaArrowLeft /> Back to all projects
          </BackLink>
        </NotFoundWrap>
      </PageContainer>
    )
  }

  const { title, description, technologies, images, link } = projectDetail
  const [featured, ...rest] = images
  const displayUrl = getDisplayUrl(link)

  return (
    <PageContainer>
      <ContentWrap>
        <BackLink
          onClick={() => navigate('/', { state: { scrollTo: '#projects' } })}
          data-aos="fade-up"
        >
          <FaArrowLeft /> Back to all projects
        </BackLink>

        <HeroWrap>
          <Kicker data-aos="fade-up">Case Study</Kicker>
          <Title data-aos="fade-up">{title}</Title>

          <StatusBadge data-aos="fade-up">
            <StatusDot live={!!link} />
            {link ? 'Live project' : 'Private / internal build'}
          </StatusBadge>

          <Description data-aos="fade-up" data-aos-duration={1100}>
            {description}
          </Description>

          <SubHeading data-aos="fade-up">Built With</SubHeading>
          <TechStacks data-aos="fade-up" data-aos-duration={1200}>
            {technologies.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </TechStacks>

          {link && (
            <CTARow data-aos="fade-up" data-aos-duration={1300}>
              <PreviewButton href={link} target="_blank" rel="noreferrer">
                Visit Live Site <FaArrowUpRightFromSquare />
              </PreviewButton>
            </CTARow>
          )}
        </HeroWrap>

        <FrameOuter data-aos="fade-up" data-aos-duration={1300}>
          <FrameBar>
            <FrameDot />
            <FrameDot />
            <FrameDot />
            <FrameUrl>{displayUrl}</FrameUrl>
          </FrameBar>
          <FeaturedImage
            src={featured}
            alt={`${title} main screenshot`}
            onClick={() => setLightboxIndex(0)}
            style={{ cursor: 'zoom-in' }}
          />
        </FrameOuter>

        {rest.length > 0 && (
          <GallerySection>
            <SubHeading data-aos="fade-up">Gallery</SubHeading>
            <GalleryGrid>
              {rest.map((image, i) => (
                <GalleryFrame
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration={1000 + (i % 4) * 100}
                  onClick={() => setLightboxIndex(i + 1)}
                >
                  <FrameBar>
                    <FrameDot />
                    <FrameDot />
                    <FrameDot />
                  </FrameBar>
                  <GalleryImageWrap>
                    <GalleryImage src={image} alt={`${title} screenshot ${i + 2}`} />
                  </GalleryImageWrap>
                </GalleryFrame>
              ))}
            </GalleryGrid>
          </GallerySection>
        )}

        {(prevProject || nextProject) && (
          <ProjectNavSection>
            {prevProject ? (
              <NavCard onClick={() => goToProject(prevProject.id)} data-aos="fade-up">
                <NavDirection>
                  <FaArrowLeft /> Previous
                </NavDirection>
                <NavTitle>{prevProject.title}</NavTitle>
              </NavCard>
            ) : (
              <div />
            )}
            {nextProject ? (
              <NavCard align="right" onClick={() => goToProject(nextProject.id)} data-aos="fade-up">
                <NavDirection>
                  Next <FaArrowRight />
                </NavDirection>
                <NavTitle>{nextProject.title}</NavTitle>
              </NavCard>
            ) : (
              <div />
            )}
          </ProjectNavSection>
        )}
      </ContentWrap>

      {lightboxIndex !== null && (
        <LightboxOverlay onClick={() => setLightboxIndex(null)}>
          <LightboxClose onClick={() => setLightboxIndex(null)} aria-label="Close">
            <FaXmark />
          </LightboxClose>

          {images.length > 1 && (
            <>
              <LightboxPrev
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex((i) => (i - 1 + images.length) % images.length)
                }}
              >
                <FaChevronLeft />
              </LightboxPrev>
              <LightboxNext
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex((i) => (i + 1) % images.length)
                }}
              >
                <FaChevronRight />
              </LightboxNext>
            </>
          )}

          <LightboxImage
            src={images[lightboxIndex]}
            alt={`${title} screenshot ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <LightboxCounter>
            {lightboxIndex + 1} / {images.length}
          </LightboxCounter>
        </LightboxOverlay>
      )}
    </PageContainer>
  )
}

export default Project
