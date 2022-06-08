const path = require('path');

module.exports = {
  darkMode: 'class',
  content: [
    path.join(__dirname, '/app/pages/**/*.{html,js,ts,jsx,tsx}'),
    path.join(__dirname, '/app/components/**/*.{html,js,ts,jsx,tsx}'),
    path.join(__dirname, '/app/packages/**/*.{html,js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
