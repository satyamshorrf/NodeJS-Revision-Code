const http = require('http');
const formidable = require('formidable');

http.createServer((req, res) => {
  if (req.url === '/fileupload' && req.method === 'POST') {
    const form = new formidable.IncomingForm();

    // Parse the incoming form data
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('<h1>Error processing file upload</h1>');
        return res.end();
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>File uploaded successfully</h1>');
      res.write('<p>File information:</p>');
      res.write(`<pre>${JSON.stringify(files, null, 2)}</pre>`);
      return res.end();
    });
  } else if (req.method === 'GET') {
    // Serve the file upload form
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <form action="/fileupload" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload"><br>
        <input type="submit">
      </form>
    `);
    return res.end();
  } else {
    // Handle invalid routes
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    return res.end();
  }
}).listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
