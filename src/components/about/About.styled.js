import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100vw;
  max-width: 100%;
  padding: 6rem 6rem 5rem 6rem;
  background: ${({ theme }) => theme.colors.primary.dark};
  @media (max-width: 900px) {
    padding: 5rem 3rem;
  }
  @media (max-width: 530px) {
    padding: 4rem 1.6rem;
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

export const AboutGrid = styled.div`
  display: flex;
  gap: 4.5rem;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const AboutText = styled.div`
  width: 42%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: 1rem;
  line-height: 1.85rem;
  margin-bottom: 1.4rem;
`;

export const InfoList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.primary.lighter};
`;

export const InfoLabel = styled.span`
  min-width: 100px;
  color: ${({ theme }) => theme.colors.primary.light};
  font-weight: 500;
`;

export const HighlightGrid = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled.div`
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
  border-radius: 12px;
  padding: 1.8rem;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 108, 246, 0.12);
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.2rem;
  margin-bottom: 1.1rem;
`;

export const HighlightTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary.lighter};
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
`;

export const HighlightDetail = styled.p`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: 0.88rem;
  line-height: 1.5rem;
`;
