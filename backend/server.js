const express =require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
 
const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const authRoutes = require('./routes/authRoutes');
 
const Product = require('./models/Product');


dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());


 
const DB = process.env.DATABASE.replace('<db_password>',process.env.DATABASE_PASSWORD);
 
 // Connect to MongoDB

mongoose.connect(DB).then(() => {
   console.log('DB connected successfully');
});


// Basic route
app.get('/', (req, res) => res.send('API running'));
app.use('/api/products', productRoutes);
//app.use('/api/payment', paymentRoutes);
app.use('/api/auth', authRoutes);






// backend/server.js (add temporarily)
 app.get('/seed', async (req, res) => {
  try {
    await Product.deleteMany();
    await Product.insertMany([
      {
        name: 'Wireless Headphones Pro',
        price: 129.0,
        image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b',
        description: 'High fidelity sound, 30-hour battery life',
        category: 'Audio',
        rating: 4.7,
        stock: 10,
      },
      {
        name: 'Smartwatch Series 6',
        price: 199.0,
        image: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b',
        description: 'Track fitness, calls, and notifications',
        category: 'Wearables',
        rating: 4.5,
        stock: 5,
      },
      {
        name: 'Compact Drone X',
        price: 349.0,
        image: 'https://images.unsplash.com/photo-1605217613423-0a61bd725c8a',
        description: '4K camera, foldable design',
        category: 'Gadgets',
        rating: 4.6,
        stock: 3,
      },
      {
        name: 'Ergonomic Office Chair',
        price: 219.0,
        image: 'https://images.unsplash.com/photo-1604242692760-2f7b0c26856d',
        description: 'Comfortable seating for long hours',
        category: 'Furniture',
        rating: 4.4,
        stock: 8,
      },
    ]);
    res.send('Products seeded');
  } catch (error) {
    res.status(500).send('Error seeding products');
  }
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

