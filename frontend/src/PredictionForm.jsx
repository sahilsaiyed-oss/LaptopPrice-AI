// src/PredictionForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = () => {
  // 1. Define state for all form fields
  const [formData, setFormData] = useState({
    brand: '',
    spec_rating: '',
    processor: '',
    CPU: '',
    Ram: '',
    Ram_type: '',
    ROM: '',
    ROM_type: '',
    GPU: '',
    display_size: '',
    resolution_width: '',
    resolution_height: '',
    OS: '',
    warranty: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. Handle Form Submission
  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Send POST request to FastAPI
      const response = await axios.post('http://127.0.0.1:8000/predict', formData);
      setPrediction(response.data.predicted_price);
    } catch (error) {
      console.error("Error predicting price:", error);
      alert("Failed to get prediction. Make sure the Backend is running!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handlePredict} className="form-grid">
        <div className="form-group">
          <label>Brand</label>
          <input name="brand" placeholder="e.g. HP" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Spec Rating</label>
          <input name="spec_rating" type="number" placeholder="e.g. 70" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Processor</label>
          <input name="processor" placeholder="e.g. Intel Core i5" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>CPU</label>
          <input name="CPU" placeholder="e.g. 12th Gen" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>RAM (GB)</label>
          <input name="Ram" type="number" placeholder="e.g. 8" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>RAM Type</label>
          <input name="Ram_type" placeholder="e.g. DDR4" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>ROM (GB)</label>
          <input name="ROM" type="number" placeholder="e.g. 512" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>ROM Type</label>
          <input name="ROM_type" placeholder="e.g. SSD" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>GPU</label>
          <input name="GPU" placeholder="e.g. Integrated" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Display Size (inches)</label>
          <input name="display_size" type="number" step="0.1" placeholder="e.g. 15.6" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Resolution Width</label>
          <input name="resolution_width" type="number" placeholder="e.g. 1920" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Resolution Height</label>
          <input name="resolution_height" type="number" placeholder="e.g. 1080" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Operating System</label>
          <input name="OS" placeholder="e.g. Windows 11" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Warranty</label>
          <input name="warranty" placeholder="e.g. 1 Year" onChange={handleChange} required />
        </div>

        <div className="button-container">
          <button type="submit" className="predict-btn" disabled={loading}>
            {loading ? "Predicting..." : "Predict Price"}
          </button>
        </div>
      </form>

      {prediction && (
        <div className="result-container">
          <h3>Estimated Market Value</h3>
          <p className="result-price">₹ {prediction.toLocaleString('en-IN')}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;