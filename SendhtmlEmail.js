const nodemailer = require('nodemailer');

// Create a transporter object using Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,  // Store in environment variable
    pass: process.env.GMAIL_PASS   // Store in environment variable
  }
});

// Define the email options with HTML content
const mailOptions = {
  from: process.env.GMAIL_USER,  // Use environment variable
  to: 'myfriend@yahoo.com',     // Single recipient
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'  // HTML content
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
