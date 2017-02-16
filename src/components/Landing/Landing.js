import React from 'react';
import { Link } from 'react-router'
import './Landing.css';

function Landing(props) {
  return (
    <div className="App-LandContainer">
      <div className="App-LandHero">
      </div>
      <div className="App-LandRow">
        <div>
          <span className="App-LandName">GeoFindr</span>
        </div>


        <Link className="App-Button br3" to="play">Play!</Link>

        <div className="App-LandLinkRow">
          <a href="#" className="App-LandLink">
            About
          </a>
          <a href="#" className="App-LandLink">
            How To Play
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
