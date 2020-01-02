import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';

const PersonalLinks = () => (
  <div className="footerlinks">
    <p>
      Kaneka Chhak | software engineer currently seeking opportunities in
      frontend, server side, or end to end development
    </p>
    <div className="links">
      <a href="https://github.com/kchhak">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/kanekachhak/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://angel.co/kaneka-chhak/">
        <FontAwesomeIcon icon={faAngellist} />
      </a>
    </div>
  </div>
);
  
export default PersonalLinks;