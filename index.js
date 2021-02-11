const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000;
const path = require("path");
const app = express();

const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "the-easy-score/build")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "the-easy-score/build", "index.html"));
});

app.post("/send", async (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.subject,
      text: req.body.message,
      html: `
      <p>Hello! You've received a new message at EasyScore.</p>
      <h3>Contact Details:</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.message}</li>
      </ul>`,
    };

    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.email,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
        // pass: process.env.password
      },
    });

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).json({ err: `there was an error, ${err}` });
      } else {
        res.status(200).json({ message: "Success" });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong.  Try again later, ${error}`,
    });
  }
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
