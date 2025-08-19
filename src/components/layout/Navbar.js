import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero', offset: -70 },
    { name: 'About', to: 'about', offset: -70 },
    { name: 'Projects', to: 'projects', offset: -70 },
    { name: 'Skills', to: 'skills', offset: -70 },
    { name: 'Resume', to: 'resume', offset: -70 },
    { name: 'Contact', to: 'contact', offset: -70 },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="cursor-pointer"
            >
              <div className="flex items-center">
                <span className="text-2xl font-bold text-accent">
                  Mohamed<span className="text-secondary">.</span>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  className="text-accent hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Dark Mode indicator removed */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Dark mode toggle removed */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-accent hover:bg-primary/10 transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-accent hover:text-secondary font-medium transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
