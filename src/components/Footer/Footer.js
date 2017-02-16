import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <div>
      <div className="App-Phantom" />
      <div className="App-Footer">
        {props.children}
      </div>
    </div>
  );
}

export default Footer;
