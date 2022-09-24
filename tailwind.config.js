module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: ['group-hover'],
      height: ['group-hover'],
      backgroundImage: {
        'dark-pattern': "url('/assets/images/bg-dark.svg')",
        'light-pattern': "url('/assets/images/bg-light.svg')",
      },
      fontFamily: {
        'code': ['Fira Code', 'Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
