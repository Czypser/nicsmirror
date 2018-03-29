import React, { Component } from 'react';
import './App.css';
import Clock2 from './Clock2.js';
import Weather from './weather.js';
import Coins from './coinmarket.js'
import Directions from './googledirections.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Upper-Left">
          <Clock2 />
          <Directions />
        </div>
        <div className="App-Middle"></div>
        <div className="App-Upper-Right">
          <Weather />
          <br />
          <Coins id='tron/'/>
          <Coins id='ripple/'/>
          <Coins id='verge/'/>
          <Coins id='ethereum/'/>
          <Coins id='cardano/'/>
          <Coins id='stellar/'/>
          <Coins id='poet/'/>
          <Coins id='iota/'/>
        </div>
      </div>
    );
  }
}

export default App;
