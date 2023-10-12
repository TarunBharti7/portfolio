import React from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import './styleSheet/navbar.css';
import './styleSheet/home.css'
import Projects from './component/Projects';
import './styleSheet/projects.css'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Projects/>


    </>
  )
}

export default App