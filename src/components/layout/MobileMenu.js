import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaComments } from 'react-icons/fa';

const MobileMenu = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'resume', label: 'Resume', icon: FaHome },
    { id: 'portfolio', label: 'Portfolio', icon: FaBriefcase },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  const handleChatClick = () => {
    // Prefer the global API exposed in public/index.html
    if (window.botpressWebChat && typeof window.botpressWebChat.sendEvent === 'function') {
      window.botpressWebChat.sendEvent({ type: 'show' });
      return;
    }
    // Last resort: click our injected trigger if present
    const trigger = document.getElementById('chat-trigger');
    if (trigger) trigger.click();
  };

  return (
    <>
      {/* Mobile Chatbot Button */}
      <div className="lg:hidden">
        <button
          onClick={handleChatClick}
          className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accentSecondary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          aria-label="Open chat"
        >
          <FaComments size={16} />
        </button>
      </div>

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