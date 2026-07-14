// src/components/PredictionForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/form.css';

const PredictionForm = ({ setPrediction, setLoading }) => {
  // 1. State to store all form inputs
  const [formData, setFormData] = useState({
    brand: '',
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
    warranty: '',
    spec_rating: ''
  });

  // 2. Handle input changes for all fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setPrediction(null); // Reset old prediction

    try {
      // Send POST request to FastAPI
      const response = await axios.post('http://127.0.0.1:8000/predict', {
        brand: formData.brand,
        processor: formData.processor,
        CPU: formData.CPU,
        Ram: parseFloat(formData.Ram), // Convert to number
        Ram_type: formData.Ram_type,
        ROM: parseFloat(formData.ROM), // Convert to number
        ROM_type: formData.ROM_type,
        GPU: formData.GPU,
        display_size: parseFloat(formData.display_size),
        resolution_width: parseInt(formData.resolution_width),
        resolution_height: parseInt(formData.resolution_height),
        OS: formData.OS,
        warranty: formData.warranty,
        spec_rating: parseFloat(formData.spec_rating)
      });

      // Update the prediction state in App.jsx
      setPrediction(response.data.predicted_price);
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Error: Backend is not responding!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-group">
          <label>Brand</label>
          <input name="brand" type="text" placeholder="e.g. Dell" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Processor</label>
          <input name="processor" type="text" placeholder="e.g. Intel Core i5" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>CPU</label>
          <input name="CPU" type="text" placeholder="e.g. 12th Gen" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>RAM (GB)</label>
          <input name="Ram" type="number" placeholder="e.g. 16" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>RAM Type</label>
          <input name="Ram_type" type="text" placeholder="e.g. DDR4" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Storage (GB)</label>
          <input name="ROM" type="number" placeholder="e.g. 512" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Storage Type</label>
          <input name="ROM_type" type="text" placeholder="e.g. SSD" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>GPU</label>
          <input name="GPU" type="text" placeholder="e.g. NVIDIA RTX 3050" onChange={handleChange} required />
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
          <input name="OS" type="text" placeholder="e.g. Windows 11" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Warranty</label>
          <input name="warranty" type="text" placeholder="e.g. 1 Year" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Specification Rating</label>
          <input name="spec_rating" type="number" placeholder="e.g. 85" onChange={handleChange} required />
        </div>

        <div className="predict-btn-container">
          <button type="submit" className="predict-btn">Predict Price</button>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;