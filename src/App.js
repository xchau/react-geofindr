import React, { Component } from 'react';
import { GoogleMap, Marker, SearchBox } from "react-google-maps";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }


  render() {
    return (
      <div>
        <SimpleMap />
      </div>
    );
  }
}


export default App;
