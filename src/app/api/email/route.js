// app/api/email/route.js
import { EmailTemplate } from '@/component/EmailTemplate/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

let resendClient = null;
function getResendClient() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      // Don't throw at module import time; throw when the endpoint is called so the build won't fail.
      throw new Error('Missing RESEND_API_KEY environment variable.');
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

export async function POST(req) {
  try {
    // initialize client here (runtime) — avoids build-time constructor call
    const resend = getResendClient();

    const body = await req.json();
    const { name, email, phoneNumber, message, packages, title, recaptchaToken } = body;

    // Validate required fields
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
    }

    const safeName = name?.trim() || 'Website visitor';
    const safeMessage = message?.trim() || 'Not provided';

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaToken && !recaptchaSecret) {
      return NextResponse.json(
        { error: 'Email service not configured. Missing RECAPTCHA_SECRET_KEY.' },
        { status: 500 }
      );
    }

    if (recaptchaToken) {
      const recaptchaParams = new URLSearchParams({
        secret: recaptchaSecret,
        response: recaptchaToken,
      });

      const recaptchaVerifyUrl =
        process.env.RECAPTCHA_VERIFY_URL;
      const recaptchaResponse = await fetch(recaptchaVerifyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: recaptchaParams.toString(),
      });

      const recaptchaData = await recaptchaResponse.json();
      if (!recaptchaData?.success) {
        return NextResponse.json(
          { error: 'reCAPTCHA validation failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    // Email to the user (using your React template)
    const userEmail = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: 'Thanks for contacting us!',
      react: EmailTemplate({ email: safeName || email }),
    };

    // Email to the provider with all form details
    const providerEmail = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECIVER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f7fa;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                  
                  <!-- Header with Gradient -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        💬 New Contact Form Submission
                      </h1>
                      <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 400;">
                        Say hello - We're excited to connect with you
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Contact Information Section -->
                  <tr>
                    <td style="padding: 35px 30px;">
                      <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-radius: 12px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
                        <h2 style="margin: 0 0 20px 0; color: #1e40af; font-size: 18px; font-weight: 600;">
                          📋 Contact Details
                        </h2>
                        
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td style="padding: 8px 0;">
                              <span style="display: inline-block; width: 140px; color: #64748b; font-size: 14px; font-weight: 500;">👤 Name:</span>
                              <span style="color: #1e293b; font-size: 14px; font-weight: 600;">${safeName}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <span style="display: inline-block; width: 140px; color: #64748b; font-size: 14px; font-weight: 500;">✉️ Email:</span>
                              <a href="mailto:${email}" style="color: #3b82f6; font-size: 14px; font-weight: 600; text-decoration: none;">${email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <span style="display: inline-block; width: 140px; color: #64748b; font-size: 14px; font-weight: 500;">📱 Phone:</span>
                              <span style="color: #1e293b; font-size: 14px; font-weight: 600;">${phoneNumber || 'Not provided'}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <span style="display: inline-block; width: 140px; color: #64748b; font-size: 14px; font-weight: 500;">💰 Budget/Package:</span>
                              <span style="color: #1e293b; font-size: 14px; font-weight: 600;">${packages || 'Not selected'}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <span style="display: inline-block; width: 140px; color: #64748b; font-size: 14px; font-weight: 500;">🛠️ Service:</span>
                              <span style="color: #1e293b; font-size: 14px; font-weight: 600;">${title || 'Not selected'}</span>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Message Section -->
                      <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; border-left: 4px solid #3b82f6;">
                        <h2 style="margin: 0 0 15px 0; color: #1e40af; font-size: 18px; font-weight: 600;">
                          💭 Message
                        </h2>
                        <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 25px 30px; border-top: 1px solid #e2e8f0;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: center;">
                            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px; line-height: 1.5;">
                              This email was sent from the contact form on your website
                            </p>
                            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                              © ${new Date().getFullYear()} iCodeLabs. All rights reserved.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    const [userResult, providerResult] = await Promise.all([
      resend.emails.send(userEmail),
      resend.emails.send(providerEmail),
    ]);

    // Resend returns details; check for possible error fields depending on library version
    if ((userResult && userResult.error) || (providerResult && providerResult.error)) {
      console.error('Email sending error:', userResult?.error || providerResult?.error);
      return NextResponse.json({ error: 'Failed to send one or both emails' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });

  } catch (err) {
    // Distinguish missing env var for clearer logs
    if (err?.message && err.message.includes('Missing RESEND_API_KEY')) {
      console.error('Resend API key missing:', err);
      return NextResponse.json(
        { error: 'Email service not configured. Missing RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    console.error('Internal server error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
