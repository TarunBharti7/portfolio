import React from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import './styleSheet/navbar.css';
import './styleSheet/home.css'
import Projects from './component/Projects';
import './styleSheet/projects.css'
import Skill from './component/Skill';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Projects/>
      <Skill/>
    </>
  )
}

export default App