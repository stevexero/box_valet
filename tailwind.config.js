/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './pages/howitworks.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#1D1C1E',
        'accent-primary': '#e93802',
        'accent-primary-hover': '#FF9E90',
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
