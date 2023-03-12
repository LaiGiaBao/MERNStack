let mongooseObj = require("mongoose"),
  mongoSchema = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack_practice");

let productSchema = new mongoSchema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
  features: { type: String },
  rating: { type: Number, default: 0 },
  categories: { type: Array },
});

let productModel = mongooseObj.model("product", productSchema);
module.exports = productModel;
