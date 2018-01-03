import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  Weathering(location) {
    axios.get('http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=85203,us&appid=269bcbcd138df64212d05055bd052e55')
      .then((res) => {
        this.setstate({ data: res.data });
        console.log(res.data);
      })
  }
  render() {
    return (
      <div>
        Weather goes here
        {this.state.data}
      </div>
    );
  }
}

export default Weather;
