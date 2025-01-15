const http = require('http');
const upperCase = require('upper-case').upperCase;

// Create an HTTP server
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(upperCase("Hello World!")); // Convert text to uppercase
  res.end();
}).listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
