// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  description: { type: String },
  category: { type: String },
  rating: { type: Number, default: 4.5 },
  stock: { type: Number, default: 0 },
});

module.exports = mongoose.model('Product', productSchema);