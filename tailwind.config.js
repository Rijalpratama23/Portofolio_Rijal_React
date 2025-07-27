// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#ECECE6',
        'primary-blue': '#1E62B4', // Definisi warna kustom Anda di sini
      },
    },
  },
  plugins: [],
};
