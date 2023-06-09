/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      width:{
        sbosm:'8rem',
        sbomd:'12rem',
        sbcsm:'5rem',
        sbcmd:'8rem',
      },
      fontSize:{
        xsm:['11px']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/line-clamp'),
  ],
}
