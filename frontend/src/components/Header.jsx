// src/components/Header.jsx
import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header-section">
      <h1>Laptop Price Prediction</h1>
      <p>Predict the estimated resale value of a used laptop using Machine Learning.</p>
    </header>
  );
};

export default Header;