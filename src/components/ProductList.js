// frontend/src/components/ProductList.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function ProductList({ newProductSignal }) { // Renamed prop for clarity
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${API_URL}/products/`);
            setProducts(response.data);
        } catch (err) {
            setError('Failed to fetch products. ' + (err.response?.data?.detail || err.message));
        } finally {
            setLoading(false);
        }
    }, []); // Empty dependency array means this function is created once

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]); // fetchProducts is stable due to useCallback

    // Effect to re-fetch products when newProductSignal changes (e.g., after a product is added)
    useEffect(() => {
        if (newProductSignal) { // Could be a timestamp or a simple counter
            fetchProducts();
        }
    }, [newProductSignal, fetchProducts]);


    if (loading) return <p className="loading-message">Loading products...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="product-list">
            <h2>Product List</h2>
            {products.length === 0 ? (
                <p>No products yet. Go to "Add Product" to create one!</p>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>Price: ${parseFloat(product.price).toFixed(2)}</p>
                            <Link to={`/products/${product.id}`}>View Details</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProductList;