import React from 'react';

import './styles.css';

import facebook from "../../assets/icons/facebook.png";
import github from "../../assets/icons/github.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";

const Footer = () => (
  <footer id="main-footer">
    <div className="social">
      <div className="row-list"> 
        <img className="media" src={ facebook } alt=""/> <a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/alysson.romao.7">Facebook</a>
      </div>
      <div className="row-list">
        <img className="media" src={ instagram } alt=""/> <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/a.lissonoliveira/">Instagram</a>
      </div>
      <div className="row-list">
        <img className="media" src={ linkedin } alt=""/> <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/alisson-oliveira-0/">Linkedin</a>
      </div>
      <div className="row-list">
        <img className="media" src={ github } alt=""/> <a rel="noreferrer noopener" target="_blank" href="https://github.com/Alisson-Oliveira">Github</a>
      </div>
    </div>
    <strong className="creator">
      Create by: Alisson Oliveira
    </strong>
  </footer>
);

export default Footer;
