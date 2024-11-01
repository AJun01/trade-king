import React, { Component } from 'react';
import StockWidget from './StockWidget';

export default class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: []
    };
  }

  componentDidMount() {
    fetch('../data/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      this.setState({ stocks: data });
    })
    .catch(error => console.error('Error fetching the stock data:', error));
  }

  render() {
    const { stocks } = this.state;

    return (
      <div className="market">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="stock-container">
          {stocks.map((stock, index) => (
            <StockWidget
              key={index}
              companyName={stock.companyName}
              symbol={stock.symbol}
              openingPrice={stock.openingPrice}
              high={stock.high}
              low={stock.low}
            />
          ))}
        </div>
      </div>
    );
  }
}