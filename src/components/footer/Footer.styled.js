import styled from 'styled-components'

export const FooterSection = styled.section`
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.background.bg2};
  background: ${(props) => props.theme.colors.primary.darker};
  @media (max-width: 600px) {
    padding: 1.6rem 2rem;
    justify-content: center;
    text-align: center;
  }
`
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const FooterContent = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primary.light};
`

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const FooterIconLink = styled.a`
  color: ${(props) => props.theme.colors.primary.light};
  font-size: 1.1rem;
  transition: color 0.2s ease;
  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`
