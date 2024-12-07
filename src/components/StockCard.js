// src/components/StockCard.js
import React from 'react';

const StockCard = ({ stock }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', width: '200px' }}>
      <h3>{stock.symbol}</h3>
      <p>Price: ${stock.price}</p>
    </div>
  );
};

export default StockCard;
