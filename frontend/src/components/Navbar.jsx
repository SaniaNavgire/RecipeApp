import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the updated CSS

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">🍽 RecipeApp</Link>

                {/* Mobile Toggle Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links - Centered */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recipe">Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-recipe">Create Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                    </ul>
                </div>

                {/* Buttons on Right Side */}
                <div className="navbar-buttons">
                    <Link to="/login" className="btn btn-outline-light">Login</Link>
                    <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                </div>
            </div>

        </nav>

    );

};


export default Navbar;
