import styled from "styled-components";

//main component styles
export const ProjectSection = styled.section`
  padding: 6rem 0;
  width: 100vw;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.primary.darker};
`;

export const Kicker = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

export const SectionHeading = styled.p`
  width: 100%;
  text-align: center;
  margin: 0 0 4rem 0;
  font-size: 2.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.lighter};
  letter-spacing: -0.5px;
  @media (max-width: 872px) {
    font-size: 2.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

//projectcard styles
export const ProjectContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;
export const ProjectImageContainer = styled.div`
  width: 62%;
  background: ${({ theme }) => theme.colors.primary.darker};
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 100%;
`;
export const ProjectInfoContainer = styled.div`
  width: 38%;
  padding: 4rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const ProjectHeading = styled.p`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary.main};
  @media (max-width: 970px) {
    font-size: 1.8rem;
  }
`;

export const ProjectDetail = styled.p`
  margin: 3rem 0;
  font-size: 1.062rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  text-align: center;
  @media (max-width: 870px) {
    font-size: 1rem;
    margin: 1.8rem 0;
    line-height: 1.6rem;
  }
`;

export const ProjectButton = styled.button`
  font-size: 1.2rem;
  width: 180px;
  padding: 0.8rem 0;
  cursor: pointer;
  border: transparent;
  border-radius: 5px;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  transition: all 0.3s ease;
  background: ${(props) => props.theme.colors.primary.main};
  &:hover {
    box-shadow: 0px 8px 20px 0px rgba(124, 108, 246, 0.4);
    transform: translateY(-2px);
  }
  @media (max-width: 970px) {
    font-size: 1rem;
    width: 150px;
    font-weight: normal;
    letter-spacing: 1px;
  }
  @media (max-width: 530px) {
    width: 150px;
  }
`;
