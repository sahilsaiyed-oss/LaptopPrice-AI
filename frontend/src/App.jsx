// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';
import './App.css';

function App() {
  // Shared states to communicate between Form and ResultCard
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="main-container">
      <Header />
      {/* Pass functions to set state as props */}
      <PredictionForm setPrediction={setPrediction} setLoading={setLoading} />
      {/* Pass values to display as props */}
      <ResultCard prediction={prediction} loading={loading} />
    </div>
  );
}

export default App;