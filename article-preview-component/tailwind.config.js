/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-grayish-blue' : 'hsl(217, 19%, 35%)',
        'dark-blue' : 'hsl(214, 17%, 51%)',
        'grayish-blue' : 'hsl(212, 23%, 69%)',
        'light-grayish-blue' : 'hsl(210, 46%, 95%)'
      },
      spacing: {
        '119%' : '119%',
        '5rem' : '4.5rem',
        '10px' : '7px',
        '6rem' : '4rem'
      },
      maxWidth: {
        '3.5' : '50rem'
      },
      inset: {
        '75' : '20.3rem'
      },
      borderWidth: {
        'arrow' : '10px'
      },
      fontFamily: {
        'monrope' : ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}

