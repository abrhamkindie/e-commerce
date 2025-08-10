import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, AlertCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import api from '../utils/api';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  // validate the form data
  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);





  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateForm()) {
        toast.error('Please fix the errors in the form');
        return;
      }
      setLoading(true);
      try {
        const response = await api.post('/auth/signup', formData);
        toast.success(response.data.message || 'Account created successfully!');
        navigate('/login');
      } catch (error) {
        const errorMessage = error.response?.data?.error || 'Failed to create account';
        toast.error(errorMessage);
        setErrors({ api: errorMessage });
      } finally {
        setLoading(false);
      }
    },
    [formData, validateForm, navigate]
  );

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create Your Account
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Join Abyssinia Trade for exclusive deals and fast checkout.
        </p>
        {errors.api && (
          <div className="flex items-center gap-2 bg-red-50 text-red-600 p-3 rounded-md mb-6">
            <AlertCircle size={20} />
            <span>{errors.api}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <User size={18} className="text-indigo-600" />
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-3 rounded-md border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Mail size={18} className="text-indigo-600" />
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-3 rounded-md border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Lock size={18} className="text-indigo-600" />
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-3 rounded-md border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800`}
              placeholder="••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
           >
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;