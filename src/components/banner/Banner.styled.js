import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.colors.primary.darker};
  padding: 10rem 6rem 6rem 6rem;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -10%;
    width: 620px;
    height: 620px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(124, 108, 246, 0.25) 0%,
      rgba(124, 108, 246, 0) 70%
    );
    pointer-events: none;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -20%;
    left: -8%;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(52, 209, 191, 0.14) 0%,
      rgba(52, 209, 191, 0) 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 8rem 4rem 4rem 4rem;
  }
  @media (max-width: 530px) {
    padding: 7rem 1.6rem 3rem 1.6rem;
  }
`;

export const ContentSection = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
`;

export const IntroSection = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  @media (max-width: 900px) {
    margin-top: 2.5rem;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const IntroContentSection = styled.div`
  width: 100%;
`;

export const SocialLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
  padding-top: 0.4rem;
  @media (max-width: 900px) {
    flex-direction: row;
  }
`;

export const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.background.bg2};
  color: ${(props) => props.theme.colors.primary.light};
  font-size: 1.1rem;
  transition: all 0.25s ease;
  &:hover {
    color: ${(props) => props.theme.colors.primary.contrastText};
    border-color: ${(props) => props.theme.colors.primary.main};
    background: ${(props) => props.theme.colors.primary.main};
    transform: translateY(-3px);
  }
`;

export const SocialDivider = styled.span`
  width: 1px;
  height: 24px;
  background: ${(props) => props.theme.colors.background.bg2};
  @media (max-width: 900px) {
    width: 24px;
    height: 1px;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(124, 108, 246, 0.35);
  background: rgba(124, 108, 246, 0.08);
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  font-weight: 600;
  margin-bottom: 1.6rem;
`;

export const BadgeDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.accent.teal};
  box-shadow: 0 0 0 3px rgba(52, 209, 191, 0.25);
`;

export const Intro = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;
  color: ${(props) => props.theme.colors.primary.lighter};
  letter-spacing: -0.5px;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 2.4rem;
  }
  @media (max-width: 530px) {
    font-size: 1.9rem;
  }
`;

export const NameHighlight = styled.span`
  background: linear-gradient(
    100deg,
    ${(props) => props.theme.colors.primary.main} 0%,
    ${(props) => props.theme.colors.accent.teal} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1rem;
  min-height: 2.2rem;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const Line = styled.div`
  width: 34px;
  border-bottom: 2px solid ${(props) => props.theme.colors.accent.teal};
`;

export const Typo = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary.light};
  letter-spacing: 0.3px;
  @media (max-width: 530px) {
    font-size: 1rem;
  }
`;

export const Slogan = styled.p`
  font-size: 1.05rem;
  line-height: 1.8rem;
  margin: 1.8rem 0 0 0;
  max-width: 540px;
  color: ${(props) => props.theme.colors.primary.light};
  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 530px) {
    font-size: 0.95rem;
    line-height: 1.6rem;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 2.4rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const HeroButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
  padding: 0.9rem 1.8rem;
  cursor: pointer;
  border: 1px solid transparent;
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

export const HeroButtonOutline = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
  padding: 0.9rem 1.8rem;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.background.bg2};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.primary.lighter};
  letter-spacing: 0.4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  &:hover {
    border-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.primary.main};
    transform: translateY(-2px);
  }
`;

export const StatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 3.4rem;
  padding-top: 2.2rem;
  border-top: 1px solid ${(props) => props.theme.colors.background.bg2};
  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.8rem 2.4rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatNumber = styled.span`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary.lighter};
  @media (max-width: 530px) {
    font-size: 1.4rem;
  }
`;

export const StatLabel = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.primary.light};
  letter-spacing: 0.3px;
  margin-top: 0.2rem;
`;

export const PhotoContainer = styled.div`
  height: 340px;
  width: 320px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    margin: 0 0 1rem 0;
  }
  @media (max-width: 530px) {
    height: 280px;
    width: 260px;
  }
`;

export const PhotoFrame = styled.div`
  max-width: 280px;
  max-height: 320px;
  border: 2px solid ${(props) => props.theme.colors.primary.main};
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: relative;
  @media (max-width: 530px) {
    max-height: 280px;
    max-width: 240px;
  }
`;

export const PhotoBackground = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background.bg2};
  border-radius: 20px;
  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;

export const ProfilePhoto = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
`;

export const AvailabilityChip = styled.div`
  position: absolute;
  bottom: -18px;
  left: -8px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.1rem;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.primary.dark};
  border: 1px solid ${(props) => props.theme.colors.background.bg2};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  font-size: 0.85rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary.lighter};
  white-space: nowrap;
  @media (max-width: 530px) {
    font-size: 0.75rem;
    padding: 0.6rem 0.9rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
