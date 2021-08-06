import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner';
import Services from './components/services/Services';

import "./App.css";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Services/>
    </div>
  );
}

export default App;
