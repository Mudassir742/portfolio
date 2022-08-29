import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary.dark};
  padding: 8rem 6rem 2rem 6rem;
`;

export const ContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const IntroSection = styled.div`
  width: 60%;
`;
export const Introduction = styled.div``;
export const Typo = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary.main};
  letter-spacing: 2px;
  @media (max-width: 1030px) {
    font-size: 1.5rem;
  }
`;
export const Intro = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary.contrastText};
  letter-spacing: 2px;
  @media (max-width: 1030px) {
    font-size: 1.5rem;
  }
`;
export const DeveloperName = styled.h2`
  font-size: 4rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.primary.main};
  letter-spacing: 2px;
  @media (max-width: 1030px) {
    font-size: 2.5rem;
  }
`;
export const Technology = styled.h5`
  font-size: 2rem;
  color: white;
  letter-spacing: 2px;
`;
export const HeroButton = styled.button`
  font-size: 1.2rem;
  margin-top: 3rem;
  width: 150px;
  padding: 0.8rem 0;
  cursor: pointer;
  border: transparent;
  border-radius: 10px;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  box-shadow: 0px 5px 10px 0px rgba(0, 189, 149, 0.4);
  background: ${(props) => props.theme.colors.primary.main};
  &:hover {
  }
`;

export const PhotoContainer = styled.div`
  height: 100%;
  width: 40%;
  max-width: 360px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid black;
  aspect-ratio: 1/2;
`;

export const PhotoBackground = styled.div`
  background: ${(props) => props.theme.colors.primary.main};
  max-width:360px;
  max-height:320px;
  width:100%;
  height:100%;
  box-sizing:border-box;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
`;
