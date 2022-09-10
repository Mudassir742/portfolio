import styled from "styled-components";

export const TestimonialSection = styled.section`
`
export const SectionHeading = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem 0 4rem 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary.lighter};
  letter-spacing: 1px;
  @media (max-width: 872px) {
    font-size: 2.2rem;
    margin-top: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const TestimonialContainer = styled.div`
`