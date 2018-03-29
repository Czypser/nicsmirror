import React from 'react';
import axios from 'axios';


class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  componentWillMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      60000
    );
  }

  tick() {
    axios.get(`https://api.coinmarketcap.com/v1/ticker/${this.props.id}`)
      .then((res) => {
        this.setState({
          data: res.data[0],
          price: parseFloat(res.data[0].price_usd).toFixed(2),
          hour: res.data[0].percent_change_1h,
          day: res.data[0].percent_change_24h,
          btc: res.data[0].price_btc,
          rank: res.data[0].rank
        })
      })
  }

  render() {
    return (
      <div>
        <div className='split-Left'>
        {this.state.data ? this.state.data.symbol : ''}
        {this.state.data ? ' #' + this.state.data.rank : ''}
        </div>
        <div className='split-Right'>
        {this.state.data ? this.state.price
          + ' '
          + 'USD'
          : ''}
          <br />
        {this.state.data ? this.state.btc
          + ' '
          + 'BTC'
          : ''}
          <br />
        {this.state.data ? this.state.hour
          + '% Hourly'
          : ''}
          <br />
        {this.state.data ? this.state.day
          + '% Daily'
          : ''}

        </div>
      </div>
    );
  }
}

export default Coins;
