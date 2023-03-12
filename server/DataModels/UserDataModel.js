let mongooseObj = require("mongoose"),
  mongoSchema = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack_practice");

let userSchema = new mongoSchema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

let userModel = mongooseObj.model("user", userSchema);
module.exports = userModel;
