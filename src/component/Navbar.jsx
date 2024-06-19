import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {

    const [active, setActive] = useState("");

    const toggleNavbar = () => {
        if (active == "active") {
            setActive("")
        } else {
            setActive("active")
        }
    }

    const removeSlide = () => {
        setActive("");
    }
    return (
        <>
            <header className={`header ${active}`}>
                <h1 className="btn"> <a href="https://www.linkedin.com/in/tarun-bharti-936917276/" target="_blank" >Linkedin Profile</a></h1>

                <nav className="navbar ">
                    <ul className="navbar-list">
                        <li><a className="navbar-link" onClick={removeSlide} href="#home">About</a></li>
                        <li><a className="navbar-link" onClick={removeSlide} href="#skill">Skills</a></li>
                        <li><a className="navbar-link" onClick={removeSlide} href="#project">Projects</a></li>
                        <li><a className="navbar-link" onClick={removeSlide} href="#project">Education</a></li>
                        <li><a className="navbar-link" onClick={removeSlide} href="#">Contact</a></li>
                    </ul>
                </nav>

                <h1 className='btn'> <a href="https://github.com/tarunbharti7" target="_blank" >Github Profile</a></h1>

                <div className="mobile-navbar-btn" onClick={toggleNavbar}>
                    <FiMenu className="mobile-nav-icon" name="menu-outline" />
                    <AiOutlineClose className="mobile-nav-icon" name="close-outline" />
                </div>
            </header>
        </>
    )
}

export default Navbar