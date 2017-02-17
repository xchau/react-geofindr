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
      gestureHandling: 'none',
      hints: [],
      userPoints: 0
    }

    this.pinMarkerOnClick = this.pinMarkerOnClick.bind(this);
    this.handleHintClick = this.handleHintClick.bind(this);
  }

  pinMarkerOnClick(nextState) {
    this.setState(nextState);
  }

  handleHintClick(hint, idx) {
    const nextState = this.state;

    if (!hint.showHint) {
      nextState.hints[idx].showHint = true;
      nextState.userPoints -= hint.points;
      console.log(nextState.userPoints);

      this.setState(nextState);
    }
    else {
      console.log('Don\'t hide your precious hint(s)!');
    }
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
        <div className="Main-Submit br2">Guess!</div>
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
        const randNum = Math.floor(Math.random() * cities.data.length);

        console.log(randNum);
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

export default Main;
