const express = require("express");
const app = express();
const logger = require("./data/logger");
app.use(logger);
app.get("/", (req, res) => {
  res.status(200).send("<h1>Home<h1/>");
});
app.get("/about", (req, res) => {
  res.status(200).json("Hey what is up guys");
  console.log(req.user);
});
app.get("/about/info", (req, res) => {
  res.status(200).json("Okay let me give you the information");
});
app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
