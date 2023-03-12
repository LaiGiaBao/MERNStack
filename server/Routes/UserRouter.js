const app = require("express");
let userRouter = app.Router({});

const userModel = require("../DataModels/UserDataModel");
userRouter.post("/api/login", (req, res) => {
  userModel.findOne({ username: req.body.username }, (err, data) => {
    if (err) {
      res.send(err);
    } else if (!data) {
      res.send({ error: "No such user exists" });
    } else {
      if (data.password !== req.body.password) {
        res.send({ error: "incorrect password" });
      } else {
        res.send(data);
      }
    }
  });
});

userRouter.post("/api/signup", (req, res) => {
  userModel.findOne({ username: req.body.username }, (err, data) => {
    if (err) {
      res.send(err);
    } else if (data) {
      res.send({ error: "username is already exists" });
    } else {
      let modelObj = new userModel(req.body);
      modelObj.save((err, newUser) => {
        if (err) {
          res.send(err);
        } else {
          res.send(newUser);
        }
      });
    }
  });
});

module.exports = userRouter;
