import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [rentedItems, setRentedItems] = useState([]);
  const [cartCost, setCartCost] = useState(0);

  // adds item to cart
  const addToCart = (item) => {
    const itemAlreadyInCart = cartItems.find(cartItem => cartItem.id === item.id);

    if (itemAlreadyInCart) {
      return;
    }

    setCartItems([...cartItems, item]);
    setCartCost(cartCost + item.price);
  };

  // removes item with matching id form cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    const removedItem = cartItems.find(item => item.id === id);
    setCartCost(cartCost - removedItem.price);
  };

  // clears cart
  const clearCart = () => {
    setCartItems([]);
    setCartCost(0);
  };

  // preps cart for checkout by filling out renteditems array with items in cart at checkout and clearing cart
  const checkoutCart = () => {
    setRentedItems(cartItems);
    clearCart();
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, checkoutCart, rentedItems, cartCost }}>
      {children}
    </CartContext.Provider>
  );
};
