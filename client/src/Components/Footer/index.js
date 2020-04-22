import React from "react";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer-main">
      <span>© {new Date().getFullYear()} Ellis Min | All Rights Reserved</span>
    </footer>
  );
};

export default Footer;
