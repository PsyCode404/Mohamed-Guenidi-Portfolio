/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
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
        
        // vCard-inspired colors
        'eerie-black-2': '#0f172a',
        'onyx': '#1e293b',
        'jet': '#334155',
        'smoky-black': '#070707',
        'white-1': '#f1f5f9',
        'white-2': '#f1f5f9',
        'light-gray': '#cbd5e1',
        'light-gray-70': '#94a3b8',
        
        // Original colors for reference
        dark: "#1F2937",
        light: "#F9FAFB",
        gray: {
          800: "#1e293b", // Darker background
          900: "#0f172a"  // Darkest background
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundColor: {
        'card': '#1e293b', // Dark card background
        'card-hover': '#334155', // Hover state for cards
      },
    },
  },
  plugins: [],
}
