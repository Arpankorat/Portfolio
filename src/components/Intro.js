import React from "react";

const Intro = () => {
  return (
    <div className="intro-container">
      <div id="intro" className="section intro ">
            <div className="intro-line xyz-in" xyz="fade up big duration-10  delay-10">Hi, my name is</div>
            <div className="name xyz-in" xyz="fade up duration-15 delay-15 ">Arpan Korat.</div>
            <div className="subheading xyz-in" xyz="fade down duration-20 delay-20"> I build things for the web. </div>
            <div className="intro-description xyz-in" xyz="fade up duration-20 delay-25" >
            I'm a software engineer based in Ahmedabad specializing in building
            and occasionally designing high-quality websites and applications.
            </div>
            <div className="mail-link-container xyz-in" xyz="fade up big duration-25 delay-25 ease">
                <div className="mail-box">
                    <a href="mailto:arpankorat@gmail.com" className="mail-link">
                    Get In Touch
                    </a>
                </div>
            </div>
      </div>
    </div>
  );
};
export default Intro;
