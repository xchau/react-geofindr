import React, { Component } from 'react';
import axios from 'axios';
import SimpleMap from '../SimpleMap/SimpleMap';
import StreetView from '../StreetView/StreetView';
import Modal from '../Modal/Modal';
import './Main.css';
import '../Modal/Modal.css';

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
        city: '',
        country: '',
        lat: null,
        lng: null
      },
      maxZoom: 10,
      gestureHandling: 'none',
      hints: [],
      userPoints: 1200,
      gameFinished: false,
      modalOpen: false
    }

    this.pinMarkerOnClick = this.pinMarkerOnClick.bind(this);
    this.handleHintClick = this.handleHintClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }

  pinMarkerOnClick(nextState) {
    this.setState(nextState);
  }

  handleHintClick(hint, idx) {
    const nextState = this.state;

    if (!hint.showHint) {
      nextState.hints[idx].showHint = true;
      nextState.userPoints -= hint.points;

      this.setState(nextState);
    }
    else {
      console.log('Don\'t hide your precious hint(s)!');
    }
  }

  handleSubmitClick() {
    if (!this.state.markers.length) {
      // Toast message here
      alert('Try pinnning your guess on the map!');
    }
    else {
      const lat1 = this.state.place.lat;
      const lng1 = this.state.place.lng;
      const lat2 = this.state.markers[0].lat;
      const lng2 = this.state.markers[0].lng;
      const distance = calcCrow(lat1, lng1, lat2, lng2);
      const answer = this.state.place;
      const nextState = this.state;

      nextState.gameFinished = true;
      nextState.markers.push(answer);
      nextState.userPoints += calculateBonus(distance);
      nextState.userPoints = Math.ceil(nextState.userPoints);

      this.setState(nextState);
    }
  }

  handleModalOpen() {
    if (!this.state.modalOpen) {
      this.setState({
        modalOpen: true
      });
    }
  }

  render() {
    return <div className="Main-Content">
      <div className="Main-SV-Row">
        <div className="Main-SV-Container">
          <StreetView
            place={this.state.place}
          />
        </div>
      </div>

      <div className="Main-ConsoleHeader">
        {
          this.state.gameFinished ? <div className="Main-ConsoleWrapper">
            <div>
              <p className="Main-ScoreLine">
                You got <span className="Main-Score">{this.state.userPoints}</span> points!
              </p>
            </div>
            <div>
              <a
                href="#"
                className="Main-AboutLink"
                onClick={this.handleModalOpen}
              >
                Learn More about
                <span className="Main-ConsoleHighlight">
                  {this.state.place.city}, {this.state.place.country}
                </span>
              </a>
              {
                this.state.modalOpen ? <Modal className="Modal-Container">
                  <div className="Modal-Content">

                  </div>
                </Modal> : null
              }
            </div>
          </div> :
          <div
            className="Main-Submit br2"
            onClick={this.handleSubmitClick}
          >
            Guess!
          </div>
        }
      </div>
      <div className="Main-Console">
        <div className="Main-HintContainer">
          {
            this.state.hints.map((elem, idx) => <div className="Main-HintBox" key={elem.id}>
              {
                elem.showHint ?
                <div className="Main-Hint">
                  {elem.hint}
                </div> :
                <div className="Main-Hint">
                </div>
              }
              <div
                className="Main-HintReveal br2"
                onClick={() => {this.handleHintClick(elem, idx)}}
              >
                -{elem.points} pts
              </div>
            </div>)
          }
        </div>
        <div className="Main-SM-Container">
          <SimpleMap
            state={this.state}
            pinMarkerOnClick={this.pinMarkerOnClick}
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
        const randNum = Math.floor(Math.random() * cities.data.length);

        // console.log(cities.data[randNum]);
        // console.log(cities.data);
        secretCityId = cities.data[randNum].id;

        const newPlace = {
          city: cities.data[randNum].city,
          country: cities.data[randNum].country,
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
        for (const hint of hints.data) {
          hint.showHint = false
        }

        this.setState({
          hints: hints.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

function calcCrow(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = toRad(lat2-lat1);
  const dLon = toRad(lon2-lon1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  return d;
}

function toRad(value) {
  return value * Math.PI / 180;
}

function calculateBonus(km) {
  const temp = Math.pow(((km + 100) / km) * 0.2, 6) * 4000;
  return  temp > 1 ? 10000 : temp * 10000;
}

export default Main;
