import React, { useState, useEffect } from 'react';
import '../../styles/ProductCatalog.css';

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulate fetching products from an API
        const fetchProducts = async () => {
            const fetchedProducts = [
                { id: 1, name: 'Tomatoes', price: 50, description: 'Fresh organic tomatoes', image: 'tomatoes.jpg' },
                { id: 2, name: 'Carrots', price: 30, description: 'Crunchy and healthy carrots', image: 'carrots.jpg' },
                { id: 3, name: 'Milk', price: 20, description: 'Fresh farm milk', image: 'milk.jpg' }
            ];
            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        alert(`Added ${product.name} to cart!`);
        // Add logic to add the product to the cart
    };

    return (
        <div className="catalog-container">
            <h2>Available Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">${product.price}</p>
                        <button
                            className="btn-add-to-cart"
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
