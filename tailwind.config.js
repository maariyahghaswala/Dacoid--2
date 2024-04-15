/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fcfcfc",
          "200": "#787878",
          "300": "#252727",
        },
        black1: "#000",
        white: "#fff",
        black: "#2c2b2b",
        cornflowerblue: {
          "100": "#9fb2ff",
          "200": "#93a9ff",
          "300": "#819cff",
          "400": "#809aff",
          "500": "#8099ff",
          "600": "rgba(140, 177, 255, 0.6)",
          "700": "#829dff",
        },
        "gray-100": "#808080",
        crimson: "#eb1754",
        "gray-50": "#f1f1f1",
        darkslateblue: "rgba(42, 67, 156, 0)",
        darkslategray: {
          "100": "#454545",
          "200": "rgba(69, 69, 69, 0.04)",
        },
        red: "rgba(255, 0, 0, 0.42)",
        limegreen: {
          "100": "#34b009",
          "200": "rgba(52, 176, 9, 0.5)",
        },
        royalblue: {
          "100": "#5883f7",
          "200": "#5472db",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        roboto: "Roboto",
        quicksand: "Quicksand",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "11xs-3": "1.3px",
        "10xs-7": "2.7px",
        "mini-3": "14.3px",
        "11xs-5": "1.5px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      mini: "15px",
      xs: "12px",
      "3xs": "10px",
      "sm-2": "13.2px",
      "smi-2": "12.2px",
      "xs-2": "11.2px",
      "9xl-5": "28.5px",
      "xs-4": "11.4px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
