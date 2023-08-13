/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#81d6fd",
        secondry: "#0d6efc",
        font1: "#4f4f4f",
        font2: "#757575",
        main: "#0d6efc",
        SReg: "#52b0ed",
        Hmain: "#1d4ed8",
        email: "#0270e9",
      },
      height: {
        photo: "753px",
        page: "100vh",
        form: "490px",
        form2: "440px",
      },
      translate: {
        "10%": "10%",
        "30%": "30%",
        "20%": "20%",
        "3%": "3%",
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
      screens: {
        show: "1200px",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(20rem, 1fr))",
      },
      maxHeight: {
        mInfo: "391px",
        mCont: "420px",
      },
    },
  },
  plugins: [],
};
