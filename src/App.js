// This file is the main entry point of the React application. It imports the Home component and renders it.
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ProductForm from './ProductForm.jsx';

const App = () => {
  const fetchProducts = () => {
    console.log('Fetching products...');
    // Add logic to fetch products here
  };

  return (
    <>
      <Home />
      <ProductForm onProductAdded={fetchProducts} />
    </>
  );
};

export default App;
// This file is the main entry point of the React application. It imports the Home component and renders it.