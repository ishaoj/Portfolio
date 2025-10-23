/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: '#14141a',
        accent: '#5b5bd6',
        textPrimary: '#eaeaea',
        textSecondary: '#9ca3af',
        highlight: '#00ffd1',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(91, 91, 214, 0.6)',
        'glow-lg': '0 0 30px rgba(91, 91, 214, 0.7)',
        'glow-cyan': '0 0 20px rgba(0, 255, 209, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(91, 91, 214, 0.6)' },
          '50%': { boxShadow: '0 0 30px rgba(91, 91, 214, 0.9)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

