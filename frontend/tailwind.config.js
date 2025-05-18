/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // vibrant blue
        accent: '#a78bfa', // soft purple
        secondary: '#06b6d4', // mint/teal
        highlight: '#facc15', // warm yellow
        coral: '#fb7185', // coral
        dark: '#1e293b', // dark gray
        light: '#f3f4f6', // light gray
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #2563eb 0%, #a78bfa 100%)',
        'section-gradient': 'linear-gradient(90deg, #06b6d4 0%, #a78bfa 100%)',
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.08)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(30px) scale(1.05)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translateX(0px) scale(1)' },
          '50%': { transform: 'translateX(40px) scale(1.1)' },
        },
      },
      animation: {
        blob1: 'blob1 12s ease-in-out infinite',
        blob2: 'blob2 14s ease-in-out infinite',
        blob3: 'blob3 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}; 