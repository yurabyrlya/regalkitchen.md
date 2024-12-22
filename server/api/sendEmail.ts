// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default defineEventHandler(async (event) => {
  const msg = {
    to: 'iuribirlea@gmail.com', // Change to your recipient
    from: 'contact@regalkitchen.md', // Change to your verified sender
    subject: 'Contact Request',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  try {
    await sgMail.send(msg);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to send email',
    });
  }
});
