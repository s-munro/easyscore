const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "easyscore.mailer@gmail.com",
    pass: "tesmailer20471!@",
  },
});
module.exports = transporter;
