const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Requested");
  res.end("Hello World");
});

server.listen("3000", () => {
  console.log("Listening");
});
console.log("Hello");
