// src/pages/Prediction.jsx

import React, { useState } from 'react';
import API from '../services/api';
import ResultCard from '../components/ResultCard';
import '../styles/form.css';

const Prediction = () => {

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


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handlePredict = async (e) => {
        e.preventDefault();

        setLoading(true);
        setPrediction(null);

        try {

            const payload = {
                ...formData,

                spec_rating: Number(formData.spec_rating),
                Ram: Number(formData.Ram),
                ROM: Number(formData.ROM),
                display_size: Number(formData.display_size),
                resolution_width: Number(formData.resolution_width),
                resolution_height: Number(formData.resolution_height)
            };


            const response = await API.post('/predict', payload);

            console.log("Prediction Response:", response.data);


            setPrediction(
                response.data.predicted_price ??
                response.data.price ??
                response.data.prediction
            );


        } catch (error) {

            console.error(
                "Prediction Error:",
                error.response?.data || error.message
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="prediction-page">

            <h2>Price Prediction Tool</h2>


            <div className="form-card">

                <form 
                    onSubmit={handlePredict} 
                    className="form-grid"
                >

                    {Object.keys(formData).map((key) => (

                        <div 
                            className="form-group" 
                            key={key}
                        >

                            <label>
                                {key.replace('_', ' ')}
                            </label>


                            <input
                                type={
                                    [
                                        'spec_rating',
                                        'Ram',
                                        'ROM',
                                        'display_size',
                                        'resolution_width',
                                        'resolution_height'
                                    ].includes(key)
                                    ? "number"
                                    : "text"
                                }
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                required
                                placeholder={`Enter ${key.replace('_',' ')}`}
                            />

                        </div>

                    ))}


                    <div className="predict-btn-container">

                        <button 
                            type="submit" 
                            className="predict-btn"
                            disabled={loading}
                        >

                            {
                                loading 
                                ? "Calculating..." 
                                : "Predict Price"
                            }

                        </button>

                    </div>


                </form>

            </div>


            <ResultCard 
                prediction={prediction} 
                loading={loading} 
            />


        </div>
    );
};


export default Prediction;