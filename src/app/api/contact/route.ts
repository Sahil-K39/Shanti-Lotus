import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Check for Resend API key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn(
        '⚠️ RESEND_API_KEY is not set. Email will not be sent. Please add RESEND_API_KEY to your .env.local file.'
      );
      // Still return success in development so the form works
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully. Note: Email sending is not configured yet.' 
        },
        { status: 200 }
      );
    }

    const resend = new Resend(resendApiKey);
    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const toEmail = process.env.CONTACT_TO_EMAIL || 'contact@shaktiloto.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeInterest = interest ? escapeHtml(interest) : '';
    const safeMessage = escapeHtml(message);

    await resend.emails.send({
      from: `Shakti Loto Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact: ${interest || 'General Inquiry'} from ${name}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #090807;">
          <h1 style="color: #E2C078; font-size: 24px; font-weight: 300; border-bottom: 1px solid #D6A85A; padding-bottom: 16px;">New Contact from Shakti Loto</h1>
          <div style="padding: 20px 0;">
            <p style="color: #F9F0DD; margin: 8px 0;"><strong>Name:</strong> ${safeName}</p>
            <p style="color: #F9F0DD; margin: 8px 0;"><strong>Email:</strong> ${safeEmail}</p>
            ${phone ? `<p style="color: #F9F0DD; margin: 8px 0;"><strong>Phone/WhatsApp:</strong> ${safePhone}</p>` : ''}
            ${interest ? `<p style="color: #F9F0DD; margin: 8px 0;"><strong>Interested In:</strong> ${safeInterest}</p>` : ''}
            <div style="margin-top: 24px; padding: 20px; background-color: #17120D; border: 1px solid #B8863B;">
              <p style="color: #D7C3A0; font-style: italic; white-space: pre-wrap;">${safeMessage}</p>
            </div>
          </div>
          <p style="color: #9D7A43; font-size: 12px; margin-top: 32px; text-align: center;">Sent from Shakti Loto Contact Form</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
