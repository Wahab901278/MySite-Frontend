import React from "react";
import Topnavbar from "../Home/Topnavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Lfooterc from "../Contact/Lfooterc";
import resumePDF from "/home/wahab901278/resume.pdf";
import resumeImage01 from "./images/resume.jpg";

import "./Resume.css";
const Resume = () => {
  return (
    <div className="resume-page">
      <Topnavbar />
      <h1 className="resume-h">Resume</h1>
      <div className="resume-l flex">
        {/* <h2 id="Experience">Experience</h2> */}
        <a
          href={resumePDF}
          download="Abdul Wahab.pdf"
          id="download-button"
          className="download-button"
        >
          Download
        </a>
      </div>
      <div className="resume-images">
        <img src={resumeImage01} alt="resume" id="resume-img-01" />
      </div>
      {/* <Educard />
      <Projcard />
      <Certcard />
      <Skillcard /> */}
      <Lfooterc />
    </div>
  );
};

export default Resume;
