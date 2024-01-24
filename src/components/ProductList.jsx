// ProductList.js

import React from 'react';

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div className="product-list">
      <h2 className="text-3xl font-semibold mb-4">Ürünler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <div className="mb-2">
              <strong className="text-lg product-name">{product.name}</strong>
            </div>
            <div className="mb-2">Fiyat: ${product.price.toFixed(2)}</div>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
