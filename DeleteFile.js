const fs = require('fs');

// Delete 'mynewfile2.txt'
fs.unlink('mynewfile2.txt', (err) => {
  if (err) {
    console.error('Error deleting mynewfile2.txt:', err.message);
  } else {
    console.log('File mynewfile2.txt deleted!');
  }
});


