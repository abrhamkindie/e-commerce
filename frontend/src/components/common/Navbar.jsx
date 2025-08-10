// frontend/src/components/common/Navbar.js
import React, { useState, useContext, memo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { CartContext } from '../../context/CartContext'; // Updated path
import { toast } from 'react-toastify';

const Navbar = memo(() => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      if (searchQuery.trim()) {
         navigate(`/products?query=${encodeURIComponent(searchQuery)}`);
        setSearchQuery('');
      } else {
        toast.warn('Please enter a search term');
      }
    },
    [searchQuery, navigate]
  );

  const handleNavClick = useCallback(
    (item) => {
      setActive(item);
      setIsOpen(false);
     },
    []
  );

  return (
    <header className="bg-indigo-600 text-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white hover:text-yellow-300 transition-colors duration-200"
          onClick={() => handleNavClick('Home')}
        >
          Abyssinia<span className="text-yellow-300">Trade</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => handleNavClick(item)}
              className={`relative text-lg font-medium transition-colors ${
                active === item ? 'text-yellow-300' : 'text-white hover:text-yellow-300'
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-6">


          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-full pl-4 pr-10 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white"
            />
            <button type="submit" className="absolute right-3 top-1.5">
              <Search className="text-gray-500 hover:text-indigo-600" size={18} />
            </button>
          </form>


          <Link
            to="/cart"
            className="relative"
           >
            <ShoppingCart
              size={24}
              className="text-white hover:text-yellow-300 transition-colors duration-200"
            />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-300 text-indigo-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link
            to="/login"
            className="bg-yellow-300 text-indigo-900 font-semibold px-4 py-1 rounded-md hover:bg-yellow-400 transition-colors duration-200"
           >
            Login
          </Link>

            <Link
            to="/Signup"
            className="bg-yellow-300 text-indigo-900 font-semibold px-4 py-1 rounded-md hover:bg-yellow-400 transition-colors duration-200"
           >
            Signup
          </Link>

        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-white"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-indigo-700 py-4 px-6 space-y-4 animate-slide-down">
          {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => handleNavClick(item)}
              className={`block w-full text-left text-lg font-medium ${
                active === item ? 'text-yellow-300' : 'text-white hover:text-yellow-300'
              }`}
            >
              {item}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white"
            />
            <button type="submit" className="absolute right-3 top-1.5">
              <Search className="text-gray-500 hover:text-indigo-600" size={18} />
            </button>
          </form>
          <Link
            to="/cart"
            className="flex items-center space-x-2"
            onClick={() => {
              setIsOpen(false);
             }}
          >
            <ShoppingCart size={22} className="text-white" />
            <span className="text-white">
              Cart {cartItemCount > 0 && `(${cartItemCount})`}
            </span>
          </Link>
          <Link
            to="/login"
            className="block bg-yellow-300 text-indigo-900 font-semibold px-4 py-1 rounded-md hover:bg-yellow-400 transition-colors duration-200"
            onClick={() => {
              setIsOpen(false);
             }}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
});

export default Navbar;