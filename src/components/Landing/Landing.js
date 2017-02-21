import React from 'react';
import { Link } from 'react-router'
import './Landing.css';

function Landing(props) {
  return <div className="Landing-BG">
    <div className="Landing-Container">
      <div className="Landing-Hero">
      </div>
      <div className="Landing-Row">
        <div>
          <span className="Landing-Name">GeoFindr</span>
        </div>
        <Link
          to="/play"
          className="Landing-Button br3"
        >
          Play!
        </Link>
        <div className="Landing-LinkRow">
          <Link
            to="/howto"
            className="Landing-Link"
          >
            How To Play
          </Link>
          <Link
            to="/addcity"
            className="Landing-Link"
          >
            Add New City
          </Link>
        </div>
      </div>
    </div>
  </div>
}

export default Landing;
