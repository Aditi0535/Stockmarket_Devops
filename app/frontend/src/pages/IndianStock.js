import React from 'react';
import '../styles/IndianStock.css'; 

const IndianStock = () => {
  return (
    <div className="indian-stock-container">
      <h2>Indian Stock Market</h2>
      <div className="stock-intro">
        <p>
          The Indian Stock Market is one of the largest and most dynamic markets globally, offering a
          platform for trading shares of publicly listed companies. It plays a critical role in the
          country's economy by facilitating capital formation and wealth creation.
        </p>
      </div>

      <section className="stock-sections">
        <div className="section-card">
          <h3>Key Stock Exchanges</h3>
          <ul>
            <li><strong>BSE (Bombay Stock Exchange):</strong> Established in 1875, it is Asia's oldest stock exchange.</li>
            <li><strong>NSE (National Stock Exchange):</strong> Founded in 1992, it is India's leading exchange in terms of volume.</li>
          </ul>
        </div>

        <div className="section-card">
          <h3>Popular Indices</h3>
          <ul>
            <li><strong>SENSEX:</strong> Benchmark index of BSE, consisting of 30 well-established companies.</li>
            <li><strong>NIFTY 50:</strong> NSE's flagship index, comprising 50 diversified stocks from 13 sectors.</li>
          </ul>
        </div>

        <div className="section-card">
          <h3>Investment Opportunities</h3>
          <p>
            Investing in Indian stocks offers opportunities for long-term wealth creation through equity
            appreciation and dividends. Sectors like technology, finance, pharmaceuticals, and FMCG
            present promising growth prospects.
          </p>
        </div>

        <div className="section-card">
          <h3>Trading Hours</h3>
          <p>
            The Indian stock markets operate from <strong>9:15 AM to 3:30 PM IST</strong>, Monday through Friday,
            with pre-open and post-close sessions for order placement.
          </p>
        </div>

        <div className="section-card">
          <h3>Regulatory Body</h3>
          <p>
            The Securities and Exchange Board of India (<strong>SEBI</strong>) is the regulator ensuring market
            transparency, investor protection, and orderly functioning of stock exchanges.
          </p>
        </div>

        <div className="section-card">
          <h3>How to Get Started</h3>
          <ol>
            <li>Open a Demat and Trading Account with a SEBI-registered broker.</li>
            <li>Complete the KYC (Know Your Customer) process.</li>
            <li>Deposit funds into your trading account.</li>
            <li>Start buying and selling stocks through online or offline platforms.</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default IndianStock;
