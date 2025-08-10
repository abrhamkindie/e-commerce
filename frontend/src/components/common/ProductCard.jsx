// frontend/src/components/common/ProductCard.js
import React, { memo } from 'react';

const ProductCard = memo(({ p, onAddToCart }) => {
  return (
    <article
      className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
      aria-label={p.name}
    >
      <img
        src={p.image}
        alt={p.name}
        className="w-full h-44 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">{p.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{p.category}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">${p.price.toFixed(2)}</span>
            <div className="text-sm text-yellow-500 mt-1">⭐ {p.rating || 4.5}</div>
          </div>
          <button
            onClick={() => onAddToCart(p)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
            aria-label={`Add ${p.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
});

export default ProductCard;