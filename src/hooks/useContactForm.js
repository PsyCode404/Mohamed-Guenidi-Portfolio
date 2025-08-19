import { useState } from 'react';
import { sendEmail } from '../services/emailService';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    const result = await sendEmail(formData);

    if (result.success) {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } else {
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: result.error || 'Failed to send message. Please try again.' 
      });
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setFormStatus({ submitting: false, submitted: false, error: null });
  };

  return {
    formData,
    formStatus,
    handleChange,
    handleSubmit,
    resetForm
  };
};
