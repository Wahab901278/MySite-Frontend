import React from "react";
import Bigdata from "../img/bigdata1.png";
const bigdataanalysis = () => {
  return (
    <div className="project-card">
      <div className="card-content">
        <div className="blue-bar"></div>
        <div className="left-content">
          <p className="heading">Big Data Analysis</p>
          <div className="description">
            <p>
              I completed a comprehensive big data project for a telecom company
              client to optimize resource allocation by identifying areas with
              specific Azimuths. This project ensured accurate identification of
              relevant areas and exclusion of irrelevant ones, leading to more
              efficient resource deployment and enhanced network performance.
            </p>
            Technologies:
            <p></p>
            <ul>
              <li>Numpy</li>
              <p></p>
              <li>Pandas</li>
              <p></p>
              <li>Matlpotlib, Seaborn</li>
            </ul>
          </div>
        </div>
        <div className="right-content">
          <img src={Bigdata} alt="Big Data" className="bigdata-img" />
        </div>
      </div>
    </div>
  );
};

export default bigdataanalysis;
