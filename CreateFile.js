const fs = require('fs');

// Append content to 'mynewfile1.txt'
fs.appendFile('mynewfile1.txt', 'Hello content!', (err) => {
  if (err) throw err;
  console.log('Content appended to mynewfile1.txt');
});

// Open (or create) 'mynewfile2.txt' with write mode
fs.open('mynewfile2.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('mynewfile2.txt opened/created');
});

// Write content to 'mynewfile3.txt'
fs.writeFile('mynewfile3.txt', 'Hello content!', (err) => {
  if (err) throw err;
  console.log('Content written to mynewfile3.txt');
});
