import React from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import './styleSheet/navbar.css';
import Projects from './component/Projects';
import Skill from './component/Skill';
import Leetcode from './component/Leetcode';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Leetcode/>
      <Skill/>
      {/* <Projects/>
      <Skill/> */}
    </>
  )
}

export default App