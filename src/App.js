import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock2 from './Clock2.js';
import Weather from './weather.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-Upper-Left">
          <Clock2 />
        </div>
        <div className="App-Upper-Right">
          <p> Test Right Side </p>
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
