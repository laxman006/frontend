import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/productAPI';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res.data);
    }).catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Product Listing</h2>
      <div className="row g-4">
        {products.map(product => (
          <div key={product._id} className="col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
// This file is a React component that fetches and displays a list of products from an API.