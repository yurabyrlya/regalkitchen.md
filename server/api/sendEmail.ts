import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  try {
    // Parse the incoming form data
    //const body = await readBody(event);
    const { name, email, message } = {
        name : 'Name',
        email : 'yurabyrlya1@gmail.com',
        message : 'Test Meesage',
    };

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Or any other email service (e.g., SendGrid, Outlook, SMTP)
      auth: {
        user: 'iuribirlea@gmail.com', // Replace with your email
        pass: 'oowkeximgvsjhayb', // Replace with your app-specific password
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'regalkitch3n@gmail.com', // The sender's email
      to: 'iuribirlea@gmail.com', // The recipient (your email)
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email.' };
  }
});
