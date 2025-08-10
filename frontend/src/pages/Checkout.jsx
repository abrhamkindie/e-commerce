// frontend/src/components/Checkout.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';

const stripePromise = loadStripe('<NEW_STRIPE_PUBLISHABLE_KEY>'); // Replace with pk_test_...

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await axios.post('/api/payment/create-checkout-session', { items: cart });
      await stripe.redirectToCheckout({ sessionId: response.data.id });
      clearCart();
      toast.success('Redirecting to payment...');
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Checkout failed');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Pay with Stripe
      </button>
    </div>
  );
}

export default Checkout;