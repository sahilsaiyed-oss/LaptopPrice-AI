import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import API from '../services/api';

const Charts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        API.get('/charts').then((res) => {
    setData(res.data.brand_distribution);
});
    }, []);

    return (
        <div className="charts-page">
            <h2>Brand vs Average Price Analysis</h2>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#007bff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Charts;