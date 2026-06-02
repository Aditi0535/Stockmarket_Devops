# 📊 StockTradePro Frontend

**StockTradePro** is a modern, responsive web application for tracking and analyzing the Indian Stock Market, Forex, and Cryptocurrency.  
This **frontend** is built with **React** (using both JSX and React.createElement), React Router, and custom CSS for a professional user experience.

---

## 🌟 Features

- **Indian Stock Market:**  
  Real-time data, indices, and educational content for NSE & BSE.

- **Forex Trading:**  
  Currency pairs, trading hours, and forex basics.

- **Cryptocurrency:**  
  Overview of blockchain, popular coins, and trading strategies.

- **Contact Form:**  
  Users can submit queries directly from the app.

- **Market Ticker:**  
  Live scrolling ticker for NIFTY, SENSEX, USD/INR, BTC, ETH, and more.

- **Responsive Design:**  
  Clean, mobile-friendly UI with custom CSS.

---

## 🛠️ Tech Stack

| Technology         | Purpose                         |
|--------------------|---------------------------------|
| **React**          | UI library                      |
| **React Router**   | Routing/navigation              |
| **CSS**            | Styling and layout              |
| **Fetch API**      | Backend communication           |

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```sh
git clone <your-repo-url>
cd stock-trading-app/frontend
```

### 2. **Install Dependencies**

```sh
npm install
```

### 3. **Start the Development Server**

```sh
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
frontend/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── MarketCard.js
│   ├── pages/
│   │   ├── Contact.js
│   │   ├── Crypto.js
│   │   ├── Forex.js
│   │   ├── Home.js
│   │   └── IndianStock.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── card.css
│   │   ├── Crypto.css
│   │   ├── footer.css
│   │   ├── Forex.css
│   │   ├── header.css
│   │   ├── IndianStock.css
│   │   └── pages.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🔗 Backend Integration

- The frontend communicates with the backend (Node.js/Express) for contact form submissions.
- Update the API endpoint in `src/pages/Contact.js` if your backend runs on a different host or port.

---

## 💡 Customization

- **Styling:**  
  All styles are in `src/styles/`. Adjust colors, fonts, and layouts as needed.

- **Navigation:**  
  Edit `src/components/Header.js` and `src/App.js` to add or remove navigation links.

- **Content:**  
  Update the content in `src/pages/` for each market or add new pages as required.
