import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return React.createElement("header", { className: "header" }, [
    React.createElement("h1", { className: "logo" }, "📈 Trading Hub"),
    React.createElement("nav", null, [
      React.createElement(Link, { to: "/" }, "Home"),
      React.createElement(Link, { to: "/indian-stock" }, "Indian Stock"),
      React.createElement(Link, { to: "/forex" }, "Forex"),
      React.createElement(Link, { to: "/crypto" }, "Crypto"),
      React.createElement(Link, { to: "/contact" }, "Contact"),

    ])
  ]);
}

export default Header;
