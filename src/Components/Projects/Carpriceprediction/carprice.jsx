import React from "react";
import Githubfooter from "./Githubfooter";
import Car from "../img/car.png";
import Car2 from "../img/car2.png";
const carprice = () => {
  return (
    <div className="project-card">
      <div className="card-content">
        <div className="blue-bar"></div>
        <div className="left-content">
          <div className="left-content-inner">
            <p className="heading">Car Price Prediction</p>
            <div className="description">
              <p>
                I completed a comprehensive data analysis project on car price
                prediction. This project involved leveraging machine learning
                algorithms to analyze various features and predict the prices of
                cars accurately. This project starts from Data cleaning and goes
                all the way from Feature Engineering, Visualizations,
                Correlation Analysis and then Machine learning model development
                and training and at the last, Model Evaluation.
              </p>
              Technologies:
              <p></p>
              <ul>
                <li>Python</li>
                <li>Numpy</li>
                <li>Pandas</li>
                <li>Matplotlib,Seaborn</li>
                <li>Scikit-learn</li>
              </ul>
            </div>
          </div>
          <Githubfooter />
        </div>
        <div className="right-content">
          <div className="image-container">
            <img src={Car} alt="Car-price-prediction" className="Cars-img" />
            <img src={Car2} alt="Car-price-prediction2" className="Cars-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default carprice;
