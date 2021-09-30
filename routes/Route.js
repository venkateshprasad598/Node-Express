const express = require("express");
const Router = express.Router();

Router.get("/users", (req, res) => {
  res.send("Users");
});

Router.get("/users/new", (req, res) => {
  res.send("New User");
});
//PARAMS Place it completely below
// Router.get("/:id", (req, res) => {
//   res.send(`The id is ${req.params.id}`);
// });

// Router.post("/:id", (req, res) => {
//   res.send(`The id is ${req.params.id}`);
// });
// Router.put("/:id", (req, res) => {
//   res.send(`The id is ${req.params.id}`);
// });
// Router.patch("/:id", (req, res) => {
//   res.send(`The id is ${req.params.id}`);
// });
// Router.delete("/:id", (req, res) => {
//   res.send(`The id is ${req.params.id}`);
// });
//SINCE ALL SHARE THE SAME PATH, WE HAVE A SPECIAL ALTERNATIVE METHOD
Router.route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`The id is ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`The id is ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`The id is ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`The id is ${req.params.id}`);
  });
let usets = [1, 2, 3];
Router.param("id", (req, res, next, id) => {
  req.user = usets[id];
  next();
});

module.exports = Router;
