import React from "react";
import "../projects.css";
import Githubfooter from "./Githubfooter";
import Maths from "../img/maths.png";
const math = () => {
  return (
    <div className="project-card">
      <div className="card-content">
        <div className="blue-bar"></div>
        <div className="left-content">
          <p className="heading">Mathematical Visualizations</p>
          <div className="description">
            <p>
              I excel at transforming complex mathematical concepts, such as
              linear algebra, into intuitive and practical code. This skill
              significantly enhances the ability to grasp and apply abstract
              concepts, making them accessible and understandable for learners
              and professionals alike.
            </p>
            Technologies:
            <ul>
              <li>Numpy</li>
              <li>Matplotlib</li>
            </ul>
            <p></p>
            <Githubfooter />
          </div>
        </div>
        <div className="right-content">
          <img src={Maths} alt="Math" className="Math-img" />
        </div>
      </div>
    </div>
  );
};

export default math;
