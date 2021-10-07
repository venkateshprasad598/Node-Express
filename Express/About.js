const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json("This is my");
});
router.get("/products", (req, res) => {
  res.status(200).json("This is my products");
});
router.get("/products/api", (req, res) => {
  res.status(200).json("This is my api");
});

module.exports = router;
