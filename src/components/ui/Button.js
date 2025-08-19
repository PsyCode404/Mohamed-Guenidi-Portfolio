import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent";
  
  const variantClasses = {
    primary: "bg-accent text-white hover:bg-accent/90 relative overflow-hidden",
    secondary: "bg-accent text-white hover:bg-accent/90 border border-accent relative overflow-hidden",
    outline: "border-2 border-accent text-accent bg-transparent hover:bg-accent/10 relative overflow-hidden",
    ghost: "text-accent bg-transparent hover:bg-accent/10 relative overflow-hidden"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {variant === 'primary' || variant === 'secondary' ? (
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-accentSecondary rounded-lg z-0"></div>
      ) : null}
      <div className="relative z-10 flex items-center gap-2">
        {children}
      </div>
    </button>
  );
};

export default Button;
