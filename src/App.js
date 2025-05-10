// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
    // This state is used as a signal to ProductList to refresh
    const [productAddedSignal, setProductAddedSignal] = useState(0);

    const handleProductAdded = () => {
        setProductAddedSignal(prev => prev + 1); // Increment to trigger useEffect in ProductList
    };

    return (
        <Router>
            <div className="container">
                <header>
                    <h1>Simple Product Management</h1>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                    Product List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/add-product" className={({ isActive }) => isActive ? "active" : ""}>
                                    Add Product
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={<ProductList newProductSignal={productAddedSignal} />}
                        />
                        <Route
                            path="/add-product"
                            element={<ProductForm onProductAdded={handleProductAdded} />}
                        />
                        <Route path="/products/:productId" element={<ProductDetail />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;