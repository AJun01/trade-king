import React, { useState } from 'react';
import '../styles/widget.css'; 

const SellWidget = ({ companyName, symbol, totalValue, numShares, stockPrice, onSell }) => {
    const [sharesToSell, setSharesToSell] = useState(1);
    const [sellPrice, setSellPrice] = useState(stockPrice); 

    const handleSellClick = () => {
        onSell(symbol, sharesToSell, sellPrice);
        setSharesToSell(1);
        setSellPrice(stockPrice);
    };

    return (
        <div className="sell-widget">
            <h3>{companyName} ({symbol})</h3>
            <p>Number of Shares: {numShares}</p> {/* Display number of shares */}
            <p>Total Value: ${totalValue.toFixed(2)}</p> {/* Display total value */}
            <div className="controls">
                <label>
                    Shares to Sell:
                    <input 
                        type="number" 
                        value={sharesToSell} 
                        min="1" 
                        max={numShares} 
                        onChange={(e) => setSharesToSell(e.target.value)} 
                    />
                </label>
                <label>
                    Sell Price:
                    <input 
                        type="number" 
                        value={sellPrice} 
                        min="0" 
                        onChange={(e) => setSellPrice(e.target.value)} 
                    />
                </label>
                <button onClick={handleSellClick}>Sell</button>
            </div>
        </div>
    );
};

export default SellWidget;