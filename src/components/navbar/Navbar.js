import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LinkContainer,
  Logo,
  NavbarContainer,
  NavIcon,
  NavigationWrapper,
  StyledLink,
  ResumeButton,
  LogoMark,
  TopBar,
  MiddleBar,
  BottomBar,
} from "./Navbar.styled";
import LogoIcon from "../../asset/icons/logo.png";

const RESUME_URL = `${process.env.PUBLIC_URL}/Mudassir_Waheed_Resume.pdf`;

const navLinks = [
  { label: "Home", target: "#home" },
  { label: "About", target: "#about" },
  { label: "Experience", target: "#experience" },
  { label: "Projects", target: "#projects" },
  { label: "Skills", target: "#technology" },
  { label: "Contact", target: "#contact" },
];

const Navbar = () => {
  const [isStickey, setIsStickey] = useState(false);
  const [showMenu, setShowMneu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setIsStickey(true);
      else setIsStickey(false);
    });
  }, []);

  // On the homepage, a nav link just scrolls to its section. Anywhere else
  // (a project detail page) that section doesn't exist on the page, so we
  // route back to "/" and hand off the target via router state - Home picks
  // it up in a useEffect once it has actually mounted.
  const handleNavigation = (sectionId) => {
    setShowMneu(false)
    if (onHome) {
      const el = document.querySelector(sectionId)
      if (el) el.scrollIntoView({ behavior: "smooth" })
      else window.location.href = sectionId
    } else {
      navigate("/", { state: { scrollTo: sectionId } })
    }
  }

  return (
    <NavbarContainer isStickey={isStickey}>
      <Logo onClick={() => handleNavigation("#home")}>
        <LogoMark $src={LogoIcon} role="img" aria-label="logo" />
      </Logo>
      <NavigationWrapper showMenu={showMenu}>
        <LinkContainer showMenu={showMenu}>
          {navLinks.map(({ label, target }) => (
            <StyledLink
              key={label}
              onClick={() => handleNavigation(target)}
              active={onHome && target === "#home"}
              showMenu={showMenu}
            >
              {label}
            </StyledLink>
          ))}

          <ResumeButton
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowMneu(false)}
            showMenu={showMenu}
          >
            Resume
          </ResumeButton>
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
