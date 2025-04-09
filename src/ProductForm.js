import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ onProductAdded }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/products', form);
      console.log('Product added:', res.data);
      onProductAdded && onProductAdded(res.data); // optional callback
      setForm({ name: '', description: '', price: '' });
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Add New Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={form.description}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
// This file is a React component that provides a form for adding new products to the inventory. It handles form submission and communicates with the backend API to save the product details.
// It also includes basic error handling and form validation.