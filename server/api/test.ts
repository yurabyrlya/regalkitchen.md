import sgMail from '@sendgrid/mail';

export default defineEventHandler(async (event) => {
  //const body = await readBody(event); // Read the request body for POST data.

  // Ensure POST method is used.

  // Set the SendGrid API key.
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    const msg = {
      to: 'iuribirlea@gmail.com', // Replace with your recipient
      from: 'test@regalkitchen.md', // Replace with your verified sender
      subject: 'Sending with SendGrid via Nuxt Nitro',
      text:  'Hello from Nuxt Nitro!',
      html: '<strong>Hello from Nuxt Nitro!</strong>',
    };

    await sgMail.send(msg);

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email', error: error.message };
  }
});
