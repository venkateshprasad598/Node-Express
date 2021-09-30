//Create a Server
const express = require("express");
const userRouter = require("./routes/Route");
const payementRouter = require("./routes/payment");

const app = express();
app.set("view engine", "ejs");

//Send the Info
app.get("/", (req, res) => {
  res.render("Server", { text: "WORLD" });
});

//ROUTES
app.use(userRouter);
app.use("/payments", payementRouter);

//Where do you wanna run the server
app.listen(3000);
