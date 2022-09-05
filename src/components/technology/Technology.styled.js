import styled from "styled-components";

export const TechnologySection = styled.section`
  padding: 2rem 5rem;
  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`;
export const SectionHeading = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem 0 3rem 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary.lighter};
  letter-spacing: 1px;
  @media (max-width: 872px) {
    font-size: 2.5rem;
    margin-top: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TechContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const TechCard = styled.div`
  background: ${({ theme }) => theme.colors.primary.darker};
  padding: 2.1rem 1.5rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  box-shadow: 0px 2px 5px 2px rgba(123, 124, 125, 0.4);
  @media (max-width: 872px) {
    padding: 2rem 1.2rem;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: auto;
  @media (max-width: 872px) {
    width: 40px;
  }
`;

export const TechInfo = styled.div``;

export const TechHeading = styled.span`
  font-size: 2rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  @media (max-width: 872px) {
    font-size: 1.6rem;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const TechDetail = styled.p`
  margin-top: 0.9rem;
  line-height: 1.5rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  @media (max-width: 872px) {
    font-size: 0.9rem;
  }
`;
