/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './pages/howitworks.jsx',
    './components/landingpage/sections/hero/Hero.jsx',
    './components/landingpage/sections/overview/Overview.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#1D1C1E',
        'accent-primary': '#e93802',
        'accent-primary-hover': '#FF9E90',
        'accent-secondary': '#009DBC',
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
