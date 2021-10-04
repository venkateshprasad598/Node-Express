const event = require("events");
const newEvent = new event();
// Register a Event
newEvent.on("Key", (e) => {
  console.log(e.hello);
});
// Raise a Event
newEvent.emit("Key", { hello: "HOY" });
