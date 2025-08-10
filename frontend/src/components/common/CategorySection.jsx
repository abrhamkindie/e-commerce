import { Link } from 'react-router-dom';
import { Headphones, Watch, Smartphone, Sofa, Lamp, Palette, ChevronRight, Shirt, Dumbbell, BatteryCharging,Droplet } from 'lucide-react';
import { toast } from 'react-toastify';

const CategorySection = () => {
  const categoryGroups = {
    Electronics: [
      { name: 'Audio', icon: Headphones },
      { name: 'Wearables', icon: Watch },
      { name: 'Gadgets', icon: Smartphone },
    ],
    Home: [
      { name: 'Furniture', icon: Sofa },
      { name: 'Decor', icon: Palette },
      { name: 'Lighting', icon: Lamp },
    ],
      Clothing: [
      { name: 'Apparel', icon: Shirt },
      { name: 'Footwear', icon: Shirt },
      { name: 'Accessories', icon: Shirt },
    ],
    Sports: [
      { name: 'Fitness Gear', icon: Dumbbell },
      { name: 'Outdoor Equipment', icon: Dumbbell },
      { name: 'Sports Apparel', icon: Shirt },
    ],
    'Electronics Accessories': [
      { name: 'Chargers', icon: BatteryCharging },
      { name: 'Cables', icon: BatteryCharging },
      { name: 'Cases', icon: BatteryCharging },
    ],
      Beauty: [
    { name: 'Skincare', icon: Droplet },
    { name: 'Makeup', icon: Droplet },
    { name: 'Fragrance', icon: Droplet },
  ],
  };

  const handleCategoryClick = (category) => {
    toast.info(`Exploring ${category} category!`);
  };

  return (
    <section id="categories" className="bg-gradient-to-br from-indigo-50 to-white border-y py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h4 className="text-3xl font-bold mb-10 text-gray-800 flex items-center gap-3">
          <Headphones className="text-indigo-600" size={28} />
          Explore by Category
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(categoryGroups).map(([groupName, categories]) => (
            <div key={groupName} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h5 className="text-xl font-semibold text-indigo-700 mb-6 border-b border-indigo-100 pb-2">
                {groupName}
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map(({ name, icon: Icon }) => (
                  <Link
                    key={name}
                    to={`/shop?category=${encodeURIComponent(name)}`}
                    onClick={() => handleCategoryClick(name)}
                    className="group block p-5 rounded-xl bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 hover:border-indigo-300 hover:-translate-y-1 hover:rotate-1 transition-all duration-300 perspective-500 preserve-3d"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="text-indigo-600 group-hover:text-yellow-500 transition-colors duration-300" size={24} />
                      <div>
                        <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                          Shop {name}
                        </div>
                        <div className="font-medium text-gray-900 group-hover:text-indigo-800 text-lg mt-1">
                          {name} Collection
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 h-1 bg-gradient-to-r from-yellow-300 to-indigo-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:from-indigo-700 hover:to-violet-700 transition-all duration-300"
            onClick={() => toast.success('Browse all categories!')}
          >
            View All Categories
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;