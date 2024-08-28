//react
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

//viwes
import Home from './views/Home/Home'
import Project from './views/Project/Project'

//theme
import ThemeProvider from './theme'

import './App.css'

function App() {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:projectId" element={<Project/>} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default App
