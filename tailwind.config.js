module.exports = {
  //purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        seaBlue: '#1395ac',
        skyBlue: '#094581',
      },
      backgroundImage: theme => ({
        'header-texture': "url('../images/bg_01-2.jpg')",
        'footer-texture': "url('../images/bg_02-2.jpg')",
      }),
      height: {
        waveHight: '90px',
        headerHight: '500px',
        footerHight: '300px',
      },
      inset: {
        '90': '90px',
        '-90': '-90px',
      }
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 2px 3px darkgrey"
        },
        ".text-shadow-md": {
          textShadow: "0px 3px 3px darkgrey"
        },
        ".text-shadow-lg": {
          textShadow: "0px 5px 3px darkgrey"
        },
        ".text-shadow-xl": {
          textShadow: "0px 7px 3px darkgrey"
        },
        ".text-shadow-2xl": {
          textShadow: "0px 10px 3px darkgrey"
        },
        ".text-shadow-none": {
          textShadow: "none"
        }
      };

      addUtilities(newUtilities);
    }
  ],
}
