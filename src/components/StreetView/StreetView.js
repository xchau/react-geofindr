import React, { Component } from 'react';
import ReactStreetView from 'react-streetview';

class StreetView extends Component {
  constructor(props) {
    super(props);

    const place = this.props.place;

    this.state = {
      lat: place.lat,
      lng: place.lng
    }
  }

  render() {
    const googleMapsApiKey = 'AIzaSyDe3s-A5dg6QWWI16Sd11C3_JtuoYavrys';
    const panoOptions = {
      position: this.state,
      pov: {
        heading: 34,
        pitch: 10,
      },
      addressControl: false,
      showRoadLabels: false
    }

    return <div style={{
      width: '100%',
      height: '300px',
      backgroundColor: '#eee'
    }}>
      <ReactStreetView
        apiKey={googleMapsApiKey}
        streetViewPanoramaOptions={panoOptions}
      />
    </div>
  }

  // componentWillReceiveProps(nextProps) {
  //   // const currentLocation = nextProps.currentLocation;
  //   // const nextPosition = this.state.position;
  //   //
  //   // nextState.position.lat = currentLocation.lat;
  //   // nextState.position.lng = currentLocation.lng;
  //
  //   this.setState(nextProps.currentLocation);
  // }
}

export default StreetView;
