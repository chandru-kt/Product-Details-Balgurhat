// frontend/src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            if (!productId) return;
            setLoading(true);
            setError('');
            try {
                const response = await axios.get(`${API_URL}/products/${productId}/`);
                setProduct(response.data);
            } catch (err) {
                let errorMessage = 'Failed to fetch product details.';
                if (err.response) {
                    if (err.response.status === 404) {
                        errorMessage = 'Product not found.';
                    } else if (err.response.data && err.response.data.detail) {
                        errorMessage += ` ${err.response.data.detail}`;
                    }
                } else {
                    errorMessage += ` ${err.message}`;
                }
                setError(errorMessage);
                setProduct(null); // Ensure no stale data is shown
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <p className="loading-message">Loading product details...</p>;
    if (error) return <p className="error-message">{error}</p>;
    if (!product) return <p>Product information is not available.</p>; // Handles case where error might not be set but product is null

    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${parseFloat(product.price).toFixed(2)}</p>
            <p><strong>Added:</strong> {new Date(product.created_at).toLocaleDateString()}</p>
            <p><strong>Last Updated:</strong> {new Date(product.updated_at).toLocaleString()}</p>
            <Link to="/">← Back to Product List</Link>
        </div>
    );
}

export default ProductDetail;