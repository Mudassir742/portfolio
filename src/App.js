//react
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
//components
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Services from "./components/services/Services";
import Technology from "./components/technology/Technology";
import Project from "./components/projects/Project";
import Testimonials from "./components/testimonials/Testimonials";
//theme
import ThemeProvider from "./theme";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <Navbar />
        <Banner />
        <Services />
        <Technology />
        <Project />
        <Testimonials />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
