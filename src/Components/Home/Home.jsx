import React from "react";
import Innerbox from "./Innerbox";
import Topnavbar from "./Topnavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Lowerfooter from "./Lowerfooter";
const Home = () => {
  return (
    <div className="home-page">
      <Topnavbar />
      <div className="center">
        <Innerbox />
      </div>
      <Lowerfooter />
    </div>
  );
};

export default Home;
