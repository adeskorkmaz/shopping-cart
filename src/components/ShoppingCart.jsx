import React from 'react';

const ShoppingCart = ({ cartItems, handleAddToCart, handleRemoveFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Alışveriş Sepeti</h2>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <strong>{item.name}</strong> - {item.price.toFixed(2)} TL - Adet: {item.quantity}
              </div>
              <div>
                <button onClick={() => handleRemoveFromCart(item)}>Çıkar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div>
        Toplam Fiyat: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </div>
    </div>
  );
};

export default ShoppingCart;
