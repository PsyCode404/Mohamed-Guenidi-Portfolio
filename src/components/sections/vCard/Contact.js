import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// Profile picture from public directory
const ProfilePic = '/PortfolioPic.png';

const Contact = () => {
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

  // Initialize EmailJS with your service ID
  emailjs.init('SW5vBYPe3Udkmgywk');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // EmailJS parameters
    const serviceID = 'service_ymx57vh';
    const templateID = 'template_bqcojzr';
    
    // Send email using EmailJS
    emailjs.sendForm(serviceID, templateID, e.target)
      .then((result) => {
        console.log(result.text);
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus(prevState => ({ ...prevState, submitted: false }));
        }, 5000);
      }, (error) => {
        console.log(error.text);
        setFormStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again later.' });
        
        // Reset error after 5 seconds
        setTimeout(() => {
          setFormStatus(prevState => ({ ...prevState, error: null }));
        }, 5000);
      });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Mobile Profile Section - Only visible on mobile */}
      <div className="lg:hidden">
        <Card>
          <div className="text-center mb-6">
            {/* Profile Picture */}
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accentSecondary rounded-full blur-md opacity-30"></div>
                <img 
                  src={ProfilePic} 
                  alt="Profile" 
                  className="relative rounded-full w-full h-full object-cover border-4 border-white/20"
                />
              </div>
            </div>
            
            {/* Name and Title */}
            <h1 className="text-xl font-bold text-textPrimary mb-2">Mohamed Guenidi</h1>
            <p className="text-textSecondary text-sm bg-onyx px-3 py-1 rounded-lg inline-block mb-4">
              Computer Science Student | Full stack developer
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center gap-2">
                <span className="text-accent text-sm">📧</span>
                <a 
                  href="mailto:mohamedguenidi7@gmail.com" 
                  className="text-textPrimary hover:text-accent transition-colors duration-300 text-sm"
                >
                  mohamedguenidi7@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="text-accent text-sm">📞</span>
                <a 
                  href="tel:+21695171170" 
                  className="text-textPrimary hover:text-accent transition-colors duration-300 text-sm"
                >
                  +216 95 171 170
                </a>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="text-accent text-sm">📍</span>
                <span className="text-textPrimary text-sm">Jemmel, Tunisia</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/PsyCode404" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-cardBorder to-cardBackground flex items-center justify-center text-accent hover:from-accent hover:to-accentSecondary hover:text-white transition-all duration-300 border border-cardBorder"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-guenidi-53a2a4340/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-cardBorder to-cardBackground flex items-center justify-center text-accent hover:from-accent hover:to-accentSecondary hover:text-white transition-all duration-300 border border-cardBorder"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </Card>
      </div>

      {/* Location Map */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Location</h2>
        <Card>
          <div className="mb-6">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25946.176226467494!2d10.738813643897457!3d35.62101977519879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020f9eece33c61%3A0x54d0813bc5281d07!2sJemmel!5e0!3m2!1sfr!2stn!4v1755425336470!5m2!1sfr!2stn" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Location Map"
            ></iframe>
          </div>
        </Card>
      </div>

      {/* Contact Form */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-card text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-card text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-card text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <Button 
              type="submit" 
              disabled={!isFormValid || formStatus.submitting}
              variant="primary"
              className="w-full py-3"
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </Button>

            {formStatus.submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-center p-4 bg-green-900/20 rounded-lg border border-green-600/30"
              >
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
              </motion.div>
            )}

            {formStatus.error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-center p-4 bg-red-900/20 rounded-lg border border-red-600/30"
              >
                <p className="font-medium">Error sending message</p>
                <p className="text-sm mt-1">Please try again later.</p>
              </motion.div>
            )}
          </form>
        </Card>
      </div>
    </motion.section>
  );
};

export default Contact;
