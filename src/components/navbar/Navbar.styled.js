import styled from "styled-components";

export const NavbarContainer = styled.header`
    background:${(props) => props.theme.colors.primary.dark};
    position: fixed;
    width:100vw;
    max-width:100%;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => (props.isStickey ? "1.6rem 5rem;" : "2rem 6rem;")}
    transition: top,left,padding.6s;
    z-index: 1000;
    @media (max-width: 768px) {
      padding: ${(props) => (props.isStickey ? "1.4rem 3rem;" : "1.8rem 4rem;")}
    }
    @media (max-width: 530px) {
      padding: ${(props) =>
        props.isStickey ? "1.4rem 2rem;" : "1.8rem 2.5rem;"}
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
  background: ${(props) => props.theme.colors.primary.dark};
  @media (max-width: 768px) {
    width: 63vw;
    height: 100vh;
    position: fixed;
    transition: ${({ showMenu }) =>
      showMenu ? "transform .4s ease-in" : "transform .55s ease-in"};
    transform: ${({ showMenu }) =>
      showMenu ? "translateX(0%)" : "translateX(-110%)"};
    left: 0;
    top: 0;
    z-index: 100;
    background: ${(props) => props.theme.colors.primary.darker};
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  posistion: relative;
  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    background: ${(props) => props.theme.colors.primary.dark};
    transform: ${({ showMenu }) =>
      showMenu ? "translateX(0%)" : "translateX(-110%)"};
    transition: ${({ showMenu }) =>
      showMenu
        ? "transform .4s cubic-bezier(0, 1, 0.76, 0.97)"
        : "transform .2s cubic-bezier(0, 1, 0.76, 0.97)"};
    border-right: 22px solid ${(props) => props.theme.colors.background.bg1};
  }
`;

export const StyledLink = styled.a`
  padding: 0.6rem 0;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.light};
  text-decoration: none;
  position: relative;
  transition: all 0.7s ease-in-out;
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
`;

export const NavIcon = styled.div`
  display: none;
  width: 35px;
  height: 35px;
  overlfow: hidden;
  position: relative;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

export const TopBar = styled.div`
  position: relative;
  transition: width 1s ease;
  transition: transform 0.6s ease;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ showMenu }) => (showMenu ? "141%" : "50%")};
    transform: ${({ showMenu }) =>
      showMenu ? "rotate(45deg)" : "rotate(0deg)"};
    transform-origin: 0% 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary.main};
    transition: width 1s ease;
    transition: transform 0.6s ease;
  }
`;
export const MiddleBar = styled.div`
  transition: width 1s ease;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ showMenu }) => (showMenu ? "0%" : "100%")};
    height: 2px;
    background: ${({ theme }) => theme.colors.primary.main};
    transition: width 1s ease;
  }
`;
export const BottomBar = styled.div`
transition: width 1s ease;
transition: transform 0.6s ease;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ showMenu }) => (showMenu ? "140%" : "50%")};
    transform: ${({ showMenu }) =>
      showMenu ? "rotate(-45deg)" : "rotate(0deg)"};
    transform-origin: 0% 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary.main};
    transition: width 1s ease;
    transition: transform 0.6s ease;
  }
`;
