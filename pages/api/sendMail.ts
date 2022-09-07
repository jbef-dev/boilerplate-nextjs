import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

// =====================================
// SET SMTP CREDENTIALS IN ENV VARIABLE
// =====================================
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const SMTP_HOST = process.env.SMTP_HOST

/* export default function handler(event, context, callback) { */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /* return new Promise((resolve, reject) => { */
  const { body: reqBody } = req
  const { fullName, email, phone, message } = reqBody

  if (req.method !== 'POST') {
    res.status(400).json(null)
    /* resolve(true) */
    return
  }

  if (!fullName || !email || !phone) {
    let errors = []
    !fullName && errors.push({ fullName: 'missing but is mandatory' })
    !email && errors.push({ email: 'missing but is mandatory' })
    !phone && errors.push({ phone: 'missing but is mandatory' })

    res.status(500).json({
      body: 'Missing some mandatory fields, check errors field from this reponse.',
      query: req.query,
      cookies: req.cookies,
      errors: errors,
    })
    /* resolve(true) */
    return
  }

  const timestamp = new Date()

  const mailData = {
    from: `Notificación web <${SMTP_USER}>`,
    to: 'jorge.befan@gmail.com',
    subject: `Website contact - ${fullName}`,
    text: `Someone contacted via the website\n
Name: ${fullName}\n
Email: ${email}\n
Phone: ${phone}\n
\n
This was generated on ${timestamp.toLocaleString()}`,
    html: `Someone contacted via the website
<br/>
Name: ${fullName}
<br/>
Email: ${email}
<br/>
Phone: ${phone}
<br/>
Message:${message}
<br/><br/>
This was generated on ${timestamp.toLocaleDateString()}`,
  }

  /* const main = async () => { */
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: 465,
    // port: 587, // TODO confirm whether to use 587 or 465
    secure: true, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail(mailData)
    res.status(200).json({
      ok: true,
      body: {
        body: `Message sent: ${info.messageId}`,
        messageId: info.messageId,
      },
    })
    return
  } catch (e) {
    res.status(503).json({
      body: 'Error sending the email',
      error: e,
    })
    return
  }
  /* } */
  /* main() */
  /* }) */
}
