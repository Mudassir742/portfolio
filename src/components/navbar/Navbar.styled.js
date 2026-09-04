import styled from "styled-components";

export const NavbarContainer = styled.header`
    background:${(props) => (props.isStickey ? props.theme.colors.primary.dark : "transparent")};
    box-shadow: ${(props) => (props.isStickey ? "0 4px 24px rgba(0,0,0,0.25)" : "none")};
    position: fixed;
    width:100vw;
    max-width:100%;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => (props.isStickey ? "1.2rem 4rem;" : "1.8rem 4rem;")}
    transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
    z-index: 1000;
    @media (max-width: 992px) {
      background: ${(props) => props.theme.colors.primary.dark};
      padding: ${(props) => (props.isStickey ? "1.2rem 3rem;" : "1.4rem 3rem;")}
    }
    @media (max-width: 530px) {
      padding: ${(props) =>
        props.isStickey ? "1.1rem 1.6rem;" : "1.3rem 1.6rem;"}
    }
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  @media (max-width: 500px) {
    gap: 0.8rem;
  }
`;

export const LogoText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  letter-spacing: 1px;
  font-family: "Nova Round", cursive;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const NavigationWrapper = styled.nav`
  background: transparent;
  @media (max-width: 992px) {
    width: 100vw;
    height: 100vh;
    position: fixed;

    transform: ${({ showMenu }) =>
      showMenu ? "translateY(0%)" : "translateY(-110%)"};
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
    left: 0;
    top: 0;
    z-index: 100;
    background: ${(props) => props.theme.colors.primary.darker};
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;
  position: relative;
  @media (max-width: 1100px) {
    gap: 1.3rem;
  }
  @media (max-width: 992px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 1.6rem;
    background: ${(props) => props.theme.colors.primary.darker};
    transform: ${({ showMenu }) =>
      showMenu ? "translateY(0%)" : "translateY(-110%)"};
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  }
`;

export const StyledLink = styled.a`
  padding: 0.6rem 0;
  font-size: 0.94rem;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.light};
  text-decoration: none;
  position: relative;

  transition: opacity 0.3s ease-out;
  transition: width background 0.7s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${(props) => (props.active ? "100%" : "0%")};
    height: 2px;
    background: ${(props) => props.theme.colors.primary.main};
    transition: all 0.7s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary.main};
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: 992px) {
    font-size: 1.2rem;
    opacity: ${({ showMenu }) => (showMenu ? "1" : "0")};
  }
`;

export const ResumeButton = styled.a`
  padding: 0.55rem 1.3rem;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: white;
  text-decoration: none;
  border-radius: 7px;
  background: ${(props) => props.theme.colors.primary.main};
  transition: all 0.25s ease;
  &:hover {
    box-shadow: 0px 6px 18px 0px rgba(124, 108, 246, 0.4);
    transform: translateY(-2px);
  }
  @media (max-width: 992px) {
    opacity: ${({ showMenu }) => (showMenu ? "1" : "0")};
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }
`;

export const NavIcon = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  @media (max-width: 992px) {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 3rem;
  }
  @media (max-width: 530px) {
    right: 1.6rem;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: auto;
  @media (max-width: 872px) {
    width: 40px;
  }
  @media (max-width: 500px) {
    width: 30px;
  }
`;

export const LogoMark = styled.div`
  width: 42px;
  height: 42px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary.main} 0%,
    ${(props) => props.theme.colors.accent.teal} 100%
  );
  -webkit-mask-image: url(${(props) => props.$src});
  mask-image: url(${(props) => props.$src});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  @media (max-width: 872px) {
    width: 34px;
    height: 34px;
  }
  @media (max-width: 500px) {
    width: 28px;
    height: 28px;
  }
`;

export const TopBar = styled.div`
  width: 15px;
  height: 2px;
  background: ${(props) => props.theme.colors.primary.main};
  margin-bottom: 4px;
  transition: transform 0.2s ease;
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(1px) rotate(45deg)" : "rotate(0deg)"};
`;
export const MiddleBar = styled.div`
  width: 30px;
  height: 2px;
  margin-bottom: 4px;
  background: ${(props) => props.theme.colors.primary.main};
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(0px) rotate(-45deg)" : "rotate(0deg)"};
  transition: transform 0.2s ease;
`;
export const BottomBar = styled.div`
  width: 15px;
  height: 2px;
  background: ${(props) => props.theme.colors.primary.main};
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(-2px) rotate(45deg)" : "rotate(0deg)"};
  float: right;
  margin-bottom: 4px;
  transition: transform 0.2s ease;
`;
