/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
    colors: {
      "primarycolor": "#ED4137",
      "secondarycolor": "#090619",
      "introcolor": "#0B071E",
      "textcolor": "#D9D9D9",
    },
    fontFamily: {
      nunito: ["Nunito", 'sans-serif']
    }
  },
  plugins: [],
}

