import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/products', // update if backend runs elsewhere
});

export const getProducts = () => API.get('/');
export const addProduct = (data) => API.post('/', data);
