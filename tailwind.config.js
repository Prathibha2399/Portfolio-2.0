/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
        fontFamily : {
        /*   "roboto-slab" : ["Roboto Slab", serif],
          "sedan-sc-regular" : ["Sedan SC", serif],
          "montserrat" : ["Montserrat", sans-serif],
          "lato-thin" : ["Lato", sans-serif],
          "lato-light" : ["Lato", sans-serif],
          "lato-regular" : ["Lato", sans-serif],
          "lato-bold" : ["Lato", sans-serif],
          "lato-black" : ["Lato", sans-serif],
          "lato-thin-italic" : ["Lato", sans-serif],
          "lato-light-italic" : ["Lato", sans-serif],
          "lato-regular-italic" : ["Lato", sans-serif],
          "lato-bold-italic" : ["Lato", sans-serif],
          "lato-black-italic" : ["Lato", sans-serif],
          "jersey-25-charted-regular" : ["Jersey 25 Charted", sans-serif],
          "briem-hand" : ["Briem Hand", cursive],
        } */
      },
      animation: {
        'ping' : 'ping 4s ease-in-out 1',
        'pulse' : 'pulse 1s ease-in-out infinite',
      }
    },
  plugins: [
    
  ],
}
}
