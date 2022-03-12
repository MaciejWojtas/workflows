module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sun: '#EFCE4B',
        love: '#F64242',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
