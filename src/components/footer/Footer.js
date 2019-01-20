import React from 'react';
import { Link } from 'react-router-dom';

import Camera from 'react-feather/dist/icons/camera';
import Clock from 'react-feather/dist/icons/clock';

import styles from './footer.css';

const Footer = () => (
  <div className="footer">
    <Link className="footer__link" to="/" >
      <Camera />
      Camera
    </Link>
    <Link className="footer__link" to="/history">
      <Clock />
      History
    </Link>
  </div>
);

export default Footer;
