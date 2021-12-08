import "./NavBar.css"
import React, {useState} from "react";
import  { NavLink } from "react-router-dom"

function NavBar() {
    // const [isOpen, setOpen] = useState(false);

    // const mobileBtn = document.getElementById("mobile-cta")
    // const nav = document.querySelector('nav')
    // const mobileBtnExit = document.getElementById('mobile-exit')
    //
    // mobileBtnExit

    let openMenu = () => {
        const nav = document.querySelector('nav')
        nav.classList.add("menu-btn");
    };

    let closeMenu = () => {
        const nav = document.querySelector('nav')
        nav.classList.remove("menu-btn");
    };


    return (
            <div className="navbar">
                <div class = "container">
                    <NavLink className="logo" to="/">Cody's <span>Portfolio</span></NavLink>

                    <img id = "mobile-cta" class = "mobile-menu" src = {"images/menu.svg"} alt="Navigation Bar" onClick={openMenu}/>
                    <nav>
                        <img id="mobile-exit" className="mobile-menu" src={"images/menu.svg"} alt="Exit Menu" onClick={closeMenu}/>
                        <ul class = "primary-nav">
                            <li class = "current">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            </li>
                        </ul>

                        <ul className="secondary-nav">
                            <li className="current">
                                <NavLink className="nav-link" to="/about">About Me</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/contact">Contact Me</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
    )
}

export default NavBar