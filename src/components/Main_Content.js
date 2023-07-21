import React from "react";
import Intro from "./section/Intro";
import About from "./section/About";
import Experience from "./section/Experience";
import Project from "./section/Project";
import Contact from "./section/Contact";

const Main_Content = () => {
  return (
    <div className="main-container">
      <Intro />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default Main_Content;
