// src/SocialMediaIcons.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "/home/wahab901278/Important-stuff/personal-website/personal-portfolio/src/index.css";

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a
        href="https://github.com/Wahab901278"
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/abdul-wahab-10117a24a/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://x.com/Wahab901278"
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100049843965340"
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
