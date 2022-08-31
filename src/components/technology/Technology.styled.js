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

export const TechCard = styled.div`
  background: ${({ theme }) => theme.colors.background.bg1};
  padding:1.5rem;
  border-radius:5px;
  color:white;
`;
