import React from 'react';
import { motion } from 'framer-motion';
import ProfilePic from '../../assets/images/PortfolioPic.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <motion.aside 
      className="fixed left-0 top-0 h-full w-64 bg-backgroundSecondary border-r border-cardBorder p-6 flex flex-col"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-accentSecondary rounded-full blur-md opacity-30"></div>
          <img 
            src={ProfilePic} 
            alt="Profile" 
            className="relative rounded-full w-full h-full object-cover border-4 border-white/20"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-textPrimary mb-2">Mohamed Guenidi</h1>
        <p className="text-textSecondary text-sm bg-onyx px-3 py-1 rounded-lg inline-block">Computer Science Student      Full stack devoloper </p>
      </div>

      {/* Contact Information */}
      <div className="space-y-4 mb-8 px-2">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cardBorder to-cardBackground flex items-center justify-center border border-cardBorder flex-shrink-0">
            <span className="text-accent text-sm">@</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-textAccent">Email</p>
            <a 
              href="mailto:mohamedguenidi7@gmail.com" 
              className="text-textPrimary hover:text-accent transition-colors duration-300 text-sm break-all"
            >
              mohamedguenidi7@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cardBorder to-cardBackground flex items-center justify-center border border-cardBorder">
            <span className="text-accent text-sm">📞</span>
          </div>
          <div>
            <p className="text-sm text-textAccent">Phone</p>
            <a 
              href="tel:+21695171170" 
              className="text-textPrimary hover:text-accent transition-colors duration-300"
            >
              +216 95 171 170
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cardBorder to-cardBackground flex items-center justify-center border border-cardBorder">
            <span className="text-accent text-sm">🎂</span>
          </div>
          <div>
            <p className="text-sm text-textAccent">Birthday</p>
            <time className="text-textPrimary">April 18th, 2004</time>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cardBorder to-cardBackground flex items-center justify-center border border-cardBorder">
            <span className="text-accent text-sm">📍</span>
          </div>
          <div>
            <p className="text-sm text-textAccent">Location</p>
            <address className="text-textPrimary not-italic break-words">
              Jemmel, Tunisia
            </address>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-auto flex justify-center gap-4">
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
    </motion.aside>
  );
};

export default Sidebar;
