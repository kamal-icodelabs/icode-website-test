// components/email-template.js
import * as React from 'react';

export const EmailTemplate = ({ email }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Thank You for Contacting Us</title>
    </head>
    <body style={{ margin: 0, padding: 0, fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f4f7fa' }}>
      <table role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style={{ backgroundColor: '#f4f7fa' }}>
        <tr>
          <td style={{ padding: '40px 20px' }}>
            <table role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>

              {/* Header with Gradient */}
              <tr>
                <td style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #3b82f6 100%)', padding: '30px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '48px', marginBottom: '6px' }}>🎉</div>
                  <h1 style={{ margin: 0, color: '#000', fontSize: '32px', fontWeight: '700', letterSpacing: '-0.5px', marginBottom: '10px' }}>
                    Thank You for Reaching Out!
                  </h1>
                  <p style={{ margin: '10px 0 0 0', color: 'rgba(255, 255, 255, 0.95)', fontSize: '16px', fontWeight: '400', lineHeight: '1.6' }}>
                    We're excited to connect with you
                  </p>
                </td>
              </tr>

              {/* Main Content */}
              <tr>
                <td style={{ padding: '15px 10px' }}>
                  <div style={{ marginBottom: '30px' }}>
                    <p style={{ margin: '0 0 20px 0', color: '#1e293b', fontSize: '16px', lineHeight: '1.7' }}>
                      Dear <strong style={{ color: '#2563eb' }}>{email}</strong>,
                    </p>
                    <p style={{ margin: '0 0 20px 0', color: '#334155', fontSize: '16px', lineHeight: '1.7' }}>
                      Thank you for getting in touch with us! We've successfully received your message and our team is already reviewing it.
                    </p>
                    <p style={{ margin: '0 0 20px 0', color: '#334155', fontSize: '16px', lineHeight: '1.7' }}>
                      We understand that your time is valuable, and we're committed to providing you with a prompt and helpful response.
                    </p>
                  </div>

                  {/* What's Next Section */}
                  <div style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', borderRadius: '12px', padding: '25px', marginBottom: '30px', borderLeft: '4px solid #3b82f6' }}>
                    <h2 style={{ margin: '0 0 15px 0', color: '#1e40af', fontSize: '20px', fontWeight: '600' }}>
                      ⏱️ What Happens Next?
                    </h2>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#334155', fontSize: '15px', lineHeight: '1.8' }}>
                      <li style={{ marginBottom: '8px' }}>Our team will review your inquiry carefully</li>
                      <li style={{ marginBottom: '8px' }}>We'll get back to you within <strong>24-48 hours</strong></li>
                      <li style={{ marginBottom: '8px' }}>You'll receive a personalized response from our experts</li>
                    </ul>
                  </div>

                  {/* CTA Section */}
                  <div style={{ textAlign: 'center', margin: '30px 0' }}>
                    <p style={{ margin: '0 0 20px 0', color: '#64748b', fontSize: '15px' }}>
                      In the meantime, feel free to explore our services
                    </p>
                    <a href="https://icodelabs.co" style={{ display: 'inline-block', backgroundColor: '#3b82f6', color: '#ffffff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: '600', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' }}>
                      Visit Our Website →
                    </a>
                  </div>

                  {/* Closing */}
                  <div style={{ marginTop: '35px', paddingTop: '25px', borderTop: '1px solid #e2e8f0' }}>
                    <p style={{ margin: '0 0 10px 0', color: '#334155', fontSize: '16px', lineHeight: '1.7' }}>
                      Best regards,
                    </p>
                    <p style={{ margin: 0, color: '#2563eb', fontSize: '17px', fontWeight: '600' }}>
                      The iCodeLabs Team
                    </p>
                    <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '14px' }}>
                      Building innovative solutions
                    </p>
                  </div>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{ backgroundColor: '#f8fafc', padding: '30px 35px', borderTop: '1px solid #e2e8f0' }}>
                  <table role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%">
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <p style={{ margin: '0 0 12px 0', color: '#64748b', fontSize: '13px', lineHeight: '1.5' }}>
                          📧 This is an automated confirmation email
                        </p>
                        <p style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '12px' }}>
                          © {new Date().getFullYear()} iCodeLabs. All rights reserved.
                        </p>
                        <div style={{ marginTop: '15px' }}>
                          <a href="https://icodelabs.co" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '12px', margin: '0 8px' }}>Website</a>
                          <span style={{ color: '#cbd5e1' }}>•</span>
                          <a href="https://icodelabs.co/blog" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '12px', margin: '0 8px' }}>Blog</a>
                          <span style={{ color: '#cbd5e1' }}>•</span>
                          <a href="https://icodelabs.co/contact" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '12px', margin: '0 8px' }}>Contact</a>
                        </div>
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
);