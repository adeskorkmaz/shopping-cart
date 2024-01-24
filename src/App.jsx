import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Fare', price: 10.0 },
    { id: 2, name: 'Klavye', price: 20.0 },
    { id: 3, name: 'Monitör', price: 50.0 },
    { id: 4, name: 'Telefon Tutacağı', price: 10.0 },
    { id: 5, name: 'Tablet', price: 20.0 },
    { id: 6, name: 'Kalem', price: 50.0 },
    { id: 7, name: 'Monitör Yükseltici', price: 10.0 },
    { id: 8, name: 'Laptop Yükseltici', price: 20.0 },
    { id: 9, name: 'Telefon Kılıfı', price: 50.0 }
  ]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Sepete ürün ekleyin
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      // Eğer ürün zaten sepette varsa quantity'yi artır
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Eğer ürün sepette yoksa yeni bir öğe olarak ekleyin
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    // Sepetten ürün çıkarın
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem && existingItem.quantity > 1) {
      // Eğer ürün sepette varsa ve quantity > 1 ise quantity'yi azalt
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Eğer ürün sepette varsa ve quantity 1 ise ürünü sepetteki listeden kaldır
      const updatedCart = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="App">
      <h1>Shopping Machine</h1>
      <br/>
      <ProductList products={products} handleAddToCart={handleAddToCart} />
      <ShoppingCart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
    
  );
}

export default App;