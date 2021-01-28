const dotenv = require("dotenv");
dotenv.config();
const transporter = require("./config");

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000;
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "the-easy-score/build")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "the-easy-score/build", "index.html"));
});

app.get("/banana", (req, res) => {
  res.status(200).json("hey!");
});

app.post("/send", (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.user,
      subject: req.body.subject,
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
