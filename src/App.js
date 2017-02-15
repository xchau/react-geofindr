import React, { Component } from 'react';
// import {GoogleMapLoader, GoogleMap, withGoogleMap, Marker} from "react-google-maps";
import SimpleMap from './components/SimpleMap/SimpleMap';

class App extends Component {
  constructor(props) {
    super(props);



    // this.logOut = this.logOut.bind(this);
  }

  // logOut() {
  //   console.log(this.state.marker);
  // }

  render() {
    return (
      <div>
        <SimpleMap />
      </div>
    );
  }
}

export default App;
