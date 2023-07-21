import React from "react";

const socials = [
  {
    name: "Linkedin",
    image: "../../assets/linkedin.svg",
    href: "https://www.linkedin.com/in/arpan-korat-43a7231b2/",
  },
//   {
//     name: "Twitter",
//     image: "../../assets/twitter.svg",
//     href: "https://twitter.com/",
//   },
  {
    name: "Instagram",
    image: "../../assets/instagram.svg",
    href: "https://www.instagram.com/arpan_korat/",
  },
  {
    name: "Github",
    image: "../../assets/github.svg",
    href: "https://github.com/Arpankorat",
  },
];

export default function LeftSideBar() {
  const getSocialImage = (name) => {
    const image = require("../../assets/"+name.toLowerCase()+".svg");
      return image;

  };
  return (
    <div className="left-side-bar">
      <div className="left-side-bar-container">
        <div className="vertical-sidebar-line" />
        {socials.map((social,index) => {
          return (
            <a href={social.href} key={index} className="social-link" target="_blank">
              <img className="social-image" src={getSocialImage(social.name)} alt={social.name} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
