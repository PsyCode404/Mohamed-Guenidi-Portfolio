import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-eerie-black-2 border border-jet rounded-xl py-4 px-6 mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-2 px-4 font-medium rounded-lg transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-br from-accent to-accentSecondary text-white shadow-lg'
                : 'bg-eerie-black-2 text-textSecondary hover:text-accent'
            }`}
          >
            <div className="relative z-10">
              {tab.label}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TabNavigation;
