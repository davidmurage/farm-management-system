import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here (e.g., send credentials to server)
        alert('Login successful');
        navigate('/farmer-dashboard');  // Example: navigate to the farmer dashboard after successful login
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
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={credentials.username} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={credentials.password} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit" className="login-btn">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register Here</Link></p>
        </div>
        </div>
    );
};

export default Login;
