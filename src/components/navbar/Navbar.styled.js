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
    @media (max-width: 786px) {
     position:relative;
    }
`;

export const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 1px;
`;
export const NavigationWrapper = styled.nav`
  background: ${(props) => props.theme.colors.primary.dark};
  @media (max-width: 768px) {
    width: 63vw;
    height: 100vh;
    position: fixed;
    transition: transform .7s ease-in;
    transform:${({showMenu})=>showMenu ? "translateX(0%)" : "translateX(-110%)" } ;
    left: 0;
    top: 0;
    z-index:100;
    background: ${(props) => props.theme.colors.primary.darker};
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    background: ${(props) => props.theme.colors.primary.dark};
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
      ? props.theme.colors.primary.light
      : props.theme.colors.primary.contrastText};
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
    background: ${(props) => props.theme.colors.primary.light};
    transition: all 0.7s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary.light};
  }
  &:hover:before {
    width: 100%;
  }
`;

export const NavIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;
