// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail';

export const onRequest = async (context) => {
  try {
    // Set up SendGrid API key
    sgMail.setApiKey(context.env.SENDGRID_API_KEY);

    // Email details
    const msg = {
      to: 'iuribirlea@gmail.com', // Replace with your recipient
      from: 'test@regalkitchen.md', // Replace with your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Cloudflare Functions',
      html: '<strong>and easy to do anywhere, even with Cloudflare Functions</strong>',
    };

    // Send the email
    await sgMail.send(msg);

    // Return success response
    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Return error response
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
