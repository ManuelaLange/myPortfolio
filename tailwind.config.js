/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-header': 'calc(100vh - 64px)', // Replace 64px with your header height
      },
      spacing: {
        '100px': '100px',
        '200px': '200px',
      },
      fontFamily: {
        text: "Chakra Petch, sans-serif",
        title:"Quantico, sans-serif",
      },
      boxShadow: {
        'button': '-10px 10px 0px 0px rgba(0, 0, 0, 0.2)',
        'custom': '0 10px 10px 0px rgba(0, 0, 0, 1)',
        'customHover': '0px 0px 20px 5px rgba(249, 115, 22, 0.5)',
        'customHoverWhite': '0px 0px 20px 5px rgba(255, 255, 255, 0.5)'
      },
      borderRadius: {
        'custom-img': '152px', // Nome personalizado para o valor de 152px
      },
    },
  },
  plugins: [],
}
export const plugins = [];

