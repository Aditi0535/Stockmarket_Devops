import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import IndianStock from './pages/IndianStock';  // Adjust path if necessary
import Forex from './pages/Forex';
import Crypto from './pages/Crypto'; 
import Contact from './pages/Contact'; 
// import Home from './pages/Home';




function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Home page component
function Home() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Welcome to <span className="highlight">StockTradePro</span></h1>
        <p>Your ultimate platform for trading in Indian Stocks, Forex, and Cryptocurrency markets.</p>
        <Link to="/indian-stock" className="cta-button">Explore Now</Link>
      </div>

      {/* ✅ Market Ticker */}
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


      {/* ✅ Info Section (New Addition) */}
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

            {/* ✅ Feature Cards */}
      <div className="features-container">
        <FeatureCard icon={<span role="img" aria-label="Stocks">📈</span>} title="Indian Stock Market" description="Access real-time data, latest news, and analysis on BSE & NSE. Make smarter investments with our expert insights." />
        <FeatureCard icon={<span role="img" aria-label="Forex">💱</span>} title="Forex Trading" description="Trade currencies with live exchange rates, economic calendar, and in-depth market analysis for global currency pairs." />
        <FeatureCard icon={<span role="img" aria-label="Crypto">💰</span>} title="Cryptocurrency" description="Stay updated with live crypto prices, blockchain news, and advanced trading tools for Bitcoin, Ethereum, and more." />
      </div>

    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">StockTradePro</div>
        <div className="nav-buttons">
          <Link to="/">Home</Link>
          <Link to="/indian-stock">Indian Stock</Link>
          <Link to="/forex">Forex</Link>
          <Link to="/crypto">Crypto</Link>
          <Link to="/contact">Contact</Link> {/* Add this line */}
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indian-stock" element={<IndianStock />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/contact" element={<Contact />} /> {/* Add this line */}
        </Routes>
      </main>

      <footer>
        &copy; 2025 StockTradePro | All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
