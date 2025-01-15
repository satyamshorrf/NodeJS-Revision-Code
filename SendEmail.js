const nodemailer = require('nodemailer');
require('dotenv').config();


// Create a transporter object using Gmail service and OAuth2 for security
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Store in environment variable
    pass: process.env.GMAIL_PASS  // Store in environment variable
  }
});

// Define the email options
const mailOptions = {
  from: process.env.GMAIL_USER, // Use environment variable
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
