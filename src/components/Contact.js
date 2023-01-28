import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div id="contact" className="section contact">
        <div className="section-heading">What's Next?</div>
        <div className="about-content">
          <div className="contact-heading">Get In Touch</div>
          <div className="info-text">
            Although I'm not currently looking for freelance opportunities, my
            inbox is always open. Whether for a potential project or just to say
            hi, I'll try my best to answer your email!
          </div>
          <div className="mail-link-container">
            <div className="link-box">
              <a href="mailto:arpankorat@gmail.com" className="mail-link">
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
