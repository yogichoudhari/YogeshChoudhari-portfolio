import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Social from './components/Social'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
const App = ()=>{
  return(
    <>
       <Navbar/>
       <Home/>
       <Social/>
       <Projects/>
       <AboutMe/>
    </>
  )
}

export default App;