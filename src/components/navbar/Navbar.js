import React, { useState, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";
import {
  LinkContainer,
  Logo,
  NavbarContainer,
  StyledLink,
} from "./Navbar.styled";
import { useTheme } from "styled-components";
//import "./Navbar.css";

const Navbar = () => {
  const [isStickey, setIsStickey] = useState(false);
  const theme = useTheme();
  console.log(theme);
  const [showMenu, setShowMneu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setIsStickey(true);
      else setIsStickey(false);
    });
  }, []);

  const toggleMenu = () => {
    setShowMneu(!showMenu);
  };

  return (
    <NavbarContainer isStickey={isStickey}>
      <Logo>Coder</Logo>
      <LinkContainer>
        <StyledLink href="/" active={true}>
          Home
        </StyledLink>

        <StyledLink href="/">Services</StyledLink>

        <StyledLink href="/">Projects</StyledLink>

        <StyledLink href="/">Contact</StyledLink>
      </LinkContainer>

      {/* <div className="menu-icon" onClick={toggleMenu}>
          {!showMenu ? <FaHamburger /> : <GiCrossedBones />}
        </div> */}
    </NavbarContainer>
  );
};

export default Navbar;
