/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './pages/howitworks.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: ['flowbite/plugin'],
};
