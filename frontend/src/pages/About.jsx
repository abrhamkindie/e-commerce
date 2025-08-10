// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Heart, Truck, Shield, User } from 'lucide-react';
// import { toast } from 'react-toastify';
// import TeamImage from './../assets/images/TeamImage profile.jpg';

// import FirstImage from './../assets/images/md-duran-CXzM22CtVl8-unsplash.jpg';
// import SecondImage from './../assets/images/md-duran-RhIXw1Ua-NI-unsplash.jpg';
// import ThirdImage from './../assets/images/md-duran-Q0Wp8p64XRU-unsplash.jpg';

// const About = () => {
//   return (
//     <main className="min-h-screen bg-gray-50 text-gray-800">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 text-center animate-fade-in">
//           <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
//             About MERNCommerce<span className="text-yellow-300">Pro</span>
//           </h1>
//           <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
//             We're passionate about delivering curated products, exceptional service, and a seamless shopping experience.
//           </p>
//           <Link
//             to="/contact"
//             className="mt-8 inline-flex items-center justify-center bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-50 transition-colors duration-300"
//             onClick={() => toast.info('Get in touch with us!')}
//           >
//             Contact Us
//           </Link>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <div className="flex flex-col lg:flex-row items-center gap-10">
//           <div className="lg:w-1/2">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Founded in 2025, MERNCommercePro started with a simple goal: to make online shopping delightful and accessible. From our humble beginnings, we’ve grown into a trusted marketplace offering high-quality products in audio, wearables, gadgets, and more. Our commitment to customer satisfaction drives everything we do.
//             </p>
//           </div>
//           <div className="lg:w-1/2">
//             <img
//               src={TeamImage}
//               alt="Our Story"
//               className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="bg-white border-t border-b py-12">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
//           <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             At MERNCommercePro, our mission is to empower customers with choice, convenience, and confidence. We curate products that inspire, ensure fast delivery, and provide exceptional support to make every purchase a joy.
//           </p>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-indigo-50 p-6 rounded-lg">
//               <Truck className="text-indigo-600 mx-auto mb-3" size={32} />
//               <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
//               <p className="mt-2 text-sm text-gray-600">Next-day delivery in many cities.</p>
//             </div>
//             <div className="bg-yellow-50 p-6 rounded-lg">
//               <Shield className="text-yellow-600 mx-auto mb-3" size={32} />
//               <h3 className="font-semibold text-gray-800">Secure Shopping</h3>
//               <p className="mt-2 text-sm text-gray-600">PCI-compliant payments and data protection.</p>
//             </div>
//             <div className="bg-green-50 p-6 rounded-lg">
//               <Heart className="text-green-600 mx-auto mb-3" size={32} />
//               <h3 className="font-semibold text-gray-800">Customer First</h3>
//               <p className="mt-2 text-sm text-gray-600">30-day returns and dedicated support.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
  
// <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
//   <div className="text-center mb-12 animate-fade-in">
//     <h2 className="text-4xl font-extrabold text-gray-900 relative inline-block">
//       Meet Our Team
//       <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-300 to-indigo-600 rounded-full" />
//     </h2>
//     <p className="text-gray-600 max-w-3xl mx-auto mt-4">
//       Our dedicated team, proudly serving since August 09, 2025, ensures an exceptional shopping experience with 3 expert members.
//     </p>
//   </div>
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//     {[
//       { name: 'Jane Doe', role: 'Founder & CEO', img: FirstImage, bio: 'Visionary leader with over 10 years in e-commerce, driving innovation since 2025.' },
//       { name: 'John Smith', role: 'Head of Product', img: SecondImage, bio: 'Product expert with a passion for quality, shaping our catalog since 2025.' },
//       { name: 'Emily Brown', role: 'Customer Success Lead', img: ThirdImage, bio: 'Dedicated to support, ensuring customer happiness since August 09, 2025.' },
//     ].map((member) => (
//       <div
//         key={member.name}
//         className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border border-indigo-100 hover:border-indigo-300 cursor-pointer"
//         onClick={() => toast.info(`Meet ${member.name}, ${member.role}!`)}
//       >
//         <div className="flex justify-center mb-6">
//           <img
//             src={member.img}
//             alt={member.name}
//             className="w-36 h-36 rounded-full object-cover border-4 border-yellow-200 shadow-md hover:border-indigo-300 transition-all duration-300"
//             loading="lazy"
//             onError={(e) => { e.target.src = `https://via.placeholder.com/144?text=${member.name}`; }}
//           />
//         </div>
//         <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">{member.name}</h3>
//         <div className="flex items-center justify-center gap-3 text-gray-600 text-base mb-4">
//           <User className="text-indigo-600" size={20} />
//           <p>{member.role}</p>
//         </div>
//         <p className="text-gray-600 text-sm text-center leading-relaxed">{member.bio}</p>
//         <div className="h-1 w-20 mx-auto bg-gradient-to-r from-yellow-300 to-indigo-600 rounded-full mt-4 opacity-0 hover:opacity-100 transition-opacity duration-300" />
//       </div>
//     ))}
//   </div>
// </section>
      
 
//      </main>
//   );
// };

