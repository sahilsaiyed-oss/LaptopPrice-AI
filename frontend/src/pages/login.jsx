import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevents page reload

        try {
            const res = await API.post("/login", formData);
            localStorage.setItem("token", res.data.access_token);
            navigate("/dashboard");
        } catch (err) {
            alert("Invalid Username or Password");
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-box-card">
                <div className="login-header-section">
                    <h2>LaptopPrice AI</h2>
                    <p>Enter your details to access the dashboard</p>
                </div>

                <form className="login-form-wrapper" onSubmit={handleLogin}>
                    <div className="form-input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
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
                            placeholder="••••••••"
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
                        Login
                    </button>
                </form>

                <p className="login-redirect-footer">
                    Don't have an account?{" "}
                    <Link to="/signup" className="signup-accent-link">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;