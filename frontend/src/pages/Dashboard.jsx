// src/pages/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import API from '../services/api';

import {
    ChartNoAxesColumn,
    IndianRupee,
    Laptop,
    Users
} from 'lucide-react';


const Dashboard = () => {

    const [stats, setStats] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        API.get('/dashboard')
            .then((res) => {

                setStats(res.data);

            })
            .catch((error) => {

                console.error("Dashboard API Error:", error);

            })
            .finally(() => {

                setLoading(false);

            });

    }, []);



    const cards = [

        {
            title: "Total Predictions",
            value: stats.total_predictions ?? 0,
            icon: <ChartNoAxesColumn size={28}/>
        },

        {
            title: "Avg Price",
            value: stats.avg_predicted_price
                ? `₹ ${Math.round(stats.avg_predicted_price).toLocaleString("en-IN")}`
                : "₹ 0",

            icon: <IndianRupee size={28}/>
        },


        {
            title: "Top Brand",
            value: stats.most_searched_brand ?? "N/A",
            icon: <Laptop size={28}/>
        },


        {
            title: "Active Users",
            value: stats.active_users ?? 0,
            icon: <Users size={28}/>
        }

    ];



    return (

        <div className="dashboard">


            <h1>
                Welcome Back
            </h1>


            {
                loading ? (

                    <p>
                        Loading dashboard...
                    </p>

                ) : (


                    <div className="stats-grid">


                        {
                            cards.map((card, index) => (

                                <div 
                                    className="stat-card"
                                    key={index}
                                >


                                    <div className="stat-icon">
                                        {card.icon}
                                    </div>


                                    <h3>
                                        {card.title}
                                    </h3>


                                    <p>
                                        {card.value}
                                    </p>


                                </div>

                            ))
                        }


                    </div>

                )
            }


        </div>

    );

};


export default Dashboard;