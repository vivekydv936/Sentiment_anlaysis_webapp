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
    },
  },
  plugins: [],
}; 