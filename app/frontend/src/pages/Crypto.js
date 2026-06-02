import React from 'react';
import '../styles/Crypto.css'; // Adjust the path as necessary

const Crypto = () => {
  return (
    <div className="crypto-container">
      <h2>Crypto Trading</h2>

      <section className="section-card">
        <h3>Overview</h3>
        <p>
          Cryptocurrency trading is a fast-growing market with high volatility and abundant opportunities.
          Here, you can track live prices of major coins like Bitcoin, Ethereum, and more.
        </p>
      </section>

      <section className="section-card">
        <h3>Blockchain Technology</h3>
        <p>
          Understand the technology behind cryptocurrencies — blockchain, which ensures secure and decentralized
          transactions without intermediaries.
        </p>
      </section>

      <section className="section-card">
        <h3>Popular Cryptocurrencies</h3>
        <ul>
          <li>Bitcoin (BTC)</li>
          <li>Ethereum (ETH)</li>
          <li>Ripple (XRP)</li>
          <li>Litecoin (LTC)</li>
          <li>Cardano (ADA)</li>
        </ul>
      </section>

      <section className="section-card">
        <h3>Trading Strategies</h3>
        <p>
          Learn about portfolio diversification, risk management, technical analysis, and timing the market to maximize returns.
        </p>
      </section>
    </div>
  );
};

export default Crypto;
