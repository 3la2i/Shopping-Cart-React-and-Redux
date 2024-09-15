// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i._id === item._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item._id !== id);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(i => i._id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

























// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState: { cart: [] },
//   reducers: {
//     fillCart: (state, action) => {
//       state.cart = action.payload;
//     },

//     addToCart: (state, action) => {
//       state.cart.push(action.payload);
//     },

//     updateCartItem: (state, action) => {}, //by id 

//     removeFromCart: () => {},
//   },
// });

// export const { fillCart, addToCart } = createSlice.action


// export default cartSlice.reducer