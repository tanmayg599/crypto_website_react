import React from 'react';
import './Coin.css';

const Coin = ({ image, name, price, volume, pricechange, marketcap, symbol }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs. {price !== undefined ? price : 'N/A'}</p>
          <p className="coin-volume">Rs. {volume !== undefined ? volume.toLocaleString() : 'N/A'}</p>
          
          {pricechange !== undefined && pricechange !== null ? (
            pricechange < 0 ? (
              <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
            )
          ) : (
            <p className="coin-percent">N/A</p> // If price change is not available
          )}

          <p className="coin-marketcap">
            Mkt Cap: Rs. {marketcap !== undefined ? marketcap.toLocaleString() : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
