import React from "react";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";

const Main_Content = () => {
  return (
    <div className="main-content">
      <div className="main-container">
            <Intro />
            <About />
            <Experience />
            <Project />
            <Contact />
      </div>
    </div>
  );
};

export default Main_Content;
