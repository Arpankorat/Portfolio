import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div
        id="contact"
        className="section contact"
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
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
