let mongooseObj = require("mongoose"),
  mongoSchema = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack_practice");

let cartSchema = new mongoSchema(
  {
    userId: { type: Object, require: true },
    items: { type: Object },
  },
  {
    versionKey: false,
  }
);
let cartModel = mongooseObj.model("cart", cartSchema);
module.exports = cartModel;
