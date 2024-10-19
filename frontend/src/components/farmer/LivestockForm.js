import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/LivestockForm.css';

const LivestockForm = () => {
    const [livestockData, setLivestockData] = useState({
        livestockType: '',
        age: '',
        healthStatus: '',
        products: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLivestockData({
            ...livestockData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Livestock data submitted:', livestockData);
        alert("Livestock added successfully!");
        navigate('/farmer-dashboard'); // Redirect after submission
    };

    return (
        <div className="form-container">
            <h2>Add New Livestock</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="livestockType"
                    placeholder="Livestock Type (e.g., Cow, Goat)"
                    value={livestockData.livestockType}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age (in years)"
                    value={livestockData.age}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="healthStatus"
                    placeholder="Health Status"
                    value={livestockData.healthStatus}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="products"
                    placeholder="Products (e.g., Milk, Eggs)"
                    value={livestockData.products}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Livestock</button>
            </form>
        </div>
    );
};

export default LivestockForm;
