const fs = require('fs');
const events = require('events');

// Create a read stream for the file
const rs = fs.createReadStream('./demofile.txt');

// Listen for the 'open' event on the read stream
rs.on('open', () => {
  console.log('The file is open');
});

// Create an EventEmitter instance
const eventEmitter = new events.EventEmitter();

// Create an event handler
const myEventHandler = () => {
  console.log('I hear a scream!');
};

// Assign the event handler to the 'scream' event
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event
eventEmitter.emit('scream');
