import React from "react";

import dashboard from "../img/Dashboard.jpeg";
const powerbi = () => {
  return (
    <div className="project-card">
      <div className="card-content">
        <div className="blue-bar"></div>
        <div className="left-content">
          <div className="left-content-inner">
            <p className="heading">Power-bi Dashboards</p>
            <div className="description">
              I have developed dynamic medical and sales dashboards with data
              integration using Power-BI. These dashboards enhance data
              visualization and decision-making capabilities by providing
              real-time insights, trend analysis, and comprehensive reporting.
              They allow users to interact with data, drill down into specifics,
              and make informed decisions quickly.
              <p></p>
              Technologies:
              <p></p>
              <ul>
                <li>Power-bi</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-content-p">
          <img src={dashboard} alt="Dashboard" className="dashboard-img" />
        </div>
      </div>
    </div>
  );
};

export default powerbi;
