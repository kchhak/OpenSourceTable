import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const PersonalLinks = () => (
  <div className="footerlinks">
    <p>Kaneka Chhak</p>
    < a href="https://github.com/kchhak" >
      <FontAwesomeIcon icon={faGithub} />
    </a >
    <a href="https://www.linkedin.com/in/kanekachhak/">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>
);
  
export default PersonalLinks;