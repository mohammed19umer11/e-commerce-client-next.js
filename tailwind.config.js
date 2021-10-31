module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      transitionProperty: {
        'height': 'height'
      },
      backgroundColor: ['active'],
      colors: {
        primary: {
          0: '#b1e6c3',
          100: '#8adaa5',
          200: '#77d496',
          300: '#63ce87',
          400: '#50c878'
        },
        secondary: {
          100: '#3dc269',
          200: '#37ae5f',
          300: '#319b54',
        },
        accent: {
          
        },
  
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
