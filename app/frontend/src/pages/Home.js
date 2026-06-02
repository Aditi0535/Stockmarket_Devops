import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // Adjust path if necessary

function Home() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Welcome to <span className="highlight">StockTradePro</span></h1>
        <p>Your ultimate platform for trading in Indian Stocks, Forex, and Cryptocurrency markets.</p>
        <Link to="/indian-stock" className="cta-button">Explore Now</Link>
      </div>

      {/* ✅ Market Ticker: Add directly after Hero */}
      <div className="ticker-wrapper">
        <div className="ticker">
          <span>
            🔼 NIFTY 50: 22,430.45 (+0.54%) &nbsp;&nbsp;&nbsp;
            🔽 SENSEX: 74,650.12 (-0.23%) &nbsp;&nbsp;&nbsp;
            🔼 USD/INR: ₹83.10 (+0.02%) &nbsp;&nbsp;&nbsp;
            🔼 BTC: $63,500.78 (+1.12%) &nbsp;&nbsp;&nbsp;
            🔽 ETH: $3,200.12 (-0.48%)
          </span>
        </div>
      </div>

  <div className="features-container">
    <div className="info-section">
      <h2>Why Choose StockTradePro?</h2>
      <div className="info-cards">
        <div className="info-card">
          <h4>🔍 Real-Time Market Data</h4>
          <p>Access up-to-the-second updates across multiple markets to make informed trading decisions.</p>
        </div>
        <div className="info-card">
          <h4>📊 Expert Analysis</h4>
          <p>Gain insights from experienced analysts and tailored strategies for various trading instruments.</p>
        </div>
        <div className="info-card">
          <h4>🛠️ Intuitive Tools</h4>
          <p>Use advanced yet user-friendly tools for technical analysis, alerts, and portfolio tracking.</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Home;
