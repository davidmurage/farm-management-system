import React, { useState, useEffect } from 'react';
import '../../styles/Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    // Simulate fetching products from an API
    useEffect(() => {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = () => {
        setProducts([...products, { id: products.length + 1, ...newProduct }]);
        alert('Product added successfully!');
        setNewProduct({ name: '', price: '', description: '', image: '' });
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="products-container">
            <h2>Manage Products</h2>
            <div className="add-product-form">
                <h3>Add New Product</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Product Price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Product Description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                />
                <input
                    type="file"
                    name="image"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={handleInputChange}
                />
                <button className="btn-add" onClick={handleAddProduct}>Add Product</button>
            </div>

            <h3>Current Products</h3>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">${product.price}</p>
                        <button className="btn-delete" onClick={() => handleDeleteProduct(product.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
