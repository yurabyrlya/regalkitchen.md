import sgMail from '@sendgrid/mail';

export default defineEventHandler(async (event) => {
  const form = await readBody(event); // Read the request body for POST data.

  if (event.node.req.method !== 'POST') {
    return {
      statusCode: 405,
      message: 'Only POST requests are allowed',
    };
  }

  let emailSubbject = 'Contact';
  if (form.type === 'request') {
    emailSubbject = 'Formular de cerere';
  }

  const generateEmailHTML = (form): string => `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
      <h2 style="text-align: center; color: #0056b3;">${emailSubbject}</h2>
      <p><strong>Name:</strong> ${form.name}</p>
      <p><strong>Email:</strong> ${form.email}</p>
      <p><strong>Country:</strong> ${form.country}</p>
      <p><strong>Mobile:</strong> ${form.mobile}</p>
      <hr>
      <p style="font-size: 0.9em; color: #666;">This message was sent from  <a href="regalkitchen.md">regalkitchen.md </a> contact form.</p>
    </div>
  `;
  try {

    const { sendgridApiKey , contactFromEmail, contactToEmail } = useRuntimeConfig(event);
    
    sgMail.setApiKey(sendgridApiKey);

    const msg = {
      to: contactToEmail, 
      from: contactFromEmail,
      subject: emailSubbject,
      text: `Name: ${form.name}, Email: ${form.email}, Country: ${form.country}, Mobile: ${form.mobile}`,
      html: generateEmailHTML(form),
    };

    await sgMail.send(msg);

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email', error: error.message };
  }
});
