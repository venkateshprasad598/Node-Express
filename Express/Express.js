const express = require("express");
const { people } = require("./data/data");
const app = express();
app.use(express.json());
app.get("/api", (req, res) => {
  console.log(people);
  res.status(200).json({ data: people });
});
app.post("/api/postman", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.json({ name: [...people, name] });
  }
});
app.listen(5000);
