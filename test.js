const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request received");
});

server.listen(8080, () => {
  console.log("server started : 8080");
});
