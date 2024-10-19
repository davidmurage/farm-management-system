import React, { useState } from 'react';
import '../../styles/Cart.css';

const Cart = () => {
    // Initial state for cart items
    const [cartItems, setCartItems] = useState([
        { id: 1, product: 'Tomatoes', quantity: 2, price: 50 },
        { id: 2, product: 'Carrots', quantity: 1, price: 30 },
        { id: 3, product: 'Milk', quantity: 3, price: 20 }
    ]);

    // Calculate the total price
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Handle quantity change
    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Handle item removal
    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            {cartItems.length > 0 ? (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.product}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min="1"
                                        onChange={(e) =>
                                            handleQuantityChange(item.id, parseInt(e.target.value))
                                        }
                                    />
                                </td>
                                <td>${item.price}</td>
                                <td>${item.price * item.quantity}</td>
                                <td>
                                    <button
                                        className="btn-remove"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Your cart is empty.</p>
            )}

            {cartItems.length > 0 && (
                <div className="cart-total">
                    <h3>Total: ${calculateTotal()}</h3>
                    <button className="btn-checkout">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
