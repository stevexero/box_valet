/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#1D1C1E',
        'black-primary-light': '#f1f3f5',
        'accent-primary': '#e93802',
        'accent-primary-hover': '#FF9E90',
        'accent-secondary': '#009DBC',
        'accent-tertiary': '#532500',
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
