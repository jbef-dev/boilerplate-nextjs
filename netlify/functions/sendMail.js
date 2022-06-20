const nodemailer = require('nodemailer')

// =====================================
// SET SMTP CREDENTIALS IN ENV VARIABLE
// =====================================
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS

exports.handler = function (event, context, callback) {
  const reqData = JSON.parse(event.body)

  if (!reqData.name || !reqData.email || !reqData.phone) {
    callback(null, {
      statusCode: 500,
      body: 'Missing name, email or phone!!!!!',
    })
  }

  const timestamp = new Date()

  const { name, email, phone, message } = reqData

  const mailData = {
    from: 'XXXXXXX <xxxx@xxxxxxx.xxx>',
    to: 'xxxx@xxxxxxx.xxx',
    subject: `Website contact - ${name}`,
    text: `Someone contacted via the website\n
Name: ${name}\n
Email: ${email}\n
Phone: ${phone}\n
\n
This was generated on ${timestamp.toLocaleString()}`,
    html: `Someone contacted via the website
    <br/>
    Name: ${name}
    <br/>
    Email: ${email}
    <br/>
    Phone: ${phone}
    <br/>
    Message:${message}
    <br/><br/>
    This was generated on ${timestamp.toLocaleDateString()}`,
  }

  // async..await is not allowed in global scope, must use a wrapper
  const main = async () => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount()

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'mail.cnglawyers.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    try {
      // send mail with defined transport object
      const info = await transporter.sendMail(mailData)
      callback(null, {
        statusCode: 200,
        ok: true,
        body: JSON.stringify({
          body: `Message sent: ${info.messageId}`,
          messageId: info.messageId,
        }),
      })
    } catch {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error sending the email' }),
      })
    }
  }

  main()
}
