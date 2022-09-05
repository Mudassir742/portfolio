import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  background: ${(props) => props.theme.colors.primary.dark};
  padding: 8rem 6rem 4rem 6rem;
  @media (max-width: 768px) {
    padding: 6rem 4rem 4rem 4rem;
  }
  @media (max-width: 385px) {
    padding: 6rem 2rem 4rem 2rem;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const IntroSection = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 3rem;
  @media (max-width: 1030px) {
    width: 45%;
  }
  @media (max-width: 875px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const IntroContentSection = styled.div``;

export const SocialLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  height: 100%;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const Partition = styled.span`
  border-right: 1px solid ${(props) => props.theme.colors.primary.main};
  height: 60px;
  display: inline-block;
  margin-top: 0.6rem;
`;
export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 2px solid ${(props) => props.theme.colors.primary.main};
  margin-bottom: 0.8rem;
`;
export const SocialLink = styled.a`
  transform: rotate(-90deg);
  margin: 1.5rem 0;
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const Typo = styled.span`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary.main};
  letter-spacing: 2px;
  @media (max-width: 1030px) {
    font-size: 1.5rem;
  }
  @media (max-width: 530px) {
    font-size: 1.2rem;
  }
`;
export const Intro = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primary.contrastText};
  letter-spacing: 2px;
  @media (max-width: 1030px) {
    font-size: 1.5rem;
  }
  @media (max-width: 530px) {
    font-size: 1.2rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const Line = styled.div`
  width: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary.main};
`;

export const Slogan = styled.h2`
  font-size: 2.5rem;
  margin: 2.5rem 0;
  color: ${(props) => props.theme.colors.primary.main};
  letter-spacing: 2px;
  @media (max-width: 1030px) {
    font-size: 2rem;
  }
  @media (max-width: 530px) {
    font-size: 1.5rem;
  }
`;
export const Technology = styled.span`
  font-size: 1.8rem;
  display: block;
  color: white;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  @media (max-width: 1030px) {
    font-size: 1.4rem;
  }
  @media (max-width: 530px) {
    font-size: 1.1rem;
  }
`;

export const IntroDetail = styled.span`
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.6rem;
  max-width: 450px;
  width: 100%;
  display: block;
  color: white;
  letter-spacing: 1px;
  @media (max-width: 1030px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    max-width: 600px;
  }
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
export const HeroButton = styled.button`
  font-size: 1.2rem;
  margin-top: 3rem;
  width: 150px;
  padding: 0.8rem 0;
  cursor: pointer;
  border: transparent;
  border-radius: 6px;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 0px 5px 10px 0px rgba(0, 189, 149, 0.4);
  background: ${(props) => props.theme.colors.primary.main};
  &:hover {
  }
`;

export const PhotoContainer = styled.div`
  height: 400px;
  width: 50%;
  position: relative;
  display: flex;
  padding: 2rem 0.8rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 1030px) {
    width: 55%;
  }
  @media (max-width: 875px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    margin: 1.2rem 0;
    width: 100%;
    height: 350px;
    justify-content: center;
  }
`;

export const PhotoFrame = styled.div`
  max-width: 280px;
  max-height: 320px;
  border: 2px solid black;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: relative;
`;

export const PhotoBackground = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  border-radius: 15px;
  position: absolute;
  top: 30px;
  left: 30px;
`;

export const QouteCard = styled.h5`
  font-family: "Square Peg", cursive;
  position: absolute;
  font-size: 1.6rem;
  top: 15px;
  right: 0;
  z-index: 20;
  max-width: 230px;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
    top: 20px;
    max-width: 200px;
  }
`;
