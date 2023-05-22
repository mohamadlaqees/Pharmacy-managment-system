/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#81d6fd',
        secondry:'#d7eeff',
        SWord:'#5fb9f7',
        SReg:'#52b0ed',
      },
      height:{
        photo:'753px',
        page:'100vh',
      },
      translate: {
        '10%': '10%',
      },
      width:{
        '88%':'88%',
        '12%':'12%',
        'custom':'96.5%'
      },
      transitionDuration:{
        '.3s':'.3s'
      }
    },
  },
  plugins: [],
}

