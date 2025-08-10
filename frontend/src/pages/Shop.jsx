import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    rating: 4.5,
    image:
      "https://plus.unsplash.com/premium_photo-1664202526744-516d0dd22932?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 79.99,
    rating: 4.7,
    image:
      "https://plus.unsplash.com/premium_photo-1664202526744-516d0dd22932?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 39.99,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=800&q=80",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 49.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <header className="bg-white shadow-md py-6 px-4 sm:px-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">🛍️ Our Shop</h1>
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>
      </header>

      {/* Product Grid */}
      <main className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg object-cover h-48 w-full"
            />
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-500">${product.price}</p>

            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill={
                    i < Math.floor(product.rating) ? "currentColor" : "none"
                  }
                />
              ))}
              <span className="ml-1 text-sm text-gray-500">
                ({product.rating})
              </span>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
