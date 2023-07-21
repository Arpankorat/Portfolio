import React, { useState } from "react";

export default function Footer() {
  const [isHovered,setIsHovered] = useState(false)
  return (
    <div
      className={isHovered? "footer-container-hovered" :"footer-container"}
      data-aos="slide-up"
      data-aos-once="true"
      data-aos-delay="100"
      data-aos-anchor-placement="top-bottom"
    >
      <a href="https://github.com/Arpankorat/Portfolio" target="blank" className="footer-text">
        Design By Harsh Dave & Developed By Arpan Korat
      </a>
    </div>
  );
}
