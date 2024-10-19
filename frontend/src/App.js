import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/common/Home';
import Login from './components/common/Login';
import Register from './components/common/Register';
import FarmerDashboard from './components/farmer/FarmerDashboard';
import FarmerOrders from './components/farmer/FarmerOrders';
import CropForm from './components/farmer/CropForm';
import BuyerDashboard from './components/buyer/BuyerDashboard';
import ProductCatalog from './components/buyer/ProductCatalog';
import LivestockForm from './components/farmer/LivestockForm';
import Cart from './components/buyer/Cart';
import BuyerOrders from './components/buyer/BuyerOrders';
import Products from './components/farmer/Products';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                
                <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
                <Route path="/farmer-orders" element={<FarmerOrders/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/add-crop" element={<CropForm />} />
                <Route path='/add-livestock' element={<LivestockForm/>}/>


                <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
                <Route path="/buyer-orders" element={<BuyerOrders/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/catalog" element={<ProductCatalog />} />
            </Routes>
        </Router>
    );
}

export default App;
