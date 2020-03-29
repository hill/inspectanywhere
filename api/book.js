const nodemailer = require("nodemailder");

module.exports = (req, res) => {
  const message = {
    from: "tom@inspectanywhere.com.au",
    to: "tomhill98@me.com",
    subject: "New Scan Booking",
    text: `A new scan booking has arrived!`
  };

  // https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });

  console.log(req.body);
  res.send("Success", req);
};
