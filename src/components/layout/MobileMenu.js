import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const MobileMenu = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'resume', label: 'Resume', icon: FaHome },
    { id: 'portfolio', label: 'Portfolio', icon: FaBriefcase },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accentSecondary text-white flex items-center justify-center shadow-lg"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute right-0 top-0 h-full w-80 max-w-[80vw] bg-backgroundSecondary border-l border-cardBorder"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 pt-20">
                {/* Navigation Links */}
                <nav className="space-y-4">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-br from-accent to-accentSecondary text-white shadow-lg'
                            : 'bg-cardBackground text-textSecondary hover:text-accent hover:bg-cardBorder'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar (Alternative mobile navigation) */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-backgroundSecondary border-t border-cardBorder z-30">
        <div className="flex justify-around items-center py-2 px-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-accent'
                    : 'text-textSecondary hover:text-accent'
                }`}
              >
                <Icon size={18} />
                <span className="text-xs mt-1 font-medium">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-accent rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;