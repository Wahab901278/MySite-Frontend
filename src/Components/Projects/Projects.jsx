import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnavbar from "../Home/Topnavbar";
import Lfooterc from "../Contact/Lfooterc";
import Bigdataproject from "./DataAnalysis/bigdataanalysis";
import Epanetproject from "./Epanet/epanet";
import Powerbiproject from "./Powerbi/powerbi";
import Certiproject from "./Certificate/certi";
import "./projects.css";
import Math from "./math/math";
const Projects = () => {
  return (
    <div className="projects-page">
      <Topnavbar />
      <h1 className="projects-h">Projects</h1>
      <Bigdataproject />
      <Epanetproject />
      <Certiproject />
      <Math />
      <Powerbiproject />
      <Lfooterc />
    </div>
  );
};

export default Projects;
