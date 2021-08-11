import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Services from "./components/services/Services";
import Technology from "./components/technology/Technology";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <Technology />
    </div>
  );
}

export default App;
