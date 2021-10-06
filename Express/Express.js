const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Welcome to my first Express program");
});
app.get("/about", (req, res) => {
  res.status(200).send("About my page");
});
app.all("*", (req, res) => {
  res.status(404).send("Request not found");
});

app.listen(5000);
//ok
