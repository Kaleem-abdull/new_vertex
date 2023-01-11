/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    backgroundImage: {
      one: "url(../img/vertex-bg-01.jpg)",
      two: "url(../img/vertex-bg-02.jpg)",
      three: "url(../img/vertex-bg-03.jpg)",
      four: "url(../img/vertex-bg-04.jpg)",
    },
    screens: {
      md: "992px",
    },
    extend: {},
  },
  plugins: [],
};
