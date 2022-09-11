import styled from "styled-components";

export const TestimonialSection = styled.section`
  width: 100vw;
  padding: 2rem 5rem 5rem 5rem;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.primary.darker};
  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`;
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
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 40px;
@media (max-width: 930px) {
  grid-gap: 30px;
}
@media (max-width: 860px) {
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 45px;
}
`;
export const TestimonialCard = styled.div`
  position: relative;
`;
export const FrontCard = styled.div`

`;
export const RearCard = styled.div``;

export const QoutationMark = styled.div``;

export const ClientName = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem 0 0.5rem 0;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  @media (max-width: 860px) {
    font-size: 1.2rem;
  }
`;
export const Feedback = styled.p`
  text-align: center;
  margin: 1rem 0;
  line-height: 1.5rem;
  letter-spacing: 1px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary.lighter};
`;
