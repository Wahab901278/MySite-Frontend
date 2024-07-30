import React from "react";
import { Link } from "react-router-dom";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
const Innerright = () => {
  return (
    <div className="innerright">
      <h1 className="hello">Hello!</h1>
      <h3 className="description">Here's who I am & what I do</h3>
      <Link to="/resume">
        <button className="resume">RESUME</button>
      </Link>
      <Link to="/Projects">
        <button className="projects">PROJECTS</button>
      </Link>
      <div className="about-container">
        <p className="about">
          I am a passionate and motivated individual with a growing interest in
          data analysis and software development. I am continuously expanding my
          skills and knowledge in these areas and am eager to apply what I’ve
          learned to real-world projects.
        </p>
      </div>
    </div>
  );
};

export default Innerright;
