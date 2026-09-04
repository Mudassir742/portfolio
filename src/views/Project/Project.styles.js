import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 9rem 6rem 5rem 6rem;
  background-color: ${({ theme }) => theme.colors.primary.darker};
  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -8%;
    width: 560px;
    height: 560px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124, 108, 246, 0.16) 0%, rgba(124, 108, 246, 0) 70%);
    pointer-events: none;
  }
  @media (max-width: 900px) {
    padding: 8rem 3.5rem 4rem 3.5rem;
  }
  @media (max-width: 600px) {
    padding: 7rem 1.6rem 3rem 1.6rem;
  }
`

// Centers the whole content column (hero, frame, gallery, prev/next nav) as
// one unit within PageContainer's padding, instead of each block being left-
// flush against a padded area that's wider than its own max-width.
export const ContentWrap = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
`

export const NotFoundWrap = styled.div`
  position: relative;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`

export const NotFoundTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.lighter};
`

export const NotFoundText = styled.p`
  color: ${({ theme }) => theme.colors.primary.light};
  max-width: 420px;
`

export const BackLink = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.4rem;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.colors.primary.light};
  transition: color 0.2s ease, transform 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    transform: translateX(-3px);
  }
`

export const HeroWrap = styled.div`
  position: relative;
  max-width: 760px;
`

export const Kicker = styled.p`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  margin-bottom: 1.2rem;
  @media (max-width: 900px) {
    font-size: 2.4rem;
  }
  @media (max-width: 600px) {
    font-size: 1.9rem;
  }
`

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
  margin-bottom: 1.6rem;
`

export const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ live, theme }) => (live ? theme.colors.accent.teal : theme.colors.primary.light)};
  box-shadow: ${({ live }) => (live ? '0 0 0 3px rgba(52, 209, 191, 0.25)' : 'none')};
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: 1.05rem;
  line-height: 1.85rem;
  margin-bottom: 2.2rem;
`

export const SubHeading = styled.p`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary.light};
  margin-bottom: 1rem;
`

export const TechStacks = styled.div`
  gap: 0.7rem;
  display: flex;
  margin-bottom: 2.4rem;
  align-items: center;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  padding: 0.4rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 999px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary.lighter};
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
`

export const CTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`

export const PreviewButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: white;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 0.85rem 1.6rem;
  transition: all 0.25s ease;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 20px 0px rgba(124, 108, 246, 0.4);
    transform: translateY(-2px);
  }
`

// -- Browser-chrome mockup frames -------------------------------------------

export const FrameOuter = styled.div`
  position: relative;
  max-width: 1100px;
  border-radius: 14px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);
  margin-bottom: 5rem;
`

export const FrameBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  height: 36px;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.primary.dark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.bg2};
`

export const FrameDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background.bg2};
`

export const FrameUrl = styled.span`
  flex: 1;
  margin-left: 0.8rem;
  background: ${({ theme }) => theme.colors.primary.darker};
  border-radius: 6px;
  padding: 0.3rem 0.9rem;
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.primary.light};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const FeaturedImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export const GallerySection = styled.div`
  margin-bottom: 3rem;
`

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const GalleryFrame = styled(FrameOuter)`
  margin-bottom: 0;
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`

export const GalleryImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
`

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`

// -- Lightbox ----------------------------------------------------------------

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: rgba(5, 5, 10, 0.92);
  backdrop-filter: blur(6px);
  @media (max-width: 600px) {
    padding: 4rem 1rem;
  }
`

export const LightboxImage = styled.img`
  max-width: 90vw;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`

export const LightboxButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.primary.lighter};
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`

export const LightboxClose = styled(LightboxButton)`
  top: 1.5rem;
  right: 1.5rem;
`

export const LightboxPrev = styled(LightboxButton)`
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 600px) {
    left: 0.6rem;
  }
`

export const LightboxNext = styled(LightboxButton)`
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 600px) {
    right: 0.6rem;
  }
`

export const LightboxCounter = styled.span`
  position: absolute;
  bottom: 1.6rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary.lighter};
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
`

// -- Prev / next project nav --------------------------------------------------

export const ProjectNavSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 1100px;
  margin-top: 4rem;
  padding-top: 2.6rem;
  border-top: 1px solid ${({ theme }) => theme.colors.background.bg2};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const NavCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === 'right' ? 'flex-end' : 'flex-start')};
  text-align: ${({ align }) => (align === 'right' ? 'right' : 'left')};
  padding: 1.3rem 1.6rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
  background: ${({ theme }) => theme.colors.primary.dark};
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
    transform: translateY(-3px);
  }
`

export const NavDirection = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary.light};
`

export const NavTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.lighter};
  margin-top: 0.4rem;
`
