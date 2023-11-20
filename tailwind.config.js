/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#FFDA43",
        title: '#CE9020',
        
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cormorant: [ 'Cormorant Upright', "serif"]
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    
]
};