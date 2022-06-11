var nodemailer = require("nodemailer");
const config = require("config");

const winston = require("winston");
module.exports = function (
  userEmail,
  text,
  subject = "Test And Tag notification"
) {
  // login the gmail
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.get("emailAuth").email,
      pass: config.get("emailAuth").password,
    },
  });

  // send the email
  var mailOptions = {
    from: config.get("emailAuth").email,
    to: userEmail,
    subject,
    text,
  };

  // once it has a problem uncaughtExceptions.log recorded
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      winston.error("Email Error", error);

      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
