import React from "react";
import Main_content from "./Main_Content";
import Sidebars from "./Sidebars";

function Content() {
  return (
    <div className="content">
      <Sidebars />
      <Main_content />
    </div>
  );
}

export default Content;
