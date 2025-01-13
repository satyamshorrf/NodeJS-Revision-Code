var http = require('http');

// Create an HTTP server
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // Set HTTP header
    res.end('Hello World!'); // Send response
}).listen(8080, 'localhost', function() {
    console.log('Server running at http://localhost:8080/'); // Log server start
});
