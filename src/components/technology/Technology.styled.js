import styled from 'styled-components'

export const TechnologySection = styled.section`
  padding: 5rem 6rem 6rem 6rem;
  background: ${({ theme }) => theme.colors.primary.dark};
  @media (max-width: 900px) {
    padding: 5rem 3rem;
  }
  @media (max-width: 530px) {
    padding: 4rem 1.6rem;
  }
`

export const Kicker = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`

export const SectionHeading = styled.p`
  width: 100%;
  text-align: center;
  margin: 0 0 4rem 0;
  font-size: 2.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.lighter};
  letter-spacing: -0.5px;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`

export const CategoryBlock = styled.div`
  max-width: 1100px;
  margin: 0 auto 3rem auto;
  &:last-child {
    margin-bottom: 0;
  }
`

export const CategoryTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.accent.teal};
  margin-bottom: 1.2rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.bg2};
`

export const TechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1.4rem;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const TechContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const TechCard = styled.div`
  background: ${({ theme }) => theme.colors.primary.darker};
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
  padding: 1.5rem 1rem;
  border-radius: 10px;
  color: white;
  transition: all 0.25s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
    transform: translateY(-4px);
  }
`

export const Image = styled.img`
  max-width: 48px;
  height: auto;
  @media (max-width: 768px) {
    max-width: 42px;
  }
`

export const TechHeading = styled.p`
  font-size: 0.85rem;
  letter-spacing: 0.3px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.light};
`
