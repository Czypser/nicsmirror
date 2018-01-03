import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  componentWillMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=85203,us&appid=${process.env.REACT_APP_WEATHER_API}`)
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      })
  }

  //switch statement

  render() {
    //switch - terniarry
    return (
      <div>
        Weather goes here
      </div>
    );
  }
}

export default Weather;
