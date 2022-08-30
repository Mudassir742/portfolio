import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { GiCrossedBones } from "react-icons/gi";
import {
  LinkContainer,
  Logo,
  NavbarContainer,
  NavIcon,
  NavigationWrapper,
  StyledLink,
} from "./Navbar.styled";
import { useTheme } from "styled-components";
//import "./Navbar.css";

const Navbar = () => {
  const theme = useTheme();
  const [isStickey, setIsStickey] = useState(false);
  const [showMenu, setShowMneu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setIsStickey(true);
      else setIsStickey(false);
    });
  }, []);

  return (
    <NavbarContainer isStickey={isStickey}>
      <Logo>Coder</Logo>
      <NavigationWrapper showMenu={showMenu}>
        <LinkContainer>
          <StyledLink href="/" active={true}>
            Home
          </StyledLink>

          <StyledLink href="/">Services</StyledLink>

          <StyledLink href="/">Projects</StyledLink>

          <StyledLink href="/">Contact</StyledLink>
        </LinkContainer>
      </NavigationWrapper>

      <NavIcon onClick={()=>setShowMneu(!showMenu)}>
        {!showMenu ? (
          <FiMenu size="40px" color={theme.colors.primary.light} />
        ) : (
          <GiCrossedBones size="40px" color={theme.colors.primary.light} />
        )}
      </NavIcon>
    </NavbarContainer>
  );
};

export default Navbar;
