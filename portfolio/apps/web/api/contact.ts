import type { VercelRequest, VercelResponse } from '@vercel/node';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
    return res.status(400).json({
      success: false,
      message: "Name is required.",
    });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "A valid email is required.",
    });
  }

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      success: false,
      message: "Message is required.",
    });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");

    return res.status(500).json({
      success: false,
      message: "Email service is not configured.",
    });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: email.trim(),
        subject: `Portfolio contact form: ${name.trim()}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Portfolio Message</h2>

            <p>
              <strong>Name:</strong><br />
              ${safeName}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${safeEmail}
            </p>

            <p>
              <strong>Message:</strong><br />
              ${safeMessage}
            </p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend error:", data);

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
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Could not send message. Please try again later.",
    });
  }
}