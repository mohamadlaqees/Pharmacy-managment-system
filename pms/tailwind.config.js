/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#81d6fd",
        secondry: "#d7eeff",
        SWord: "#5fb9f7",
        SReg: "#52b0ed",
        font1: "#4f4f4f",
        font2: "#757575",
      },
      height: {
        photo: "753px",
        page: "100vh",
        form: "420px",
      },
      translate: {
        "10%": "10%",
        "30%": "30%",
      },
      width: {
        "88%": "88%",
        "12%": "12%",
        custom: "96.5%",
        form: "500px",
        form2: "750px",
      },
      transitionDuration: {
        ".3s": ".3s",
      },
    },
  },
  plugins: [],
};
