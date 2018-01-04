import React from 'react';
import axios from 'axios';

import oned from './svg/01d.svg';
import onen from './svg/01n.svg';
import twod from './svg/02d.svg';
import twon from './svg/02n.svg';
import threed from './svg/03d.svg';
import nined from './svg/09d.svg';
import tend from './svg/10d.svg';
import tenn from './svg/10n.svg';
import elevend from './svg/11d.svg';
import thirteend from './svg/13d.svg';
import twentyd from './svg/20d.svg';

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

  icon(param) {
    switch(param) {
      case '01d':
        return oned;
      case '01n':
        return onen;
      case '02d':
        return twod;
      case '02n':
        return twon;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return threed;
      case '09d':
      case '09n':
        return nined;
      case '10d':
        return tend;
      case '10n':
        return tenn;
      case '11d':
      case '11n':
        return elevend;
      case '13d':
      case '13n':
        return thirteend;
      case '20d':
      case '50d':
        return twentyd;
      default:
        return null;
    }
  }
  //switch statement
  //look at lodash for the get method
  render() {
    return (
      <div>
        <img className='invert' src={this.icon(this.state.data.weather ? this.state.data.weather[0].icon : '')} alt='testing 01d'/>
        <br />
        Weather goes here
        <p>{this.state.data.main ? this.state.data.main.temp : ''}</p>
      </div>
    );
  }
}

export default Weather;
