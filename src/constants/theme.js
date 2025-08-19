// Color palette constants
export const COLORS = {
  // Main background colors
  background: '#0f172a',     // Darkest background (eerie-black-2)
  backgroundSecondary: '#1e293b', // Darker background (onyx)
  
  // Text colors
  textPrimary: '#f1f5f9',    // White text (white-2)
  textSecondary: '#cbd5e1',  // Light gray text (light-gray)
  textAccent: '#94a3b8',     // Light gray 70% (light-gray-70)
  
  // Accent colors
  accent: '#1ABC9C',         // Teal (updated from orange)
  accentSecondary: '#1ABC9C', // Teal (updated from vegas gold)
  
  // Card colors
  cardBackground: '#1e293b',  // Onyx
  cardBorder: '#334155',     // Jet
  
  // Gradient backgrounds
  bgGradientOnyx: 'linear-gradient(to bottom right, #334155 3%, #1e293b 97%)',
  bgGradientJet: 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.251) 0%, rgba(15, 23, 42, 0) 100%), #1e293b',
  bgGradientYellow1: 'linear-gradient(to bottom right, #f59e0b 0%, rgba(226, 125, 74, 0) 50%)',
  bgGradientYellow2: 'linear-gradient(135deg, rgba(245, 158, 11, 0.251) 0%, rgba(226, 125, 74, 0) 59.86%), #1e293b',
  
  // Gradient borders
  borderGradientOnyx: 'linear-gradient(to bottom right, #334155 0%, rgba(30, 41, 59, 0) 50%)',
  
  // Text gradients
  textGradientYellow: 'linear-gradient(to right, #f59e0b, #e27d4a)'
};

// Animation constants
export const ANIMATIONS = {
  bounce: 'animate-bounce',
  pulse: 'animate-pulse',
  bounceSlow: 'bounce 3s infinite',
  pulseSlow: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
};

// Typography constants
export const TYPOGRAPHY = {
  fontFamily: 'Inter, sans-serif',
  headingSizes: {
    hero: 'text-4xl md:text-5xl lg:text-6xl',
    sectionTitle: 'text-3xl md:text-4xl',
    subsectionTitle: 'text-2xl',
    cardTitle: 'text-xl',
    body: 'text-base',
    small: 'text-sm'
  }
};
