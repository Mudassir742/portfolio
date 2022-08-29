//react
import React from "react";
//components
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Services from "./components/services/Services";
import Technology from "./components/technology/Technology";
//theme
import ThemeProvider from "./theme";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        {/* <Banner />
        <Services />
        <Technology /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
