const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: String,
  slug: String,
  shortDesc: String,
  description: String,
  aboutThis: String,
  technicalDetails: String,
  price: Number,
  oldPrice: Number,
  discount: Number,
  couponCode: String,
  category: String,
  subcategory: String,
  brand: String,
  sku: String,
  stock: Number,
  image: String,
  image1: String,
  image2: String,
  video: String,
  spec1: String,
  spec2: String,
  spec3: String,
  weight: String,
  dimensions: String,
  shippingTime: String,
  returnPolicy: String,
  color: String,
  size: String,
  status: {
    type: String,
    default: "active"
  },
  metaTitle: String,
  metaDescription: String,
  metaKeywords: String,
  reviews: String,
  faqs: String,
  warranty: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.data || mongoose.model("data", dataSchema);