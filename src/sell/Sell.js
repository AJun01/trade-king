import React, { Component } from 'react';
import SellWidget from './SellWidget';

export default class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
        };
    }

    componentDidMount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.setState({ stocks: cart });
    }

    handleSell = (symbol, numShares, sellPrice) => {
        const { stocks } = this.state;
        let updatedStocks = stocks.map(stock => {
            if (stock.symbol === symbol) {
                const remainingShares = stock.numShares - numShares;
                if (remainingShares > 0) {
                    return { ...stock, numShares: remainingShares, totalValue: remainingShares * stock.stockPrice };
                }
                return null; 
            }
            return stock;
        }).filter(stock => stock !== null); 

        const stock = stocks.find(stock => stock.symbol === symbol);
        if (stock) {
            const profit = (sellPrice - stock.stockPrice) * numShares;
            const currentProfit = parseFloat(localStorage.getItem('totalProfit')) || 0;
            localStorage.setItem('totalProfit', (currentProfit + profit).toFixed(2));
        }

        localStorage.setItem('cart', JSON.stringify(updatedStocks));
        this.setState({ stocks: updatedStocks });
    };

    render() {
        const { stocks } = this.state;

        return (
            <div className="sell-page">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                {stocks.length === 0 ? (
                    <h2>You have not purchased any stocks</h2>
                ) : (
                    stocks.map((stock, index) => (
                        <SellWidget 
                            key={index} 
                            companyName={stock.companyName} 
                            symbol={stock.symbol} 
                            stockPrice={stock.stockPrice} 
                            numShares={stock.numShares} 
                            totalValue={stock.numShares * stock.stockPrice} 
                            onSell={this.handleSell} 
                        />
                    ))
                )}
            </div>
        );
    }
}