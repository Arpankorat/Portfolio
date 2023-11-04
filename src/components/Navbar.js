import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import "@animxyz/core";

const tabs = [
  {
    href: "#about",
    text: "About",
    counter: "01.",
  },
  {
    href: "#experience",
    text: "Experience",
    counter: "02.",
  },
  {
    href: "#projects",
    text: "Projects",
    counter: "03.",
  },
  {
    href: "#contact",
    text: "Contact",
    counter: "04.",
  },
];

const Navbar = () => {
  const [click, setClicked] = useState(false);
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

    if (currentScrollPosition > 60) {
      nav.classList.add("nav-bar-scrolled");
    } else {
      nav.classList.remove("nav-bar-scrolled");
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className="nav-bar xyz-in"
        xyz="slide up duration-10 stagger-1"
      >
        <a href="" className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
        <div className="toggle-navbar-icon">
          {!click ? (
            <img
              src={menu}
              className="hamburger"
              alt="menu"
              onClick={() => setClicked(!click)}
            />
          ) : (
            <img
              src={close}
              className="close"
              alt="menu-close"
              onClick={() => setClicked(!click)}
            />
          )}
        </div>
        <div className={!click ? "right-nav-bar" : "right-nav-bar-toggled"}>
          <ol className="nav-links">
            {tabs.map((tab,index) => {
              return (
                <li key={index}>
                  <span className="counter">{tab.counter}</span>
                  <a
                    href={tab.href}
                    className="links"
                    onClick={() => setClicked(!click)}
                  >
                    {tab.text}
                  </a>
                </li>
              );
            })}
          </ol>
          <div className="resume-container">
            <a
              href="https://drive.google.com/file/d/1NRbqhnlidEKIS6uvoAixAf09uv75vUZX/view?usp=drive_link"
              target="blank"
              className="resume"
              onClick={() => window.screen.width< 768 ? setClicked(!click): null}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
