const express = require("express");
const router = express.Router();

const cartModel = require("../DataModels/CartDataModel");
router.get("/get", (req, res) => {
  let mongodbObj = new cartModel(req.query);
  mongodbObj.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
router.get("/findCart", (req, res) => {
  cartModel.findOne(req.query).then((data) => {
    if (!data) {
      res.send({ error: "cannot find product" });
      return;
    }
    console.log(data);
    res.send(data);
  });
});
router.get("/all", (req, res) => {
  cartModel.find((err, data) => {
    if (err) {
      console.log("err ", err);
      console.log("err while fetching");
    } else {
      res.send(data);
    }
  });
});
router.post("/api/add-cart", (req, res) => {
  let mongodbObj = new cartModel(req.body);
  mongodbObj.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
module.exports = router;
