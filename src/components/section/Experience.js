import React, { useState } from "react";

// const data = {
const compnies = [
  {
    name: "Capgemini",
    description: {
      position: "Associate Consultant",
      companyName: "Capgemini Technology Services India Limited",
      link: "https://www.capgemini.com/in-en/",
      startDate: "April 2021",
      lastDate: "Present",
      details: [
        "Developed and Shipped highly interactive cross-platform mobile application for client using React Native ecosystem",
        "Participated in design discussions regarding application architecture, feature implementation, or any other relevant topic as required",
        "Utilized React Native debugging tool to identify and fix bugs.",
      ],
    },
  },
  {
    name: "Novus Logics",
    description: {
      position: "Software Engineer",
      companyName: "Novus Logics",
      link: "https://www.Novuslogics.com/",
      startDate: "November 2020",
      lastDate: "February 2021",
      details: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms,frameworks, and content management systems such as JavaScript,React, and Firebase",
      ],
    },
  },
];
// };

function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  // let activeClass = "active-company";
  // let inactiveClass = "company";

  const handleActiveLink = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="experience-container">
      <div
        id="experience"
        className="section experience"
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="section-heading">Where I've Worked</h3>
        <div className="experience-content">
          <div className="info-text">
            <ul className="company-list">
              {compnies.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      className={index === activeTab ? "active-company" : "company"}
                      onClick={() => handleActiveLink(index)}
                    >
                      {" "}
                      {item.name}{" "}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="company-info">
              <h4 className="company-title">
                <span>{compnies[activeTab].description.position}</span>
                <span>
                  <span> @ </span>
                  <a
                    href={compnies[activeTab].description.link}
                    target="blank"
                    className="company-link"
                  >
                    {compnies[activeTab].description.companyName}
                  </a>
                </span>
              </h4>
              <div className="work-dates">
                {`${compnies[activeTab].description.startDate} -
                  ${compnies[activeTab].description.lastDate}`}
              </div>
              <ul className="work-details">
                {compnies[activeTab].description.details.map((item, index) => {
                  return (
                    <li className="description-line" key={index}>
                      {item}
                    </li>
                  );
                })}

                {/* <li class="description-line">
                  {" "}
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as JavaScript,
                  React, and Firebase{" "}
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
