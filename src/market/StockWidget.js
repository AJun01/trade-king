import React from 'react';
import '../styles/widget.css'; 

const StockWidget = ({ companyName, symbol, openingPrice, high, low }) => {
    return (
        <div className="stock-widget">
            <h3>{companyName} ({symbol})</h3>
            <p>Opening Price: ${openingPrice}</p>
            <p>High: ${high}</p>
            <p>Low: ${low}</p>
        </div>
    );
};

export default StockWidget;