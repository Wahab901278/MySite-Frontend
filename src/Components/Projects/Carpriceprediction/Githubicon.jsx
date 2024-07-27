// src/SocialMediaIcons.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "/home/wahab901278/Important-stuff/personal-website/personal-portfolio/src/index.css";

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a
        href="https://github.com/Wahab901278/Blockchain-Certificate-Validation"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-1"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
