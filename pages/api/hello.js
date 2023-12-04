// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer  = require('nodemailer');
// const sendgridTransport = request('nodemailer-sendgrid-transport');

export default async function handler(req, res) {
  const messageDetails = req.body;
  console.log('ggg', messageDetails)
  // async function sendEmail() {
    // create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "jonejohnson333333333@gmail.com",
        pass: "mzjqgajjpcsngxhp",
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${messageDetails.email}`,
      to: "jonejohnson333333333@gmail.com",
      subject: `${messageDetails.subject}`,
      text: `${messageDetails.message}`,
    });

    console.log(`Message sent: ${info.messageId}`);
  // }
  res.status(200).json({ name: 'John Doe' })
}
