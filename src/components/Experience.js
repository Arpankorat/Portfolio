import React from "react";

function Experience() {
  return (
    <div className="experience-container">
      <div id="experience" className="section experience">  
        <h3 class="section-heading">Where I've Worked</h3>
        <div class="experience-content">
            <div class="info-text">
            <ul class="company-list">
                <li>
                <button class="active-company"> Novus Logics </button>
                </li>
            </ul>
            <div class="company-info">
                <h4 class="company-title">
                <span>Software Engineer</span>
                <span>
                    <span > @ </span>
                    <a
                    href="https://www.Novuslogics.com/"
                    target="blank"
                    class="company-link"
                    >
                    Novus Logics
                    </a>
                </span>
                </h4>
                <div class="work-dates"> January 2021 - Present </div>
                <ul class="work-details">
                <li class="description-line">
                    {" "}
                    Write modern, performant, maintainable code for a diverse array
                    of client and internal projects{" "}
                </li>
                <li class="description-line">
                    {" "}
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as JavaScript,
                    React, and Firebase{" "}
                </li>
                </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
