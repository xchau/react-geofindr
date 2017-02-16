import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './components/Landing/Landing';
import Parent from './components/Parent/Parent';
import Howto from './components/Howto/Howto';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Landing} />
        <Route path='/play' component={Parent} />
        <Route path='/howto' component={Howto} />

      </Router>
    );
  }
}

export default App;
