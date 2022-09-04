import styled from "styled-components";

//main component styles
export const ProjectSection = styled.section`
  margin: 6rem 0;
  width: 100vw;
  max-width: 100%;
`;

export const SectionHeading = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem 0 4rem 0;
  font-size: 3rem;
  color: white;
  letter-spacing: 1px;
  @media (max-width: 872px) {
    font-size: 2.2rem;
    margin-top: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

//projectcard styles
export const ProjectContainer = styled.section`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;
export const ProjectImageContainer = styled.div`
  width: 60%;
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
  width: 40%;
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
  width: 150px;
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
    box-shadow: 0px 5px 10px 0px rgba(0, 189, 149, 0.4);
  }
  @media (max-width: 970px) {
    font-size: 1rem;
    font-weight: normal;
  }
`;
