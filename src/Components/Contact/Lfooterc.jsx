import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Lfooterc = () => {
  return (
    <div className="footer-contact">
      <div className="footer-content-u-contact">
        <span className="copyright-info-contact">
          <span>&#169;</span>
          <span>2024 by Abdul Wahab.</span>
        </span>
        <span>
          <b className="call-u-contact">Call</b>
        </span>
        <span>
          <b className="write-u-contact">Write</b>
        </span>
        <span>
          <b className="follow-u-contact">Follow</b>
        </span>
      </div>
      <div className="footer-content-l-contact flex">
        <span className="call-l-contact">+92 3326315463</span>
        <span className="write-l-contact">abdulwahab901278@gmail.com</span>
        <span className="social-media-icons-l-contact">
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
        </span>
      </div>
    </div>
  );
};

export default Lfooterc;
