let nodemailer = require("nodemailer");

//from
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "chandegarajignesh29@gmail.com",
      pass: "ubiuicfjyksewseb",
    },
  });
  
  let sendEmail = (to, subject, data) => {
    return transporter.sendMail({
      from: '"Book Library App" <chandegarajignesh29@gmail.com>', // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      // text: data, // plain text body
      html: data,
    });
  };
  
  module.exports = sendEmail;