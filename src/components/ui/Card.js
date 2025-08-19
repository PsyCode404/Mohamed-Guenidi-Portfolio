import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`relative bg-eerie-black-2 rounded-xl p-6 transition-all duration-300 border border-jet shadow-lg hover:shadow-xl ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-jet to-eerie-black-2 rounded-xl z-0"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
