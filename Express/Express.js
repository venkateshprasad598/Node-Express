const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(200).json("My Home Page");
});
app.get("/about", (req, res) => {
  console.log(req.query);
  res.status(200).json("Query");
});
app.listen(3000, () => {
  console.log("Server is listening ar port 3000...");
});
