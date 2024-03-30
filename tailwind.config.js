/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './pages/howitworks.jsx',
    './components/navbar/Navbar.jsx',
    './components/landingpage/sections/hero/Hero.jsx',
    './components/landingpage/sections/overview/Overview.jsx',
    './components/landingpage/sections/overview/card/Card.jsx',
    './components/landingpage/sections/benefits/Benefits.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#1D1C1E',
        'accent-primary': '#e93802',
        'accent-primary-hover': '#FF9E90',
        'accent-secondary': '#009DBC',
        'accent-tertiary': '#532500',
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
