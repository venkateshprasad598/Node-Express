const express = require("express");
const app = express();
const tasks = require("./data/tasks");
app.use("/api/v1/task", tasks);
app.listen(5000, console.log("server is listing at 5000"));
