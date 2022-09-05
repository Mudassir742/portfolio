import React, { useState, useEffect } from "react";
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
import LogoIcon from "../../asset/icons/logo.png";

const Navbar = () => {
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
          <StyledLink href="/" active={true} showMenu={showMenu}>
            Home
          </StyledLink>

          <StyledLink href="/" showMenu={showMenu}>
            Services
          </StyledLink>

          <StyledLink href="/" showMenu={showMenu}>
            Projects
          </StyledLink>

          <StyledLink href="/" showMenu={showMenu}>
            Contact
          </StyledLink>
        </LinkContainer>
      </NavigationWrapper>

      <NavIcon onClick={() => setShowMneu(!showMenu)}>
        <TopBar showMenu={showMenu}></TopBar>
        <MiddleBar showMenu={showMenu}></MiddleBar>
        <BottomBar showMenu={showMenu}></BottomBar>
      </NavIcon>
    </NavbarContainer>
  );
};

export default Navbar;
