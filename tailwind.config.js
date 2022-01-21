const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: ['src/pages/**/*.{js,jsx}', 'src/components/**/*.{js,jsx}'],
  theme: {
    screens: {
      'xxs': '360px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      zIndex: {
        '5': '5',
      },
      colors: {
        'primary': '#00FFE8',
        'secondary': '#E48632',
        'bg-primary': '#111111',
        'bg-secondary': '#252525',
      },
      fontFamily: {
        'anurati': ['Anurati', 'sans-serif'],
        'nasa': ['nasalization', 'sans-serif']
      },
      backgroundImage: {
        'type-bg': "url('https://robertsspaceindustries.com/rsi/static/images/channel/hub-type-bg.png')",
        'type-post': "url('https://robertsspaceindustries.com/rsi/static/images/atom/type-post.png')",
        'lines': "url('https://robertsspaceindustries.com/rsi/static/images/bg-med-lines.png')",
      },
      backgroundPosition: {
        '00': '0 0'
      }
    },
  },
  plugins: [],
}
