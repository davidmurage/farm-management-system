import React, { useState, useEffect } from 'react';
import '../../styles/FarmerOrders.css';

const FarmerOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Simulate fetching orders from an API
        const fetchOrders = async () => {
            const fetchedOrders = [
                { id: 1, buyerName: 'John Doe', product: 'Tomatoes', quantity: 20, status: 'Pending' },
                { id: 2, buyerName: 'Jane Smith', product: 'Milk', quantity: 10, status: 'Shipped' },
                { id: 3, buyerName: 'Robert Brown', product: 'Potatoes', quantity: 50, status: 'Completed' },
            ];
            setOrders(fetchedOrders);
        };

        fetchOrders();
    }, []);

    return (
        <div className="orders-container">
            <h2>Buyer Orders</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Buyer</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.buyerName}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>
                                <span className={`status ${order.status.toLowerCase()}`}>
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FarmerOrders;
