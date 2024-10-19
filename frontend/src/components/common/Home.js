import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css'

const Home = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="logo">
                    <img src="logo.png" alt="Logo" className="logo-image" />
                    <h2>Farm Management System</h2>
                </div>
                <div className="header-buttons">
                    <Link to="/login" className="btn-header">Login</Link>
                    <Link to="/register" className="btn-header">Register</Link>
                </div>
            </header>

            {/* Main Home Section */}
            <div className="home">
                <h1>Welcome to the Farm Management System</h1>
                <p>Manage your farm or shop for fresh produce!</p>
                <div className="home-buttons">
                    <Link to="/register" className="btn">Register</Link>
                    <Link to="/login" className="btn">Login</Link>
                </div>
            </div>

            {/* Shooting Stars Animation */}
            <div className="shooting-stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
        </div>
    );
};

export default Home;
