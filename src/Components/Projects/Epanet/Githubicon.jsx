// src/SocialMediaIcons.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "/home/wahab901278/Important-stuff/MySite-Frontend/personal-portfolio/src/index.css";

const Githubicon = () => {
  return (
    <div className="social-media-icons">
      <a
        href="https://github.com/Wahab901278/Epanet"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-1"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default Githubicon;
