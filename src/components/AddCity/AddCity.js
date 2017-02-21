import React, { Component } from 'react';
import axios from 'axios';
import './AddCity.css';

class AddCity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      country: '',
      lat: '',
      lng: '',
      imgUrl: '',
      link: '',
      hint1: '',
      hint2: '',
      hint3: '',
      h1pv: 200,
      h2pv: 400,
      h3pv: 600
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const nextState = {
      [event.target.name]: event.target.value
    }

    this.setState(nextState);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      city: this.state.city,
      country: this.state.country,
      lat: this.state.lat,
      lng: this.state.lng,
      imgUrl: this.state.imgUrl,
      link: this.state.link,
      hint1: this.state.hint1,
      hint2: this.state.hint2,
      hint3: this.state.hint3,
      h1pv: 200,
      h2pv: 400,
      h3pv: 600
    };

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/addcity',
      data: data
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });

    this.setState({
      city: '',
      country: '',
      lat: '',
      lng: '',
      imgUrl: '',
      link: '',
      hint1: '',
      hint2: '',
      hint3: ''
    });
  }

  render() {
    return <div className="AddCity-Container">
      <form onSubmit={this.handleSubmit}>
        <div className="AddCity-FormElems">
          <div className="AddCity-Col">
            <label>City
              <input
                className="AddCity-InputField1"
                name="city"
                type="text"
                onChange={this.handleChange}
                value={this.state.city}
                required
              />
            </label>
            <label>Country
              <input
                className="AddCity-InputField1"
                name="country"
                type="text"
                onChange={this.handleChange}
                value={this.state.country}
                required
              />
            </label>
            <label>Latitude
              <input
                className="AddCity-InputField1"
                name="lat"
                type="number"
                onChange={this.handleChange}
                value={this.state.lat}
                required
              />
            </label>
            <label>Longitude
              <input
                className="AddCity-InputField1"
                name="lng"
                type="number"
                onChange={this.handleChange}
                value={this.state.lng}
                required
              />
            </label>
            <label>Image URL
              <input
                className="AddCity-InputField1"
                name="imgUrl"
                type="text"
                style={{ width: "60%" }}
                onChange={this.handleChange}
                value={this.state.imgUrl}
                required
              />
            </label>
            <label>Wikipedia Link
              <input
                className="AddCity-InputField1"
                name="link"
                type="text"
                style={{ width: "60%" }}
                onChange={this.handleChange}
                value={this.state.link}
                required
              />
            </label>
          </div>

          <div className="AddCity-Col">
            <label>Hint 1
              <input
                className="AddCity-InputField2"
                name="hint1"
                type="text"
                onChange={this.handleChange}
                value={this.state.hint1}
                required
              />
            </label>
            <label>Hint 1 Point Value
              <input
                className="AddCity-InputField2"
                name="h1pv"
                type="number"
                style={{ width: "15%" }}
                onChange={this.handleChange}
                value={this.state.h1pv}
                disabled
              />
            </label>
            <label>Hint 2
              <input
                className="AddCity-InputField2"
                name="hint2"
                type="text"
                onChange={this.handleChange}
                value={this.state.hint2}
                required
              />
            </label>
            <label>Hint 2 Point Value
              <input
                className="AddCity-InputField2"
                name="h2pv"
                type="number"
                style={{ width: "15%" }}
                onChange={this.handleChange}
                value={this.state.h2pv}
                disabled
              />
            </label>
            <label>Hint 3
              <input
                className="AddCity-InputField2"
                name="hint3"
                type="text"
                onChange={this.handleChange}
                value={this.state.hint3}
                required
              />
            </label>
            <label>Hint 3 Point Value
              <input
                className="AddCity-InputField2"
                name="h3pv"
                type="number"
                style={{ width: "15%" }}
                onChange={this.handleChange}
                value={this.state.h3pv}
                disabled
              />
            </label>
          </div>
        </div>

        <input type="submit" />
      </form>
    </div>
  }
}

module.exports = AddCity;
