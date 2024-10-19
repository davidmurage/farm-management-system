import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/FarmerDashboard.css';

const FarmerDashboard = () => {
    return (
        <div className="farmer-dashboard">
            <header className="dashboard-header">
                <h2>Farmer Dashboard</h2>
                <p>Manage your farm and track your activities.</p>
            </header>
            <div className="dashboard-container">
                <div className="dashboard-item">
                    <h3>Crops</h3>
                    <p>View and manage your crops.</p>
                    <Link to="/add-crop" className="btn-dashboard">Manage Crops</Link>
                </div>
                <div className="dashboard-item">
                    <h3>Livestock</h3>
                    <p>Track your livestock and update health records.</p>
                    <Link to="/add-livestock" className="btn-dashboard">Manage Livestock</Link>
                </div>
                <div className="dashboard-item">
                    <h3>Products</h3>
                    <p>List your products for sale and manage your stock.</p>
                    <Link to="/products" className="btn-dashboard">Manage Products</Link>
                </div>
                <div className="dashboard-item">
                    <h3>Orders</h3>
                    <p>Check orders from buyers and manage deliveries.</p>
                    <Link to="/farmer-orders" className="btn-dashboard">View Orders</Link>
                </div>
            </div>
        </div>
    );
};

export default FarmerDashboard;
