import React, { Component } from 'react';

class StreetView extends Component {
  render() {
    <div id="pano">

    </div>
  }

  componentDidMount() {
    (function() {
      'use strict';

      var fenway = {lat: 13.674709, lng: 100.501};

      var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10
        },
        addressControl: false,
        showRoadLabels: false
      });

      map.setStreetView(panorama);
    })();
  }
}

export default StreetView;
