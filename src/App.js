import React, { Component } from 'react';
// import { GoogleMap, Marker, SearchBox } from "react-google-maps";
import SimpleMap from './components/SimpleMap/SimpleMap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [{
        position: {
          lat: 25.0112183,
          lng: 121.52067570000001,
        },
        key: `Taiwan`,
        defaultAnimation: 2,
      }],
      test: 'hi'
    };

    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    console.log(this.state.markers);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.logOut}
        >
          Console Log
        </button>
        <SimpleMap
          markers={this.state.markers}
          test="hello"
        />
      </div>
    );
  }
}


export default App;
