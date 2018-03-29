import React from 'react';
import axios from 'axios';
import WeatherIcon from 'react-open-weather-icons';


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  componentWillMount() {
    const location = navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      console.log(latitude)
    })
    console.log(this.location)
    axios.get(`http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=85203,us&appid=${process.env.REACT_APP_WEATHER_API}`)
      .then((res) => {
        this.setState({ data: res.data });
      })
  }

  render() {
    return (
      <div>
        <div className='bigTime'><WeatherIcon name={(this.state.data.weather ? this.state.data.weather[0].icon : '')} className="invert" />
        {this.state.data.main ? this.state.data.main.temp + unescape('%B0') + 'F' : ''}</div>
        <div>
        {this.state.data.main ?
          'High '
          + this.state.data.main.temp_max + unescape('%B0') + 'F, '
          + 'Low '
          + this.state.data.main.temp_min + unescape('%B0') + 'F'
          : ''}
        </div>
      </div>
    );
  }
}

export default Weather;
