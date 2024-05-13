/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
    },
    container: {
      padding: {
        DEFAULT: '14px',
        'xl': '14px',
      },
      center: true,
    },
    fontFamily: {
    },
    letterSpacing: {
    },
    extend: {
      screens: {
        'slg': '940px',
      },
      lineHeight: {
      },
      boxShadow: {
      },
      colors: {
      },
      backgroundImage: {
        "bg-gradient": "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
      },
      backgroundSize: {
        "BgSize": "100% 100%"
      },
      borderRadius: {
        '2md': '41px',
        '3md': '48px',
      },
    },
  },
  plugins: []
}