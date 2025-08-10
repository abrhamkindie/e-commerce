import React, { memo, useMemo, useCallback, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import ProductCard from '../components/common/ProductCard';
import Footer from '../components/common/Footer';
import CategorySection from '../components/common/CategorySection';
 
import About from './About';
import useProducts from '../hooks/useProducts';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  const { products, loading } = useProducts();
  const { addToCart } = useContext(CartContext);

  // Memoized add to cart handler
  const handleAddToCart = useCallback((product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  }, [addToCart]);

  // Memoized featured products
  const featuredProducts = useMemo(() => products.slice(0, 4), [products]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight animate-fade-in">
              Shop Smarter. <span className="text-yellow-300">Buy Happier.</span>
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Discover curated products, exclusive deals, and lightning-fast delivery in our premium marketplace.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#featured"
                className="inline-flex items-center justify-center bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-50 transition-colors duration-300"
            //    onClick={() => toast.info('Explore our featured collection!')}
              >
                Shop Now
              </a>
              <a
                href="#categories"
                className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors duration-300"
              >
                Browse Categories
              </a>
            </div>
            <div className="mt-6 text-sm opacity-90">
              <span className="font-semibold">Free shipping</span> on orders over
              <span className="font-semibold"> $50</span> • 30-day returns • Secure payments
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl p-3 shadow-lg animate-fade-in">
              <img
                src={featuredProducts[0]?.image || 'https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                alt={featuredProducts[0]?.name || 'Featured product'}
                className="w-full h-64 object-cover rounded-md"
                loading="lazy"
              />
              <div className="mt-3 p-4">
                <h2 className="text-2xl font-bold text-gray-800">{featuredProducts[0]?.name || 'Featured Deal'}</h2>
                <p className="mt-2 text-gray-600">
                  {featuredProducts[0]?.description || 'Exclusive offer, limited stock! Grab yours now.'}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-gray-900">${featuredProducts[0]?.price?.toFixed(2) || '99'}</span>
                  <button
                    onClick={() => featuredProducts[0] && handleAddToCart(featuredProducts[0])}
                    className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Featured Products Carousel */}
      <section id="featured" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Featured Products</h3>
          <a className="text-indigo-600 font-medium hover:underline" href="/shop">
            View all products →
          </a>
        </div>
        {loading ? (
          <p className="text-gray-500 text-center">Loading products...</p>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-10"
          >
            {featuredProducts.map((p) => (
              <SwiperSlide key={p._id}>
                <ProductCard p={p} onAddToCart={handleAddToCart} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>







      {/* Categories */}
      <CategorySection/>

 
      {/* About us*/ }
         <About/>

      {/* Newsletter */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h4 className="text-2xl font-bold">Join Our Newsletter</h4>
          <p className="mt-2 opacity-90">Get exclusive deals, early access, and product tips.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success('Thanks for subscribing!');
            }}
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="px-4 py-3 rounded-md text-gray-800 w-full sm:w-auto min-w-[18rem] focus:ring-2 focus:ring-yellow-300"
            />
            <button className="bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default memo(Home);