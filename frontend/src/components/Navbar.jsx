// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-left">
                <span className="menu-toggle">☰</span>
                <input type="text" className="search-bar" placeholder="Search for predictions..." />
            </div>
            <div className="nav-right">
                <div className="user-profile">
                    <span className="user-name">Admin Account</span>
                    <div className="user-avatar">AD</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;