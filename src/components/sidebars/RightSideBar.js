import React from "react";

export default function RightSideBar() {
  let emailId = "Arpankorat@gmail.com";
  return (
    <div className="right-side-bar xyz-in" xyz="slide right">
      <div className="right-side-bar-container">
        <div className="vertical-sidebar-line" />
        <a href="mailto:Arpankorat@gmail.com" className="sidebar-mail-link">
          {
            emailId
          }
        </a>
      </div>
    </div>
  );
}
