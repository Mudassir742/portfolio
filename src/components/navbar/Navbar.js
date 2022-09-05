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
  Image,
  TopBar,
  MiddleBar,
  BottomBar,
} from "./Navbar.styled";
import { useTheme } from "styled-components";
import LogoIcon from "../../asset/icons/logo.png";

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
      <Logo>
        <Image src={LogoIcon} alt="logo" />
      </Logo>
      <NavigationWrapper showMenu={showMenu}>
        <LinkContainer showMenu={showMenu}>
          <StyledLink href="/" active={true}>
            Home
          </StyledLink>

          <StyledLink href="/">Services</StyledLink>

          <StyledLink href="/">Projects</StyledLink>

          <StyledLink href="/">Contact</StyledLink>
        </LinkContainer>
      </NavigationWrapper>

      <NavIcon onClick={() => setShowMneu(!showMenu)}>
        {/* {!showMenu ? (
          <FiMenu size="40px" color={theme.colors.primary.main} />
        ) : (
          <GiCrossedBones size="40px" color={theme.colors.primary.main} />
        )} */}
        <TopBar showMenu={showMenu}></TopBar>
        <MiddleBar showMenu={showMenu}></MiddleBar>
        <BottomBar showMenu={showMenu}></BottomBar>
      </NavIcon>
    </NavbarContainer>
  );
};

export default Navbar;
