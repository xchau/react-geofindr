import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './components/Landing/Landing';
import Parent from './components/Parent/Parent';
import SimpleMap from './components/SimpleMap/SimpleMap';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Landing} />

      </Router>
    );
  }
}

export default App;
