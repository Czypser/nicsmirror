import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      month: new Date().getMonth()+1,
      day: new Date().getDate(),
      year: new Date().getFullYear(),
      time: new Date().toLocaleString(),
      test: new Date().toString("hh:mm tt")
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      hour: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      time: new Date().toLocaleString(),
      month: new Date().getMonth()+1,
      day: new Date().getDate(),
      year: new Date().getFullYear(),
      test: new Date().toString("hh:mm tt")
    });
  }
  render() {
    return (
      <div>
      <p className="App-clock">
        The time is {this.state.time}.
      </p>
      <p>
        {this.state.hour}:{this.state.minutes}:{this.state.seconds}
      </p>
      <p>
        {this.state.month}-{this.state.day}-{this.state.year}
      </p>
      <p>
        test {this.state.test}
      </p>
      </div>
    );
  }
}

export default Clock;
