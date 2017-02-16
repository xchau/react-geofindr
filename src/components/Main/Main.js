import React from 'react';
import SimpleMap from '../SimpleMap/SimpleMap';
import StreetView from '../StreetView/StreetView';
import './Main.css';

function Main(props) {
  return (
    <div>
      <div className="Main-SM-Container">
        <SimpleMap />
      </div>
      <div className="Main-Console">
        <div className="Main-HintContainer">

        </div>
        <div className="Main-SV-Container">
          <StreetView />
        </div>
      </div>
    </div>

  );
}

export default Main;
