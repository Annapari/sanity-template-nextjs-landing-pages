export default function (req, res) {
  require('dotenv').config()
  console.log(process.env)

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    // port: 466,
    host: 'smtp.gmail.com',
    auth: {
      user: 'emailfromkatevox@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'emailfromkatevox@gmail.com',
    to: 'annaparis.phillipson@gmail.com',
    subject: `Contact Form submission from ${req.body.firstname}`,
    text: req.body.message + ' | Sent from ' + req.body.email,
    html: `<div>${req.body.message}</div>
    <p>Sent from:</p><p> First Name : ${req.body.firstname}</p><p> Last Name : ${req.body.lastname}</p><p> Phone : ${req.body.phone}</p><p> Email : 
      ${req.body.email}</p>`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
  res.status(200)
}
