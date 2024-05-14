/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      md: ['16px', '24px'],
      lg: ['18px', '27px'],
      xl: ['20px', '30px'],
      '2xl': ['14px', '20px'],
      '3xl': ['18px', '27px'],//
      '2xxl': ['28px', '32px'],
      '3xl': ['32px', '38px'],
      '5xl': ['40px', '48px'],
      '6xl': ['48px', '52px'],
      '7xl': ['76px', '85.6px'],
      '8xl': ['86px', '95.6px'],
      '8xl2': ['86px', '60.6px'],
      '9xl': ['96px', '105.6px'],
      '10xl': ['130px', '143.4px'],

    },
    container: {
      padding: {
        DEFAULT: '14px',
        'xl': '14px',
      },
      center: true,
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      Geometric: ["'Hurme \ Geometric \ Sans \ 1'", 'sans-serif'],
    },
    letterSpacing: {
    },
    extend: {
      screens: {
        'sm': '556px',
        'md': '768px',
        'lg': '991px',
        'xl': '1140px',
      },
      lineHeight: {
      },
      boxShadow: {
        'sm': '0px 4px 15.6px 0px #0000001A',
        'md': '0px -2px 29.9px 0px #E67E224D',
      },
      colors: {
        'orangeRed': '#E67E22',
        'gray30': '#4D4D4D',
        'gainsBore': '#E6E6E6',
        'paleOrange': '#FFF7EF',
        // 'lightGrey': '#F2F2F2',
        'darkGrey': '#221305',
      },
      backgroundImage: {
        "bgHero": "url('../src/assets/images/webp/heroSecBgImg.png')",
      },
      backgroundSize: {
        "BgSize": "100% 100%"
      },
      borderRadius: {
        'md2': '10px',
        '3md': '48px',
      },
    },
  },
  plugins: []
}