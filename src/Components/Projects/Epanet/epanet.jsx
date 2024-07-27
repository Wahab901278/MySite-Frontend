import React from "react";
import Epanet from "../img/epanet.png";
import Githubfooter from "./Githubfooter";

const epanet = () => {
  return (
    <div className="project-card">
      <div className="card-content">
        <div className="blue-bar"></div>
        <div className="left-content">
          <p className="heading">Water Engineering Network</p>
          <div className="description">
            <p>
              Created resilient water networks on Epanet integrated with Python
              through libraries, ensuring redundancy, robust infrastructure,
              real time monitoring and cost optimization. Analyzed and optimized
              water distribution networks to ensure efficient water supply.
            </p>
            Technologies:
            <ul>
              <li>Epanet</li>
              <li>Wntr</li>
              <li>Epyt</li>
              <li>Matlpotlib, Seaborn</li>
              <li>Pandas, Numpy</li>
              <li>Scipy</li>
            </ul>
            <Githubfooter />
          </div>
        </div>
        <div className="right-content">
          <img src={Epanet} alt="Epanet" className="Epanet-img" />
        </div>
      </div>
    </div>
  );
};

export default epanet;
