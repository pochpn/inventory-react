var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: 'ratchapol.at@ku.th',
    pass: 'Migla007.'
  }
});

var mailOptions = {
  from: 'ratchapol.at@ku.th',
  to: 'thanawut.d@ku.th',
  subject: 'Test Send Email!!!!',
  text: `Recovery Pass`
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

