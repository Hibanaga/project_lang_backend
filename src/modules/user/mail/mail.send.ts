import { config } from './../../../config/default';
import * as nodemailer from 'nodemailer';

export const sendMail = (mailToSend, code) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "coollearn.info@gmail.com",
      pass: "Zaxscd1313",
    },
  });

  const mailOptions = {
    from: config.creator_mail,
    to: mailToSend,
    subject: 'Verification Code',
    text: `The message to success email: ${code}`,
  };

  transporter.sendMail(mailOptions);
};
