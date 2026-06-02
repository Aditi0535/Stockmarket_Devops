import React from 'react';
import '../styles/card.css';

function MarketCard({ title, price, change }) {
  return React.createElement("div", { className: "market-card" }, [
    React.createElement("h3", null, title),
    React.createElement("p", null, `Price: ₹${price}`),
    React.createElement("p", { className: change >= 0 ? "green" : "red" }, `Change: ${change}%`)
  ]);
}

export default MarketCard;
