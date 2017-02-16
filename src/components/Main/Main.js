import React from 'react';
import SimpleMap from '../SimpleMap/SimpleMap';
import './Main.css';

function Main(props) {
  return (
    <div>
      <div className="App-SM-Container">
        <SimpleMap />
      </div>
      <div className="App-Console">
        <div className="App-HintContainer">

        </div>
        <div className="App-SV-Container">
          
        </div>
      </div>
    </div>

  );
}

export default Main;
