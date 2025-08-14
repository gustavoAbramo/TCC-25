/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta verde personalizada
        estoque: {
          DEFAULT: "#22c55e", // verde principal
          light: "#4ade80",   // verde claro
          dark: "#15803d",    // verde escuro
        },
        fundo: {
          claro: "#10d34bff",  // fundo verde bem suave
          medio: "#dcfce7",  // fundo verde médio
          escuro: "#bbf7d0", // fundo verde mais saturado
        }
      },
      backgroundImage: {
        'gradiente-estoque': 'linear-gradient(to right, #4ade80, #22c55e)', // gradiente verde
        'gradiente-alerta': 'linear-gradient(to right, #22c55e, #facc15)',   // gradiente verde → amarelo
      }
    },
  },
  plugins: [],
}
