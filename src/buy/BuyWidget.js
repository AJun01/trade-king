import React, { useState } from 'react';
import '../styles/widget.css'; 

const BuyWidget = ({ companyName, symbol, stockPrice, onBuy }) => {
    const [numShares, setNumShares] = useState(1); 

    const handleBuyClick = () => {
        onBuy(symbol, numShares, stockPrice);
        setNumShares(1); 
    };

    return (
        <div className="buy-widget">
            <h3>{companyName} ({symbol}) - ${stockPrice}</h3> {/* Display the stock price */}
            <div className="controls">
                <label>
                    Number of Shares:
                    <input 
                        type="number" 
                        value={numShares} 
                        min="1" 
                        onChange={(e) => setNumShares(e.target.value)} 
                    />
                </label>
                <button onClick={handleBuyClick}>Buy</button>
            </div>
        </div>
    );
};

export default BuyWidget;