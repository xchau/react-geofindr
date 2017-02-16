import React from 'react';
import { Link } from 'react-router'
import './Landing.css';

function Landing(props) {
  return (
    <div className="Landing-Container">
      <div className="Landing-Hero">
      </div>
      <div className="Landing-Row">
        <div>
          <span className="Landing-Name">GeoFindr</span>
        </div>
        <Link className="Landing-Button br3" to="play">Play!</Link>
        <div className="Landing-LinkRow">
          <a href="#" className="Landing-Link">
            About
          </a>
          <Link to="/howto" className="Landing-Link">
            How To Play
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
