const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hej från vår skapade Node.js server!");
});

server.listen(8000, () => {
  console.log("Server körs på http://localhost:8000");
});
