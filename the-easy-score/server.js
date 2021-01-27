const path = require("path");
const express = require("express");
const transporter = require("./config");
const dotenv = require("dotenv");
dotenv.config();
const server = express();

const buildPath = path.join(__dirname, "..", "build");
server.use(express.json());
server.use(express.static(buildPath));

if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));

  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.post("/send", (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
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
        console.log(err);
        res.status(500).json({ err: `there was an error, ${err}` });
      } else {
        res.status(200).json({ message: "Success" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Something went wrong.  Try again later, ${error}`,
    });
  }
});

server.listen(3030, () => {
  console.log("server running 3030");
});
