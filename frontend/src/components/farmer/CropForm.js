import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/CropForm.css';

const CropForm = () => {
    const [cropData, setCropData] = useState({
        name: '',
        plantingDate: '',
        expectedHarvestDate: '',
        growthStage: '',
        yieldAmount: '',
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCropData({
            ...cropData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Crop data submitted:', cropData);
        alert("Crop added successfully!");
        navigate('/farmer-dashboard'); // Redirecting after form submission
    };

    return (
        <div className="form-container">
            <h2>Add a New Crop</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Crop Name"
                    value={cropData.name}
                    onChange={handleChange}
                    required
                />
                <label>Planting Date:</label>
                <input
                    type="date"
                    name="plantingDate"
                    value={cropData.plantingDate}
                    onChange={handleChange}
                    required
                />
                <label>Expected Harvest Date:</label>
                <input
                    type="date"
                    name="expectedHarvestDate"
                    value={cropData.expectedHarvestDate}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="growthStage"
                    placeholder="Growth Stage (e.g., Seedling, Mature)"
                    value={cropData.growthStage}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="yieldAmount"
                    placeholder="Expected Yield (kg)"
                    value={cropData.yieldAmount}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Crop</button>
            </form>
        </div>
    );
};

export default CropForm;
