import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const rawAdminEmail = process.env.ADMIN_EMAIL || "info@growthspare.com";
    const adminEmails = rawAdminEmail
      .split(",")
      .map((e) => e.trim())
      .filter((e) => e.length > 0);
    const toAdmin = adminEmails.length > 1 ? adminEmails : (adminEmails[0] || "info@growthspare.com");

    const fromEmail = process.env.SMTP_FROM || smtpUser || "no-reply@growthspare.com";

    // If SMTP credentials aren't set yet (e.g. initial deployment check)
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn("SMTP credentials not configured in environment variables.");
      // Return success gracefully in dev/preview mode so UX flow isn't broken
      return NextResponse.json({
        success: true,
        warning: "Form recorded locally. Configure SMTP_HOST, SMTP_USER, SMTP_PASS in Netlify for email delivery.",
      });
    }

    const isSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false, // Prevents cert verification failures on some hosts
      },
    });

    // 1. Admin Alert Email (To Agency / Self - Supports multiple recipients)
    const adminMailOptions = {
      from: `"GrowthSpare Website" <${fromEmail}>`,
      to: toAdmin,
      replyTo: email,
      subject: `🚨 New Lead: ${name} — ${service || "General Inquiry"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px; color: #111827; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
            .header { background: #111827; color: #ffffff; padding: 24px; text-align: center; }
            .header h2 { margin: 0; font-size: 20px; font-weight: 600; }
            .badge { display: inline-block; background: #F26522; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 99px; text-transform: uppercase; margin-top: 8px; }
            .body { padding: 30px; }
            .field { margin-bottom: 20px; }
            .field-label { font-size: 11px; font-weight: 700; color: #6B7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #111827; font-weight: 500; }
            .message-box { background: #EFEFEF; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #374151; }
            .footer { background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 16px; text-align: center; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h2>New Website Strategy Call Request</h2>
              <div class="badge">GrowthSpare Lead</div>
            </div>
            <div class="body">
              <div class="field">
                <div class="field-label">Full Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Phone Number</div>
                <div class="field-value">${phone || "Not provided"}</div>
              </div>
              <div class="field">
                <div class="field-label">Company Name</div>
                <div class="field-value">${company || "Not provided"}</div>
              </div>
              <div class="field">
                <div class="field-label">Service Interested In</div>
                <div class="field-value">${service || "Not specified"}</div>
              </div>
              <div class="field">
                <div class="field-label">Monthly Budget</div>
                <div class="field-value">${budget || "Not specified"}</div>
              </div>
              <div class="field">
                <div class="field-label">Message / Details</div>
                <div class="message-box">${message ? message.replace(/\n/g, "<br/>") : "No details provided."}</div>
              </div>
            </div>
            <div class="footer">
              Submitted via GrowthSpare Contact Form — ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. Client Auto-Responder Email (Confirmation to Lead)
    const clientMailOptions = {
      from: `"GrowthSpare Team" <${fromEmail}>`,
      to: email,
      subject: `Thank you for contacting GrowthSpare — We've received your query`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px; color: #111827; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
            .header { background: #111827; color: #ffffff; padding: 32px 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; color: #F26522; }
            .header p { margin: 8px 0 0 0; font-size: 14px; color: #9CA3AF; }
            .body { padding: 32px; }
            .greeting { font-size: 18px; font-weight: 600; margin-bottom: 16px; color: #111827; }
            .text { font-size: 15px; line-height: 1.6; color: #4B5563; margin-bottom: 24px; }
            .steps { background: #F5F5F5; padding: 20px; border-radius: 8px; margin-mb: 24px; }
            .steps h4 { margin: 0 0 12px 0; font-size: 14px; color: #111827; text-transform: uppercase; letter-spacing: 0.05em; }
            .step-item { font-size: 14px; color: #374151; margin-bottom: 8px; display: flex; items-center; gap: 8px; }
            .footer { background: #111827; color: #9CA3AF; padding: 24px; text-align: center; font-size: 13px; border-top: 1px solid #1F2937; }
            .footer a { color: #F26522; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>GrowthSpare</h1>
              <p>Digital Marketing Agency & AI Solutions</p>
            </div>
            <div class="body">
              <div class="greeting">Hi ${name},</div>
              <div class="text">
                Thank you for reaching out to GrowthSpare. We have received your strategy call request for <strong>${service || "our growth services"}</strong>.
              </div>
              <div class="steps">
                <h4>What happens next?</h4>
                <div class="step-item">1. Our strategy team is reviewing your query.</div>
                <div class="step-item">2. We will contact you within 24 hours (Mon – Sat, 9:00 AM – 6:00 PM).</div>
                <div class="step-item">3. We'll prepare custom insights for your business.</div>
              </div>
              <div class="text" style="margin-top: 24px;">
                For immediate assistance, feel free to reply directly to this email or chat with us on <a href="https://wa.me/919560725039" style="color: #25D366; font-weight: 600;">WhatsApp (+91 9560725039)</a>.
              </div>
            </div>
            <div class="footer">
              GrowthSpare HQ — Indure House, 2nd Floor, Savitri Cinema Complex GK-II, New Delhi<br/>
              &copy; ${new Date().getFullYear()} GrowthSpare. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Dispatch both emails concurrently
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json({ success: true, message: "Emails sent successfully." });
  } catch (error: any) {
    console.error("Error sending contact email via SMTP:", error);
    let userMsg = error?.message || "Failed to send email. Please try again later.";
    if (userMsg.includes("535") || userMsg.includes("authentication failed")) {
      userMsg = "SMTP Authentication Failed (535): Please check SMTP_USER and SMTP_PASS in Netlify environment variables. If using Gmail/Zoho with 2FA, generate an App Password.";
    }
    return NextResponse.json(
      { error: userMsg },
      { status: 500 }
    );
  }
}
