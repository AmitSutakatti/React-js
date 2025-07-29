module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      perspective: {
        1000: '1000px',
      },
      keyframes: {
        '3dEnter': {
          '0%': {
            opacity: '0',
            transform: 'rotateY(20deg) scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateY(0deg) scale(1)',
          },
        },
      },
      animation: {
        '3dEnter': '3dEnter 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      perspective: {
        1200: "1200px",
      },
      keyframes: {
        '3dEnter': {
          '0%': {
            opacity: '0',
            transform: 'rotateX(10deg) rotateY(20deg) scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
          },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6' },
          '50%': { textShadow: '0 0 20px #2563eb, 0 0 30px #2563eb' },
        },
      },
      animation: {
        '3dEnter': '3dEnter 0.9s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};