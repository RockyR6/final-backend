const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    trime: true,
  },

  description: {
    type: String,
    require: true,
    trime: true,
  },

  disPrice: {
    type: Number,
    require: true,
  },

  orgPrice: {
    type: Number,
    require: true,
  },

  imgUrl: {
    type: String,
    require: true,
    trime: true,
  },
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;