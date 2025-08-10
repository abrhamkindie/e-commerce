// frontend/src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item._id} className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price} x 
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                    className="w-16 mx-2 border rounded p-1"
                    min="1"
                  />
                </p>
              </div>
              <button
                onClick={() => {
                  removeFromCart(item._id);
                  toast.success('Removed from cart');
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <h4 className="text-xl font-semibold mt-4">Total: ${total.toFixed(2)}</h4>
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => {
                clearCart();
                toast.success('Cart cleared');
              }}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;