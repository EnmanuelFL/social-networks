/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],  // Asegúrate de que esté buscando bien los archivos HTML y JS
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ['Poppins', 'sans-serif'], // Usa Poppins como fuente predeterminada
      },
    },
  },
  plugins: [],
}
