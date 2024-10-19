import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BuyerDashboard.css';

const BuyerDashboard = () => {
    return (
        <div className="buyer-dashboard">
            <header className="dashboard-header">
                <h2>Welcome to the Buyer Dashboard</h2>
                <p>Browse available products, track your orders, and more.</p>
            </header>
            <div className="dashboard-container">
                <div className="dashboard-item">
                    <h3>Browse Products</h3>
                    <p>Explore a wide variety of fresh farm produce.</p>
                    <Link to="/catalog" className="btn-dashboard">View Products</Link>
                </div>
                <div className="dashboard-item">
                    <h3>Track Orders</h3>
                    <p>Check the status of your current and past orders.</p>
                    <Link to="/buyer-orders" className="btn-dashboard">My Orders</Link>
                </div>
                <div className="dashboard-item">
                    <h3>View Cart</h3>
                    <p>See the products you have added to your cart.</p>
                    <Link to="/cart" className="btn-dashboard">Go to Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default BuyerDashboard;
