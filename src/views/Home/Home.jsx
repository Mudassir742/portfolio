import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Seo from '../../components/seo/Seo'
import Banner from '../../components/banner/Banner'
import About from '../../components/about/About'
import Experience from '../../components/experience/Experience'
import Services from '../../components/services/Services'
import Technology from '../../components/technology/Technology'
import Projects from '../../components/projects/Projects'
import Contact from '../../components/contact/Contact'

const Home = () => {
  const location = useLocation()

  // Cross-page nav (e.g. clicking "About" from a project detail page) routes
  // here with `state.scrollTo` set, since the target section only exists on
  // this page. Scroll to it once we've actually mounted and rendered.
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.querySelector(location.state.scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  return (
    <>
      <Seo />
      <Banner />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Technology />
      <Contact />
    </>
  )
}

export default Home
