const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  if (req.url === '/fileupload' && req.method === 'POST') {
    const form = new formidable.IncomingForm();

    // Parse the form and handle the file upload
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('<h1>Error processing file upload</h1>');
        return res.end();
      }

      // Ensure filetoupload is present
      if (!files.filetoupload) {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.write('<h1>No file uploaded</h1>');
        return res.end();
      }

      const file = files.filetoupload;

      // Check if the file object has the expected properties
      const oldpath = file.filepath || file.path;  // Compatibility for different versions of formidable
      const originalFilename = file.originalFilename || file.name;  // Compatibility for different versions of formidable

      // Check if filename exists
      if (!originalFilename) {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.write('<h1>Uploaded file does not have a valid name</h1>');
        return res.end();
      }

      // Define the new path to save the uploaded file
      const newpath = path.join(__dirname, originalFilename);

      // Move the file to the new location
      fs.rename(oldpath, newpath, (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.write('<h1>Error moving file</h1>');
          return res.end();
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>File uploaded and moved successfully!</h1>');
        res.end();
      });
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
    res.end();
  } else {
    // Handle invalid routes
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }
}).listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
