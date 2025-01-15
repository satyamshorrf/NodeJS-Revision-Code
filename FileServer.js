const http = require('http');
const url = require('url');
const fs = require('fs');

// Create an HTTP server
http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = "." + (q.pathname === "/" ? "/index.html" : q.pathname); // Default to index.html for root

  // Read the requested file
  fs.readFile(filename, (err, data) => {
    if (err) {
      // Handle file not found
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end("<h1>404 Not Found</h1><p>The requested file could not be found.</p>");
      return;
    }

    // Serve the file
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}).listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
