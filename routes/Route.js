const express = require("express");
const Router = express.Router();

Router.get("/users", (req, res) => {
  res.send("Users");
});

Router.get("/users/new", (req, res) => {
  res.send("New User");
});
//PARAMS Place it completely below
Router.get("/:id", (req, res) => {
  res.send(`The id is ${req.params.id}`);
});

Router.post("/:id", (req, res) => {
  res.send(`The id is ${req.params.id}`);
});
Router.put("/:id", (req, res) => {
  res.send(`The id is ${req.params.id}`);
});
Router.patch("/:id", (req, res) => {
  res.send(`The id is ${req.params.id}`);
});
Router.delete("/:id", (req, res) => {
  res.send(`The id is ${req.params.id}`);
});

module.exports = Router;
