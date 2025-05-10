// frontend/src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function ProductForm({ onProductAdded }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name.trim() || !description.trim() || !price) {
            setError("All fields are required and cannot be empty.");
            return;
        }
        if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
            setError("Price must be a positive number.");
            return;
        }

        try {
            const productData = {
                name,
                description,
                price: parseFloat(price)
            };
            const response = await axios.post(`${API_URL}/products/`, productData);
            setSuccess('Product added successfully!');
            setName('');
            setDescription('');
            setPrice('');
            if (onProductAdded) {
                onProductAdded(response.data);
            }
            // Clear success message after a few seconds
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            let errorMessage = 'Failed to add product.';
            if (err.response && err.response.data) {
                // Assuming backend sends errors in a structured way, e.g., { name: ["This field is required."]}
                const errors = err.response.data;
                const messages = Object.values(errors).flat().join(' ');
                if (messages) errorMessage += ` ${messages}`;
            } else if (err.message) {
                errorMessage += ` ${err.message}`;
            }
            setError(errorMessage);
        }
    };

    return (
        <div>
            <h2>Add New Product</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        step="0.01"
                        min="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default ProductForm;