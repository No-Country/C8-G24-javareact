/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}" , 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' ,"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js" ],
  theme: {
    extend: {fontFamily: {
      "logoFont":['Fruktur', 'cursive'],
      "fontGafata":['Gafata', 'sans-serif'],
      "fontGamja": ['Gamja Flower', 'cursive'],
      "fontGotu":['Gotu', 'sans-serif'],
      "fontFredoka":['Fredoka One', 'cursive'],
      "fontFresca": ['Fresca', 'sans-serif'],
      "fontFuzzy": ['Fuzzy Bubbles', 'cursive'],
      "fontGaldeano": ['Galdeano', 'sans-serif']
    }},
    backgroundImage:  {
      'onboarding-background': "url('https://firebasestorage.googleapis.com/v0/b/kaipet-38aea.appspot.com/o/cat-dog-background.png?alt=media&token=11419c5f-bdc2-402a-868e-a08fcbe30c5a&_gl=1*obhw2n*_ga*MTc0Njg3NzI5NC4xNjk3MDIxMjE2*_ga_CW55HF8NVT*MTY5NzQ2MDIxNS4xMS4xLjE2OTc0NjkxNTEuNTQuMC4w')",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
]
};
