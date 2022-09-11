import styled from "styled-components";

export const TestimonialSection = styled.section`
  width: 100vw;
  position: relative;
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
  margin: 2rem 0 6rem 0;
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
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 45px;
  @media (max-width: 930px) {
    grid-gap: 30px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 860px) {
    grid-gap: 45px;
  }
`;
export const TestimonialCard = styled.div`
  position: relative;
  @media (max-width: 930px) {
    margin-bottom: 3rem;
  }
`;
export const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 6px;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 860px) {
    padding: 1.8rem 2.5rem;
  }
  @media (max-width: 600px) {
    padding: 1.6rem 2.2rem;
  }
  @media (max-width: 390px) {
    padding: 1.4rem 1.8rem;
  }
`;
export const RearCard = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  background: #202022;
  border-radius: 6px;
  transform: rotate(-10deg);
  @media (max-width: 930px) {
    transform: rotate(-6deg);
  }
`;

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
