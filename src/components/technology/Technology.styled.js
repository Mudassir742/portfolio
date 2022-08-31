import styled from "styled-components";

export const TechnologySection = styled.section`
  padding: 2rem 6rem;
`;
export const SectionHeading = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem 0 3rem 0;
  font-size: 3rem;
  color: white;
  letter-spacing: 1px;
`;

export const TechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const TechContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const TechCard = styled.div`
  background: ${({ theme }) => theme.colors.background.bg1};
  padding: 2.1rem 1.5rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  box-shadow: 0px 2px 5px 5px rgba(217, 217, 217, 0.2);
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  height: auto;
`;

export const TechInfo = styled.div``;

export const TechHeading = styled.span`
  font-size: 2rem;
  letter-spacing: 1px;
`;
export const TechDetail = styled.p`
  margin-top: 0.9rem;
  line-height: 1.5rem;
  letter-spacing: 1px;
`;
