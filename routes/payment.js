const express = require("express");
const Router = express.Router();
Router.get("/", (req, res) => {
  res.send("Payment Page");
});

Router.get("/pay", (req, res) => {
  res.send("Payment Successful");
});
module.exports = Router;
