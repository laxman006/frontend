import React, { useState } from 'react';
// No additional imports are needed for this code
const ProductForm = ({ onProductAdded }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const newProduct = await response.json();
                onProductAdded && onProductAdded(newProduct); // Optional callback to refresh list
                setFormData({ name: '', price: '' }); // Clear form
                alert("Product added successfully!");
            } else {
                alert("Failed to add product");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 border rounded shadow">
            <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                    type="number"
                    name="price"
                    className="form-control"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    );
};

export default ProductForm;