import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({
    _id: '',
    name: '',
    brand: '',
    price: '',
    rating: '',
    variations: '',
    description: '',
    category: '',
    in_stock: true,
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleVariationsChange = (e) => {
    setProduct((prev) => ({ ...prev, variations: e.target.value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="_id" placeholder="Product ID" onChange={handleChange} required />
      <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
      <input type="text" name="brand" placeholder="Brand" onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
      <input type="file" onChange={handleImageChange} required />
      <textarea name="variations" placeholder='Variations (JSON format)' onChange={handleVariationsChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
