const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  shortDesc: String,
  description: String,
  aboutThis: String,
  technicalDetails: String,
  price: String,
  discount: String,
  couponCode: String,
  category: String,
  subcategory: String,
  brand: String,
  sku: String,
  stock: String,
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
    default: "active",
  },
  metaTitle: String,
  metaDescription: String,
  metaKeywords: String,
  reviews: String,
  faqs: String,
  warranty: String,
});

const Product = mongoose.model("Productdata", ProductSchema);

module.exports = Product;