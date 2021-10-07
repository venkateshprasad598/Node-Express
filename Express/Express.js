const express = require("express");
const about = require("./About");
const app = express();
app.get("/", (req, res) => {
  res.status(200).json("Hello World");
});
app.use("/about", about);
app.listen(5000, () => {
  console.log("server is listening at port 5000...");
});
