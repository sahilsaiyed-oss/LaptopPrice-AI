// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
    Home,
    Search,
    BarChart3,
    FileText,
    LogOut
} from "lucide-react";

const Sidebar = () => {
    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <Home size={20}/>
        },
        {
            name: "Prediction",
            path: "/predict",
            icon: <Search size={20}/>
        },
        {
            name: "Charts",
            path: "/charts",
            icon: <BarChart3 size={20}/>
        },
        {
            name: "Logs",
            path: "/logs",
            icon: <FileText size={20}/>
        }
    ];

    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">
                AI Predictor
            </h2>

            <nav className="sidebar-menu">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? "sidebar-link active" : "sidebar-link"
                        }
                    >
                        <span className="sidebar-icon">
                            {item.icon}
                        </span>
                        <span className="sidebar-text">
                            {item.name}
                        </span>
                    </NavLink>
                ))}
            </nav>

            <button className="logout-btn">
                <LogOut size={20}/>
                <span>Logout</span>
            </button>
        </aside>
    );
};

export default Sidebar;