// frontend/src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';

import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/categories" element={<Home />} />
        <Route path="/about" element={<div className="text-2xl font-bold">About Page</div>} />
        <Route path="/contact" element={<div className="text-2xl font-bold">Contact Page</div>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<div className="text-2xl font-bold">Payment Successful!</div>} />
        <Route path="/cancel" element={<div className="text-2xl font-bold">Payment Canceled</div>} />
        <Route path="/test" element={<div className="text-2xl font-bold text-center py-10">Test Page</div>} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;