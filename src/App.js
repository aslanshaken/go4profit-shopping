import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import CheckoutPage from './components/CheckoutPage';

function App() {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <HomePage
          addToCart={addToCart}
          cart={cart}
          cartCount={getTotalItems()}
          goToCheckout={() => setCurrentPage('checkout')}
        />
      ) : (
        <CheckoutPage
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          getTotalPrice={getTotalPrice}
          goBack={() => setCurrentPage('home')}
        />
      )}
    </div>
  );
}

export default App;
