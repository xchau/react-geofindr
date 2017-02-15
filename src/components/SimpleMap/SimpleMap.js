import React, { Component } from 'react';
import {GoogleMap, withGoogleMap, Marker} from "react-google-maps";

const MapElem = withGoogleMap(props => (
  <div>
    <GoogleMap
      onClick={props.onMapClick}
      ref={props.onMapMounted}
      center={props.center}
      zoom={props.zoom}
      defaultOptions={{
        streetViewControl: false
      }}
    >
      {
        props.markers.map((marker, idx) => {
          return <Marker
            key={idx}
            position={marker}
            icon="https://campus-map.stanford.edu/images/new/cm-target.png"
            title={`LAT: ${marker.lat.toFixed(2)}-ish, LNG: ${marker.lng.toFixed(2)}-ish`}
          />
        })
      }
    </GoogleMap>
  </div>
));

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: 22.0112183,
        lng: 95.52067570000001
      },
      markers: [],
      zoom: 8,
    };

    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMapMounted = this.handleMapMounted.bind(this);
  }

  handleMapMounted(map) {
    // ??????
    this._map = map;
  }

  handleMapClick(event) {
    const latLng = event.latLng.toJSON();
    const nextState = this.state;

    nextState.markers = [];
    nextState.markers.push(latLng)
    console.log(latLng);
    console.log(nextState);

    this.setState(nextState);
  }

  render() {
    return (
      <MapElem
        containerElement={
          <div style={{ height: `400px`, width: `400px` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMapMounted={this.handleMapMounted}
        onMapClick={this.handleMapClick}
        center={this.state.center}
        markers={this.state.markers}
        zoom={this.state.zoom}
      />
    );
  }
}

export default SimpleMap;
