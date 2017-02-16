import React from 'react';
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
        <div className="App-Button br3">
          Play!
        </div>
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
