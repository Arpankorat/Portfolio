import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div id="about" data-aos="fadeInUpBig" data-aos-offset="100"
      data-aos-delay="500" data-aos-duration="100" data-aos-easing="ease-in"
      data-aos-once="true" data-aos-anchor-placement="top-bottom" className="section about aos-init">
        <h3 className="section-heading">About Me</h3>
        <div className="about-content">
          <div className="info-text">
            <p className="p1">
              {" "}
              Hello! I'm Arpan, a software engineer based in Ahmedabad, who
              enjoys building things that live on the internet. I develop
              websites and web apps that provide intuitive, pixel-perfect user
              interfaces with efficient and modern backends.{" "}
            </p>
            <p class="p2">
              {" "}
              Shortly after graduating from{" "}
              <a
                href="https://www.gtu.ac.in"
                target="_blank"
                id="university-link"
              >
                Gujarat Technological University
              </a>{" "}
              I joined the development team at{" "}
              <a
                href="https://www.novuslogics.com/"
                target="_blank"
                id="company-name"
              >
                Novus Logics
              </a>
              , where I work on a wide variety of interesting and meaningful
              projects on a daily basis.{" "}
            </p>
            <p className="list-heading">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="skill-grid">
              <li className="skill">JavaScript (ES6+)</li>
              <li className="skill">HTML &amp; (S)CSS</li>
              <li className="skill">React</li>
              <li className="skill">Python</li>
              <li className="skill">MySql</li>
              <li className="skill">Bootstrap</li>
            </ul>
          </div>
          <div className="info-pic">
            <a href="" target="blank"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
