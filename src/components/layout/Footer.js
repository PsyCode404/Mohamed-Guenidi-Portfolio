import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', to: 'hero', offset: -70 },
    { name: 'About', to: 'about', offset: -70 },
    { name: 'Projects', to: 'projects', offset: -70 },
    { name: 'Skills', to: 'skills', offset: -70 },
    { name: 'Resume', to: 'resume', offset: -70 },
    { name: 'Contact', to: 'contact', offset: -70 },
  ];

  return (
    <footer className="bg-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-accent">
                Mohamed<span className="text-secondary">.</span>
              </span>
            </div>
            <p className="text-accent max-w-xs">
              Creative developer focused on building sleek digital experiences that feel human.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/mohamedguenidi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-secondary transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/mohamedguenidi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-secondary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:mohamedguenidi7@gmail.com" 
                className="text-accent hover:text-secondary transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                    className="text-accent hover:text-secondary transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Get in Touch</h3>
            <p className="text-accent">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <p className="text-accent">
              <a 
                href="mailto:mohamedguenidi7@gmail.com" 
                className="text-accent hover:text-secondary transition-colors duration-300"
              >
                mohamedguenidi7@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent text-sm">
            &copy; {currentYear} Mohamed Guenidi. All rights reserved.
          </p>
          <p className="text-accent text-sm mt-2 md:mt-0">
            Built with 💻 by Mohamed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
