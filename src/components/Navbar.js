import React, { useState } from "react";
import logo from "./logo.png";
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import '@animxyz/core';

const Navbar = () => {
  const [click,setClicked] = useState(false)
  let initialScrollPosition = 0;

  React.useEffect(() => {
    window.addEventListener("scroll", () => checkScrollPosition());
    return () => window.removeEventListener("scroll");
  }, []);

  const checkScrollPosition = () => {
    const nav = document.getElementById("navbar");
    const currentScrollPosition = window.pageYOffset;
    console.log("current", currentScrollPosition);
    console.log("initial", initialScrollPosition);
    if (currentScrollPosition > initialScrollPosition) {
      initialScrollPosition = currentScrollPosition;
      nav.style.top = "-15vh";
    } else if (currentScrollPosition === 0) {
      initialScrollPosition = currentScrollPosition;
      nav.style.top = "0";
    } else {
      initialScrollPosition = currentScrollPosition;
      nav.style.top = "0";
    }

    if(currentScrollPosition > 60) {
      nav.classList.add('nav-bar-scrolled')
    } else {
      nav.classList.remove('nav-bar-scrolled');
    }
  };

  const handleClick = () => {
    console.log('btn click')
    setClicked(true)
  }

  return (
    <div>
      <nav id="navbar" className="nav-bar xyz-in" xyz="fade big duration-10 stagger-1">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
        <div className="toggle-navbar-icon">
          {!click?<img src={menu} className="hamburger" alt="menu" onClick={()=>setClicked(!click)} />: <img src={close} className="close" alt="menu-close" onClick={()=>setClicked(!click)}/>}
        </div>
        <div className={!click?"right-nav-bar":"right-nav-bar-toggled"}>
          <ul className="nav-links">
            <li>
              <span className="counter">01.</span>
              <a href="#about" className="links">
                About
              </a>
            </li>
            <li>
              <span className="counter">02.</span>
              <a href="#experience" className="links">
                Experience
              </a>
            </li>
            <li>
              <span className="counter">03.</span>
              <a href="#projects" className="links">
                Projects
              </a>
            </li>
            <li>
              <span className="counter">04.</span>
              <a href="#contact" className="links">
                Contact
              </a>
            </li>
          </ul>
          <div className="resume-container">
            <a href="" target="blank" className="resume">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
