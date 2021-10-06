const express = require("express");
const app = express();
app.get("./", (req, res) => {
  console.log(req.url);
  console.log("User has hit the app");
  res.send("Hello World");
});
app.get("./1", (req, res) => {
  console.log(req.url);
  console.log("User has hit the app");
  res.send("Hello World");
});
app.listen(3000);
