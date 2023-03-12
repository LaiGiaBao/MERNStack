const app = require("express");
let productRouter = app.Router({});

const productDataModel = require("../DataModels/ProductDataModel");

productRouter.post("/api/add", (req, res) => {
  let modelObj = new productDataModel(req.body);
  modelObj.save((err, addedProduct) => {
    if (err) {
      res.send(err);
    } else {
      res.send(addedProduct);
    }
  });
});

productRouter.get("/api/get", (req, res) => {
  productDataModel.find((err, data) => {
    res.send(data);
  });
});
module.exports = productRouter;