// export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Truck, Shield, User } from 'lucide-react';
import { toast } from 'react-toastify';
import TeamImage from './../assets/images/TeamImage profile.jpg';
import FirstImage from './../assets/images/md-duran-CXzM22CtVl8-unsplash.jpg';
import SecondImage from './../assets/images/md-duran-RhIXw1Ua-NI-unsplash.jpg';
import ThirdImage from './../assets/images/md-duran-Q0Wp8p64XRU-unsplash.jpg';

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-violet-700 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            About MERNCommerce<span className="text-yellow-300">Pro</span>
          </h1>
          <p className="mt-6 text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            We're passionate about delivering curated products, exceptional service, and a seamless shopping experience.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center bg-white text-indigo-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-50 transition-all duration-300"
            onClick={() => toast.info('Get in touch with us!')}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Founded in 2025, MERNCommercePro began with a vision to revolutionize online shopping. As of August 09, 2025, we’ve evolved into a trusted marketplace, offering high-quality products in audio, wearables, gadgets, and more, driven by our unwavering commitment to customer satisfaction.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={TeamImage}
                alt="Our Story"
                className="w-full h-72 lg:h-96 object-cover rounded-xl shadow-lg border-2 border-indigo-200"
                loading="lazy"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Team+Image'; }}
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-300 text-indigo-800 font-semibold py-1 px-4 rounded-full text-sm">
                Since 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-white to-indigo-50 border-y py-16">
        <div className="max-w-7xl mx-auto px-6 text-center animate-fade-in delay-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-10">
            At MERNCommercePro, our mission is to empower customers with choice, convenience, and confidence. We curate inspiring products, ensure fast delivery, and provide exceptional support, making every purchase a joyful experience as of August 09, 2025.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
              <Truck className="text-indigo-700 mx-auto mb-4" size={36} />
              <h3 className="text-xl font-semibold text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600 mt-2">Next-day delivery in major cities.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
              <Shield className="text-yellow-700 mx-auto mb-4" size={36} />
              <h3 className="text-xl font-semibold text-gray-900">Secure Shopping</h3>
              <p className="text-gray-600 mt-2">PCI-compliant payments and data protection.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
              <Heart className="text-green-700 mx-auto mb-4" size={36} />
              <h3 className="text-xl font-semibold text-gray-900">Customer First</h3>
              <p className="text-gray-600 mt-2">30-day returns and dedicated support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="text-center mb-12 animate-fade-in delay-200">
          <h2 className="text-4xl font-extrabold text-gray-900 relative inline-block">
            Meet Our Team
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-300 to-indigo-600 rounded-full" />
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            Our dedicated team, proudly serving since August 09, 2025, ensures an exceptional shopping experience with 3 expert members.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: 'Jane Doe', role: 'Founder & CEO', img: FirstImage, bio: 'Visionary leader with over 10 years in e-commerce, driving innovation since 2025.' },
            { name: 'John Smith', role: 'Head of Product', img: SecondImage, bio: 'Product expert with a passion for quality, shaping our catalog since 2025.' },
            { name: 'Emily Brown', role: 'Customer Success Lead', img: ThirdImage, bio: 'Dedicated to support, ensuring customer happiness since August 09, 2025.' },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border border-indigo-100 hover:border-indigo-300 cursor-pointer"
              onClick={() => toast.info(`Meet ${member.name}, ${member.role}!`)}
            >
              <div className="flex justify-center mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-yellow-200 shadow-md hover:border-indigo-300 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => { e.target.src = `https://via.placeholder.com/160?text=${member.name}`; }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">{member.name}</h3>
              <div className="flex items-center justify-center gap-3 text-gray-600 text-lg mb-4">
                <User className="text-indigo-700" size={22} />
                <p>{member.role}</p>
              </div>
              <p className="text-gray-600 text-base text-center leading-relaxed">{member.bio}</p>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-300 to-indigo-600 rounded-full mt-5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <span className="inline-block bg-indigo-100 text-indigo-800 font-medium py-1 px-3 rounded-full text-sm">
            Team of 3 Experts
          </span>
        </div>
      </section>
    </main>
  );
};

export default About;