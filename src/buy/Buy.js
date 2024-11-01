import React, { Component } from 'react';
import BuyWidget from './BuyWidget';

export default class Buy extends Component {
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

    handleBuy = (symbol, numShares, stockPrice) => {
        const newStock = { symbol, numShares, stockPrice, totalValue: stockPrice * numShares };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingStockIndex = cart.findIndex(stock => stock.symbol === symbol);
        if (existingStockIndex !== -1) {
            cart[existingStockIndex].numShares += numShares;
            cart[existingStockIndex].totalValue += newStock.totalValue;
        } else {
            cart.push(newStock);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`Bought ${numShares} shares of ${symbol}`);
    };

    render() {
        const { stocks } = this.state;

        return (
            <div className="buy-page">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {stocks.map((stock, index) => (
                    <BuyWidget 
                        key={index} 
                        companyName={stock.companyName} 
                        symbol={stock.symbol} 
                        stockPrice={stock.openingPrice}
                        onBuy={this.handleBuy} 
                    />
                ))}
            </div>
        );
    }
}