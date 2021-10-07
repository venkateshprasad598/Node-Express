const express = require("express");
const app = express();
const about = require("./About");
const logger = require("./data/logger");

app.use(logger);
app.use("/about", about);

app.get("/", (req, res) => {
  res.status(200).json("Hello World");
});
app.listen(5000, () => {
  console.log("server is listening at port 5000...");
});
