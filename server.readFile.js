var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('readFile.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<h1>404 Not Found</h1><p>The requested file could not be found.</p>');
      return res.end();
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080, 'localhost', () => {
  console.log('Server running at http://localhost:8080/');
});
