const http = require('http');

// Create an HTTP server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Set HTTP header
    res.end('Hello World!'); // Send response
}).listen(8080, 'localhost', () => {
    console.log('Server running at http://localhost:8080/'); // Log server start
});
