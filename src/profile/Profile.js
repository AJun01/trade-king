import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/profile.css'; 

export default function Profile() {
    const [stocks, setStocks] = useState([]);
    const [totalProfit, setTotalProfit] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setStocks(cart);
        

        const profit = parseFloat(localStorage.getItem('totalProfit')) || 0;
        setTotalProfit(profit);
    }, []);

    const handleBuyMore = (symbol) => {

        navigate('/buy');
    };

    const handleSellStock = (symbol) => {

        navigate('/sell');
    };

    return (
        <div className="profile-page">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {stocks.length === 0 ? (
                <h2>You do not own any stocks.</h2>
            ) : (
                <div className="stock-list">
                    {stocks.map((stock, index) => (
                        <div key={index} className="stock-item">
                            <h3>{stock.companyName} ({stock.symbol})</h3>
                            <p>Number of Shares: {stock.numShares}</p>
                            <p>Purchase Price: ${stock.stockPrice.toFixed(2)}</p>
                            <p>Total Value: ${(stock.numShares * stock.stockPrice).toFixed(2)}</p>
                            <button className="buy-more-btn" onClick={() => handleBuyMore(stock.symbol)}>Buy More</button>
                            <button className="sell-btn" onClick={() => handleSellStock(stock.symbol)}>Sell</button>
                        </div>
                    ))}
                </div>
            )}

            <h2>Total Profit: ${totalProfit.toFixed(2)}</h2>
        </div>
    );
}