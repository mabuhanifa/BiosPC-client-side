module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : { 
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0d6efd",
          secondary: "#6c757d",
          success: "#198754",
          danger: "#dc3545",
          warning: "#ffc107",
          info: "#0dcaf0",
          light: "#f8f9fa",
          dark: "#212529",
          darkLight: "#343a40",
          text: "#212529",
          background: "#ffffff",
          border: "#dee2e6",
          accent: "#37cdbe",
          neutral: "#3d4451",
          error : "#dc3545",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  

  plugins: [require("daisyui")],
};
