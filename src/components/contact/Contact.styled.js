import styled from "styled-components";

export const ContactSection = styled.section`
  width: 100vw;
  max-width: 100%;
  padding: 6rem 6rem 6rem 6rem;
  background: ${({ theme }) => theme.colors.primary.darker};
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 400px;
    background: radial-gradient(
      ellipse,
      rgba(124, 108, 246, 0.16) 0%,
      rgba(124, 108, 246, 0) 70%
    );
    pointer-events: none;
  }
  @media (max-width: 900px) {
    padding: 5rem 3rem;
  }
  @media (max-width: 530px) {
    padding: 4rem 1.6rem;
  }
`;

export const Kicker = styled.p`
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

export const SectionHeading = styled.p`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 0 auto 1.2rem auto;
  font-size: 2.6rem;
  font-weight: 700;
  max-width: 640px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  letter-spacing: -0.5px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionSubtext = styled.p`
  position: relative;
  text-align: center;
  max-width: 560px;
  margin: 0 auto 3.5rem auto;
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: 1rem;
  line-height: 1.7rem;
`;

export const ContactGrid = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.4rem;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.9rem;
  padding: 2rem 1.4rem;
  border-radius: 14px;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const IconWrap = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 108, 246, 0.12);
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.25rem;
`;

export const ContactLabel = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.primary.light};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const ContactValue = styled.span`
  font-size: 0.92rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.lighter};
  word-break: break-word;
`;

export const CTAWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
  padding: 0.95rem 2.2rem;
  cursor: pointer;
  border: transparent;
  border-radius: 8px;
  color: white;
  letter-spacing: 0.4px;
  font-weight: 600;
  background: ${(props) => props.theme.colors.primary.main};
  transition: all 0.25s ease;
  &:hover {
    box-shadow: 0px 8px 24px 0px rgba(124, 108, 246, 0.35);
    transform: translateY(-2px);
  }
`;
