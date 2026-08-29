import type { VercelRequest, VercelResponse } from '@vercel/node';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  const { name, email, message } = (req.body ?? {}) as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ success: false, message: "Name is required." });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ success: false, message: "A valid email is required." });
  }

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ success: false, message: "Message is required." });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!resendKey || !contactToEmail) {
    console.error("Missing environment configuration: RESEND_API_KEY or CONTACT_TO_EMAIL");
    return res.status(500).json({
      success: false,
      message: "Email service is not properly configured.",
    });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

  const sentAt = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Karachi",
    dateStyle: "medium",
    timeStyle: "short",
  });

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: [contactToEmail],
        reply_to: email.trim(),
        subject: `Portfolio contact form: ${name.trim()}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 8px;">New Contact Submission</h2>
            <p><strong>Name:</strong><br />${safeName}</p>
            <p><strong>Email:</strong><br />${safeEmail}</p>
            <p><strong>Message:</strong><br />${safeMessage}</p>
            <hr style="border: none; border-top: 1px solid #eaeaea; margin: 24px 0 12px 0;" />
            <p style="font-size: 12px; color: #888; margin: 0;">
              Received on: ${sentAt} (PKT) • Sent via Portfolio Contact Form
            </p>
          </div>
        `,
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    if (!response.ok) {
      console.error("Resend API response error:", data);
      return res.status(502).json({
        success: false,
        message: "Could not send message. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent!",
    });
  } catch (error) {
    console.error("Contact API network/execution error:", error);
    return res.status(500).json({
      success: false,
      message: "Could not send message. Please try again later.",
    });
  }
}