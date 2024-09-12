
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../store/cartSlice';
import { food_list } from '../assets/assets';

const ProductList = () => {
  // const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  return (
    <div className="grid  grid-cols-3 gap-4">
      <div className="bg-red-600">
      {food_list.map((product) => (
        <div key={product._id} className="border p-4">
          <img src={product.image} alt={product.name} className="w-full" />
          <h3 className="text-lg">{product.name}</h3>
          <p>${product.price}</p>

        </div>
        
        
        
      ))}
      </div>
    </div>
  );
};

export default ProductList;
