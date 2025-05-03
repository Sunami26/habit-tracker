/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // or 'media'
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}', // if you use components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  
  