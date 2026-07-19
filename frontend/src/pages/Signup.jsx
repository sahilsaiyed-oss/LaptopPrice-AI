import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleSignup = async (e) => {
        e.preventDefault(); // Page reload rokne ke liye

        try {
            await API.post("/signup", formData);
            alert("Account created successfully! Please login.");
            navigate("/login");
        } catch (err) {
            alert("Signup failed. Username might already exist.");
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-box-card">
                <div className="login-header-section">
                    <h2>Create Your Account</h2>
                    <p>Sign up to start predicting laptop prices</p>
                </div>

                <form className="login-form-wrapper" onSubmit={handleSignup}>
                    <div className="form-input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Choose a username"
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                            required
                        />
                    </div>

                    <div className="form-input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                            required
                        />
                    </div>

                    <button type="submit" className="login-action-btn">
                        Sign Up
                    </button>
                </form>

                <p className="login-redirect-footer">
                    Already have an account?{" "}
                    <Link to="/login" className="signup-accent-link">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;