import sgMail from '@sendgrid/mail';
import { H3Event } from 'h3';

interface ContactForm {
  name: string;
  email: string;
  country: string;
  mobile?: string;  
}

// Generate HTML for the email
const generateEmailHTML = (form: ContactForm): string => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
    <h2 style="text-align: center; color: #0056b3;">Formular de cerere</h2>
    <p><strong>Name:</strong> ${form.name}</p>
    <p><strong>Email:</strong> ${form.email}</p>
    <p><strong>Country:</strong> ${form.country}</p>
    <p><strong>Mobile:</strong> ${form.mobile}</p>
    <hr>
    <p style="font-size: 0.9em; color: #666;">This message was sent from <a href="https://regalkitchen.md">regalkitchen.md</a> contact form.</p>
  </div>
`;

export default defineEventHandler(async (event: H3Event) => {

  if (event.node.req.method !== 'POST') {
    return sendError(event, createError({
      statusCode: 405,
      message: 'Only POST requests are allowed',
    }))
  }

  // Parse the request body
  const form: ContactForm =  await readBody<ContactForm>(event);

  try {

    const { sendgridApiKey , contactFromEmail, contactToEmail } = useRuntimeConfig(event);
    sgMail.setApiKey(sendgridApiKey);

    await sgMail.send({
      to: contactToEmail, 
      from: contactFromEmail,
      subject: 'Formular de cerere',
      text: `Name: ${form.name}, Email: ${form.email}, Country: ${form.country}, Mobile: ${form.mobile}`,
      html: generateEmailHTML(form),
    });

    return { success: true, message: 'Email sent successfully' };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email', error: error.message };
  }
});
