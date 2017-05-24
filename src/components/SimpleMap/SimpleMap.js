import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";

const MapElem = withGoogleMap(props => (
  <div>
    <GoogleMap
      onClick={props.onMapClick}
      ref={props.onMapMounted}
      center={props.center}
      zoom={props.zoom}
      defaultOptions={{
        streetViewControl: false,
        maxZoom: 10,
        gestureHandling: 'none'
      }}
    >
      {
        props.markers.map((marker, idx) => {
          return <Marker
            key={idx}
            position={marker}
            // icon="https://campus-map.stanford.edu/images/new/cm-target.png"
            title={`[${marker.lat.toFixed(2)}-ish, ${marker.lng.toFixed(2)}-ish]`}
          />
        })
      }
    </GoogleMap>
  </div>
));

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMapMounted = this.handleMapMounted.bind(this);
  }

  handleMapMounted(map) {
    // ??????
    this._map = map;
  }

  handleMapClick(event) {
    const latLng = event.latLng.toJSON();
    const nextState = this.props.state;

    nextState.markers = [];
    nextState.markers.push(latLng)
    console.log(nextState);

    this.props.pinMarkerOnClick(nextState);
  }

  render() {
    const { center, markers, zoom } = this.props.state;

    return (
      <MapElem
        containerElement={
          <div style={{ height: `300px`, width: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMapMounted={this.handleMapMounted}
        onMapClick={this.handleMapClick}
        center={center}
        markers={markers}
        zoom={zoom}
      />
    );
  }
}

export default SimpleMap;
