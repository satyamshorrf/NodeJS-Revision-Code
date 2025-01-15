const mailOptions = {
    from: process.env.GMAIL_USER, // Use environment variable
    to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
    cc: 'ccfriend@yahoo.com',  // Adding CC recipients
    bcc: 'bccfriend@yahoo.com', // Adding BCC recipients
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  