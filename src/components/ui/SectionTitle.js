import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div 
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4 bg-gradient-to-r from-accent to-accentSecondary bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-textSecondary max-w-2xl mx-auto mb-6">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-accent to-accentSecondary mx-auto rounded-full"></div>
    </motion.div>
  );
};

export default SectionTitle;
