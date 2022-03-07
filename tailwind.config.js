module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["src/components/**/*.js", "src/pages/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        'title': 'top: -100px;',
      },
      animation: {
        "spin-slow": "spin 7s linear infinite",
        "spin-super-slow": "spin 50s linear infinite",
      },
      colors: {
        "app-raw-bg": "#f9f9fa",
        "arq-brown-50": "#f9f9fa",
        "arq-brown-100": "#E6E3DE",
        "arq-brown-200": "#9f6037",
        "arq-brown-300": "#744c2f",
        "arq-brown-500": "#523521",
        "arq-brown-700": "#29261d",
        "arq-brown-800": "#332013",
        "arq-green-100": "#EFF0E9",
        "arq-green-300": "#BDC9B8",
        "arq-green-400": "#9ea899",
        "arq-green-600": "#6B7774",
      },
      width: {
        50: "12.8rem",
        68: "17rem",
      },
      minWidth: {
        300: "300px",
        320: "320px",
        500: "500px",
      },
      maxWidth: {
        150: "150px",
        200: "200px",
        500: "500px",
        300: "300px"
      },
      height: {
        50: "12.8rem",
        68: "17rem",
      },
      borderWidth: {
        20: "20px",
      },
      fontFamily: {
        emperatriz: ["emperatriz"],
        "fira-sans": ["Fira Sans"]
      },
      backgroundSize: {
        "50px": "50px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
