import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/Register.css';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'farmer',  // Default to farmer
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform registration logic here (e.g., send formData to server)
        try{
            const res = await axios.post('http://localhost:8000/authentication/register/', formData)
            console.log(res.data);
            navigate('/login');
        }catch(error){
            console.log(error);
        }
        navigate('/login');  // Redirect to login after successful registration
    };

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
        <div className="register-container">
           

            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                />
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="farmer">Farmer</option>
                    <option value="buyer">Buyer</option>
                </select>
                <button type="submit" className="register-btn">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login Here</Link></p>
        </div>
        </div>
    );
};

export default Register;
