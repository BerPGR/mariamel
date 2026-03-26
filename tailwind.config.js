/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // O nome à esquerda é a classe que você vai usar (font-titulo)
        // O nome no array é o que você definiu no @font-face
        'titulo': ['title', 'serif'],
        'corpo': ['body', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}