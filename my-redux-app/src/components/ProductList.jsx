// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/products.json') // قراءة بيانات المنتجات من ملف JSON
      .then(response => response.json())
      .then(data => setProducts(data.food_list));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4">
          <img src={product.image} alt={product.name} className="w-full" />
          <h3 className="text-lg">{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)} className="bg-green-500 text-white px-4 py-2 mt-2">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
