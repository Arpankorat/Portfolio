import React from 'react';


const Main_Page= props => {

    let initialScrollPosition = 0;

    React.useEffect(() => {
      window.addEventListener('scroll', () => checkScrollPosition());
      return () => window.removeEventListener('scroll');
    }, []);

    const checkScrollPosition = () => {
      const nav = document.getElementById('navbar');
      const currentScrollPosition = window.pageYOffset;
      console.log('current', currentScrollPosition);
      console.log('initial', initialScrollPosition);
      if (currentScrollPosition > initialScrollPosition) {
        initialScrollPosition = currentScrollPosition;
        nav.style.top = '-15vh';
      }
      else if (currentScrollPosition === 0) {
        initialScrollPosition = currentScrollPosition;
        nav.style.top = '0';
      }
      else {
        initialScrollPosition = currentScrollPosition;
        nav.style.top = '0';
      }
    }
  
    return(
         
          <div className="content">
            <div className="sidebars">
              <div className="left-side-bar animated fadeInLeft left-side-bar"></div>
              <div className="right-side-bar animated fadeInRight right-side-bar"></div>
            </div>
            <div className="main-content">
              <div className="main-container">
                <div className="intro-container">
                  <div id="intro" className="section intro">
                    <div class="intro-line ">Hi, my name is</div>
                    <div class="name">Arpan Korat.</div>
                    <div class="subheading "> I build things for the web. </div>
                    <div className="intro-description"> 
                    I'm a software engineer based in Ahmedabad specializing in building and occasionally designing high-quality websites and applications. 
                    </div>
                    <div className="mail-link-container">
                      <div className="mail-box">
                        <a href="mailto:arpankorat@gmail.com" className="mail-link">Get In Touch</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-container">
                  <div id="about" className="section about">
                    <h3 className="section-heading">About Me</h3>
                    <div className="about-content">
                      <div className="info-text">
                        <p className="p1"> Hello! I'm Arpan, a software engineer based in Ahmedabad, who enjoys building things that live on the internet. I develop websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. </p>
                        <p className="list-heading">Here are a few technologies I've been working with recently:</p>
                        <ul className="skill-grid">
                          <li className="skill">JavaScript (ES6+)</li>
                          <li className="skill">HTML &amp; (S)CSS</li>
                          <li className="skill">React</li>
                          <li className="skill">Python</li>
                          <li className="skill">MySql</li>
                        </ul>
                      </div>
                      <div className="info-pic">
                        <a href="" target="blank"></a>
                      </div>
                    </div>
                  </div>  
                </div>  
                <div className="experience-container"></div>
                <div className="project-container">
                  <div id="projects" className="section projects">
                    <h3 className="section-heading">Some Things I've Built</h3>
                    <div className="about-content">
                      <div className="info-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-container">
                  <div id="contact" className="section contact">
                    <div className="section-heading">What's Next?</div>
                    <div className="about-content">
                      <div className="contact-heading">Get In Touch</div>
                      <div className="info-text">
                      Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email! 
                      </div>
                      <div className="mail-link-container">
                        <div className="link-box">
                          <a href="mailto:arpankorat@gmail.com" className="mail-link">Say Hello</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  ) 
}        
export default Main_Page;
