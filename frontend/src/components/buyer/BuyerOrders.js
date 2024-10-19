import React, { useState, useEffect } from 'react';
import '../../styles/BuyerOrders.css';

const BuyerOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Simulate fetching orders from an API
        const fetchOrders = async () => {
            const fetchedOrders = [
                { id: 1, product: 'Tomatoes', quantity: 5, status: 'Pending', date: '2023-10-12' },
                { id: 2, product: 'Carrots', quantity: 10, status: 'Shipped', date: '2023-10-10' },
                { id: 3, product: 'Milk', quantity: 3, status: 'Delivered', date: '2023-10-08' },
            ];
            setOrders(fetchedOrders);
        };

        fetchOrders();
    }, []);

    return (
        <div className="orders-container">
            <h2>Your Orders</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.date}</td>
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

export default BuyerOrders;
