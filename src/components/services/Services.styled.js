import styled from "styled-components";

export const ServiceSection = styled.section`
  width: 100vw;
  padding: 5rem 5rem 5rem 5rem;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.primary.dark};
  @media (max-width: 768px) {
    padding: 5rem 3rem;
  }
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
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  max-width: 1100px;
  margin: 0 auto;
  grid-gap: 32px;
  @media (max-width: 930px) {
    grid-gap: 24px;
  }
  @media (max-width: 860px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 24px;
    max-width: 420px;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary.darker};
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
  color: ${({ theme }) => theme.colors.primary.lighter};
  padding: 2.4rem 2rem;
  border-radius: 12px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary.main};
  transition: transform 0.3s ease, border-color 0.3s ease;
  position: relative;
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
  @media (max-width: 600px) {
    padding: 2rem 1.6rem;
  }
`;

export const IconWrap = styled.div`
  width: 68px;
  height: 68px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(124, 108, 246, 0.12);
  margin-bottom: 1.6rem;
`;

export const Icon = styled.div`
  width: 34px;
  height: 34px;
  background: ${({ theme }) => theme.colors.primary.main};
  -webkit-mask-image: url(${(props) => props.$src});
  mask-image: url(${(props) => props.$src});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
`;

export const ServiceHeading = styled.p`
  width: 100%;
  min-height: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin: 0 0 0.9rem 0;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.lighter};
  @media (max-width: 860px) {
    font-size: 1.15rem;
  }
`;
export const ServiceDetail = styled.p`
  text-align: center;
  margin: 0;
  line-height: 1.6rem;
  letter-spacing: 0.2px;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.primary.light};
`;
