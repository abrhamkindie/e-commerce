// frontend/src/hooks/useProducts.js
import { useState, useEffect } from 'react';
import api from '../utils/api';
import { toast } from 'react-toastify';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CACHE_KEY = 'products_cache';
    const CACHE_DURATION = 10 * 60 * 1000;

    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        const fetchedProducts = response.data;
        setProducts(fetchedProducts);
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: fetchedProducts,
          timestamp: Date.now(),
        }));
        toast.success('Products loaded');
      } catch (error) {
        console.error('Fetch products error:', error);
        toast.error('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const isExpired = Date.now() - timestamp > CACHE_DURATION;
      if (!isExpired) {
        setProducts(data);
        toast.info('Loaded products from cache');
        setLoading(false);
        return;
      }
    }

    fetchProducts();
  }, []);

  return { products, loading };
};

export default useProducts;