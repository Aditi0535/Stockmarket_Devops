// src/pages/Forex.js
import React from 'react';
import '../styles/Forex.css'; // Adjust the path as necessary

const Forex = () => {
  return (
    <div className="forex-container">
      <h2>Forex Trading</h2>
      <div className="forex-intro">
        <p>
          Forex (Foreign Exchange) trading involves buying and selling currencies from around the world.
          It is the largest financial market globally, known for its liquidity and 24/5 trading hours.
        </p>
      </div>

      <section className="forex-sections">
        <div className="section-card">
          <h3>Major Currency Pairs</h3>
          <ul>
            <li><strong>EUR/USD:</strong> Euro and US Dollar, the most traded currency pair.</li>
            <li><strong>USD/JPY:</strong> US Dollar and Japanese Yen, known for volatility.</li>
            <li><strong>GBP/USD:</strong> British Pound and US Dollar, popular among traders.</li>
          </ul>
        </div>

        <div className="section-card">
          <h3>Trading Hours</h3>
          <p>
            The Forex market is open 24 hours a day, 5 days a week, divided into four major sessions: Sydney, Tokyo, London, and New York.
          </p>
        </div>

        <div className="section-card">
          <h3>Key Concepts</h3>
          <ul>
            <li><strong>Leverage:</strong> Ability to control large positions with small capital.</li>
            <li><strong>Spread:</strong> Difference between bid and ask price.</li>
            <li><strong>Pips:</strong> The smallest price move in a currency pair.</li>
          </ul>
        </div>

        <div className="section-card">
          <h3>How to Start Trading</h3>
          <ol>
            <li>Choose a reputable Forex broker.</li>
            <li>Open a trading account and complete KYC.</li>
            <li>Fund your account.</li>
            <li>Start trading using your preferred platform.</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Forex;
