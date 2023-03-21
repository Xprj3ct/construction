const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS
app.use(cors());

app.post("/send-email", (req, res) => {
  const { fullname, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yorxsm@gmail.com",
      pass: "xynbehvelypmmbpy",
    },
  });

  const mailOptions = {
    from: "Contact Us Service <y@gmail.com>",
    to: "info@luckylumacs.com",
    subject: "Enquiries from your website!",
    html: `
      <p>Full Name: ${fullname}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

 transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
