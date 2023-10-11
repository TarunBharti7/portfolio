import React, { useState } from 'react'
import {FiMenu} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

    const [active , setActive] = useState("");

    const toggleNavbar = () => {
        if(active == "active"){
            setActive("")
        }else{
            setActive("active")
        }
    }

    const removeSlide = () => {
        setActive("");
    }
  return (
    <>
        <header className={`header ${active}`}>
        <h1 className="logo">Tarun</h1>

        <nav className="navbar ">
            <ul className="navbar-list">
                <li><a className="navbar-link" onClick={removeSlide} href="#home">Home</a></li>
                <li><a className="navbar-link" onClick={removeSlide} href="#skill">Skills</a></li>
                <li><a className="navbar-link" onClick={removeSlide} href="#">About me</a></li>
                <li><a className="navbar-link" onClick={removeSlide} href="#">Contact uus</a></li>
            </ul>
        </nav>

        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
            <FiMenu className="mobile-nav-icon" name="menu-outline"/>
            <AiOutlineClose className="mobile-nav-icon" name="close-outline" />
        </div>
    </header>
    </>
  )
}

export default Navbar