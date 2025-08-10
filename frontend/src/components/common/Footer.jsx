// frontend/src/components/common/ProductCard.js
import React, { memo } from 'react';

const footer = memo(() => {
  return (
         <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-xl font-bold">AbyssiniaTrade</div>
            <p className="mt-2 text-sm text-gray-400">
              Built with care — fast, secure, and designed to delight.
            </p>
          </div>

          <div>
            <h6 className="font-semibold">Company</h6>
            <ul className="mt-2 text-sm text-gray-400 space-y-1">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold">Support</h6>
            <ul className="mt-2 text-sm text-gray-400 space-y-1">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-6 border-t border-gray-800 pt-4 text-sm text-gray-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} AbyssiniaTrade. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>




   );
});

export default footer;