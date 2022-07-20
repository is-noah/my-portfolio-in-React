import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
export const _footerComponents = () => {
  return (
    <div className="App-footer">
      <footer>
        <h3>All Rights Reserved</h3>
        <p>&copy;is-noah 2022.</p>
        <div className="icon">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faWhatsapp} />
          <a
            href="https://github.com/is-noah?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </footer>
    </div>
  );
};
