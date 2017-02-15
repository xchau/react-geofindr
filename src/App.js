import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Nav from './components/NavBar/Nav';
import SimpleMap from './components/SimpleMap/SimpleMap';

class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <span className="App-NavName">GeoFindr</span>
        </Nav>
        <SimpleMap />
      </div>
    );
  }
}

export default App;
