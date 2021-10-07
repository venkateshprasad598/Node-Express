const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.status(200).json("Hello World");
});
app.get("/about", (req, res) => {
  res.status(200).json("This is my about");
});
app.get("/about/products", (req, res) => {
  res.status(200).json("This is my products");
});
app.get("/about/products/api", (req, res) => {
  res.status(200).json("This is my api");
});
app.listen(5000, () => {
  console.log("server is listening at port 5000...");
});
