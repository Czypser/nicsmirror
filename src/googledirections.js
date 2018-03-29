import React from 'react';
import axios from 'axios';


class Directions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  componentWillMount() {
    axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=1535NHorne,Mesa,AZ&destination=3333ecamelbackrd,phoenix,az&key=${process.env.REACT_APP_GOOGLE_API
    }`, {
      headers: {
        'Accept': 'application/jsonp',
        'Content-Type': 'application/jsonp',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${process.env.REACT_APP_GOOGLE_API}`
      }
    })
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.data);
      })
      .catch(e => {
        console.log('e:', e);
      })
  }

  render() {
    return (
      <div>
        <div>
        </div>
      </div>
    );
  }
}

export default Directions;
