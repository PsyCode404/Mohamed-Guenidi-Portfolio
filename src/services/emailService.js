import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_ymx57vh',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_bqcojzr',
  userId: process.env.REACT_APP_EMAILJS_USER_ID || 'YOUR_USER_ID'
};

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      to_email: process.env.REACT_APP_CONTACT_EMAIL || 'mohamedguenidi7@gmail.com',
      message: formData.message
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.userId
    );

    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.text || 'Failed to send email' };
  }
};
