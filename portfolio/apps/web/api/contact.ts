import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let transporter: nodemailer.Transporter | null = null;
function getTransporter() {
  if (transporter) return transporter;
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers set kar dete hain
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const { name, email, message } = req.body ?? {};

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Name is required.' });
    }
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).json({ success: false, message: 'A valid email is required.' });
  }
  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ success: false, message: 'Message is required.' });
  }

  const mailer = getTransporter();
  if (!mailer) {
    console.warn('⚠️ SMTP not configured — logging submission.');
    console.log('Contact form submission:', { name, email, message });
    return res.json({ success: true, message: 'Message received!' });
  }

  try {
    await mailer.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `Portfolio contact form: ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br />')}</p>`,
    });
    return res.json({ success: true, message: 'Message sent!' });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return res.status(502).json({ success: false, message: 'Could not send message. Please try again later.' });
  }
}