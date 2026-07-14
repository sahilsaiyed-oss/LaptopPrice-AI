// src/components/ResultCard.jsx
import React from 'react';
import '../styles/result.css';

const ResultCard = ({ prediction, loading }) => {
  return (
    <div className="result-card">
      {loading ? (
        <p className="result-placeholder">Calculating estimated price...</p>
      ) : prediction ? (
        <>
          <div className="result-header">Estimated Resale Price</div>
          <div className="result-price">₹ {prediction.toLocaleString('en-IN')}</div>
        </>
      ) : (
        <p className="result-placeholder">Prediction will appear here after clicking Predict Price.</p>
      )}
    </div>
  );
};

export default ResultCard;