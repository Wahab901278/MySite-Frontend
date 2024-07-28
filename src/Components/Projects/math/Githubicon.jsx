// src/SocialMediaIcons.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Githubicon = () => {
  return (
    <div className="social-media-icons">
      <a
        href="https://github.com/Wahab901278/Linear-Algebra"
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
