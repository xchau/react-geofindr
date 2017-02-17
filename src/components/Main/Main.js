import React, { Component } from 'react';
import axios from 'axios';
import SimpleMap from '../SimpleMap/SimpleMap';
import StreetView from '../StreetView/StreetView';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 20.907646,
        lng: -0.848103
      },
      markers: [],
      zoom: 2,
      place: {
        lat: null,
        lng: null
      },
      maxZoom: 10,
      gestureHandling: 'none'
    }
    // 38.308039, 26.376333
    // lat: 34.696694,
    // lng: 135.188639

    this.pinMarkerOnClick = this.pinMarkerOnClick.bind(this);
  }

  pinMarkerOnClick(nextState) {
    // console.log(nextState.markers[0]);
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
          TESTING TESTING TESTING
        </div>
        <div className="Main-SV-Container">
          <StreetView
            place={this.state.place}
          />
        </div>
      </div>
    </div>
  }

  componentDidMount() {
    let secretCityId;

    axios
      .get('http://localhost:3000/api/city')
      .then((cities) => {
        const randNum = Math.floor(Math.random()) * (cities.data.length + 1);

        console.log(cities.data);
        secretCityId = cities.data[randNum].id;

        const newPlace = {
          lat: cities.data[randNum].lat,
          lng: cities.data[randNum].lng
        };

        this.setState({
          place: newPlace
        });

        return axios
          .get(`http://localhost:3000/api/hints/${secretCityId}`);
      })
      .then((hints) => {
        console.log(hints.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export default Main;
