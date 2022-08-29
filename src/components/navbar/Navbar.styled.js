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
`;

export const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 1px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
export const StyledLink = styled.a`
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary.light
      : props.theme.colors.primary.contrastText};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary.light};
    transition: color 0.2s ease-in-out;
  }
`;
