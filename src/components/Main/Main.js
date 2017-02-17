import React, { Component } from 'react';
import SimpleMap from '../SimpleMap/SimpleMap';
import StreetView from '../StreetView/StreetView';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    // 47.604765, -122.169747
    this.state = {
      center: {
        lat: 36.907646,
        lng: 56.848103
      },
      markers: [],
      zoom: 3,
      place: {
        lat: 34.696694,
        lng: 135.188639
      }
    }
    // 38.308039, 26.376333
    // lat: 34.696694,
    // lng: 135.188639

    this.pinMarkerOnClick = this.pinMarkerOnClick.bind(this);
  }

  pinMarkerOnClick(nextState) {
    console.log(nextState.markers[0]);
    this.setState(nextState);
  }

  render() {
    return <div className="Main-Content">
      <div className="Main-SM-Container">
        <SimpleMap
          state={this.state}
          pinMarkerOnClick={this.pinMarkerOnClick}
        />
      </div>
      <div className="Main-ConsoleHeader
        ">
        <h3 className="Main-HintsTitle">Hints</h3>
      </div>
      <div className="Main-Console">
        <div className="Main-HintContainer">

        </div>
        <div className="Main-SV-Container">
          <StreetView
            currentLocation={this.state.markers[0]}
            place={this.state.place}
          />
        </div>
      </div>
    </div>
  }
}

export default Main;
