const express = require("express");
const path = require("path");
const app = express();
// Store All static fles, for example styling pages, funcnality pages which are related to sendFile.
app.use(express.static("./public"));

app.get("/about", (req, res) => {
  res.status(200).send("My About Page");
});
app.get("*", (req, res) => {
  res.status(404).send("Response not found");
});
app.listen(3000, () => {
  console.log("Server is listening at port 5000...");
});
