import React, { Component } from 'react';
import ReactStreetView from 'react-streetview';

class StreetView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.place.lat,
      lng: this.props.place.lng
    }
  }

  render() {
    const googleMapsApiKey = 'AIzaSyDe3s-A5dg6QWWI16Sd11C3_JtuoYavrys';
    const panoOptions = {
      position: {
        lat: this.state.lat,
        lng: this.state.lng
      },
      pov: {
        heading: 20,
        pitch: 2,
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

  componentWillReceiveProps(nextProps) {


    this.setState(nextProps.place);
    console.log(nextProps.place);
    console.log(this.state)
  }
}

export default StreetView;
