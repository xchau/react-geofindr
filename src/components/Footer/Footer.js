import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <div>
      <div className="Footer-Phantom" />
      <div className="Footer-Footer">
        {props.children}
      </div>
    </div>
  );
}

export default Footer;
