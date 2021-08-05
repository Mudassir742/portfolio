import React, { useState, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";

import "./Navbar.css";

const Navbar = () => {
  const [style, setStyle] = useState("");

  const [showMenu, setShowMneu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setStyle("sticky");
      else setStyle("");
    });
  }, []);

  const toggleMenu = () =>{
      setShowMneu(!showMenu);
  }

  return (
    <header className={style}>
      <div className="logo">Coder</div>
      <ul className={showMenu ? "show-menu" : "hide-menu"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>{!showMenu ? <FaHamburger /> : <GiCrossedBones />}</div>
    </header>
  );
};

export default Navbar;
