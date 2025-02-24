import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import CSS

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <div className="input-group">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" />
                </div>
                <button className="login-btn">Login</button>
                <p className="signup-link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
