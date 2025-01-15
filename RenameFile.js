const fs = require('fs');

// Rename 'mynewfile1.txt' to 'myrenamedfile.txt'
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
    if (err) {
      console.error('Error renaming file:', err.message);
    } else {
      console.log('File renamed from mynewfile1.txt to myrenamedfile.txt!');
    }
  });