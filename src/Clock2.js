import React  from 'react';
import Moment from 'moment';

class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mtime: new Moment().format('h:mm:ss A'),
      mdate: new Moment().format('dddd, MMMM Do, YYYY')
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
      mtime: new Moment().format('h:mm:ss A'),
      mdate: new Moment().format('dddd, MMMM Do, YYYY')
    });
  }

    render() {
        return (
          <div>
            <div className="bigTime">
            {this.state.mtime}
            </div>
            <br />
            {this.state.mdate}
          </div>
        );
    }
}

export default Clock2;
