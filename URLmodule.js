const { URL } = require('url');

// Define the URL
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const myUrl = new URL(adr);

// Access different parts of the URL
console.log(myUrl.host); // Returns 'localhost:8080'
console.log(myUrl.pathname); // Returns '/default.htm'
console.log(myUrl.search); // Returns '?year=2017&month=february'

// Get query parameters as an object
const qdata = Object.fromEntries(myUrl.searchParams.entries());
console.log(qdata.month); // Returns 'february'
