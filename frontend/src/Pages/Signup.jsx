import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Signup.css"; // Import CSS

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <div className="input-group">
                    <input type="text" placeholder="Full Name" />
                </div>
                <div className="input-group">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" />
                </div>
                <button className="signup-btn">Sign Up</button>
                <p className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
