// src/components/ResultCard.jsx

import React from 'react';
import '../styles/result.css';

const ResultCard = ({ prediction, loading }) => {

    console.log("RESULT CARD DATA:", {
        prediction,
        loading,
        type: typeof prediction
    });


    return (
        <div className="result-card">

            {loading ? (

                <p className="result-placeholder">
                    Calculating estimated price...
                </p>


            ) : prediction !== null && prediction !== undefined ? (

                <>

                    <div className="result-header">
                        Estimated Laptop Price
                    </div>


                    <div className="result-price">
                        ₹ {Number(prediction).toLocaleString("en-IN")}
                    </div>

                </>


            ) : (

                <p className="result-placeholder">
                    Prediction will appear here after clicking Predict Price.
                </p>

            )}

        </div>
    );
};


export default ResultCard;