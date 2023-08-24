const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // mode: 'jit',
  content: ['src/pages/**/*.{js,jsx}', 'src/components/**/*.{js,jsx}'],
  theme: {
    screens: {
      xxs: '360px',
      xs: '475px',
      ...defaultTheme.screens,
      '1.5xl': '1500px',
      '2.5xl': '1920px',
      '3xl': '2100px',
      '4xl': '2800px',
      '5xl': '3200px'
    },
    extend: {
      zIndex: {
        5: '5',
      },
      colors: {
        primary: '#00FFE8',
        secondary: '#E48632',
        'bg-primary': '#111111',
        'bg-secondary': '#252525',
      },
      fontFamily: {
        anurati: ['anurati', 'sans-serif'],
        nasa: ['nasalization', 'sans-serif'],
        // nasa: ['var(--font-nasalization)', 'sans-serif'],
      },
      backgroundImage: {
        'type-bg':
          "url('https://robertsspaceindustries.com/rsi/static/images/channel/hub-type-bg.png')",
        'type-post':
          "url('https://robertsspaceindustries.com/rsi/static/images/atom/type-post.png')",
        lines:
          "url('https://robertsspaceindustries.com/rsi/static/images/bg-med-lines.png')",
      },
      backgroundPosition: {
        '00': '0 0',
      },
      content: {
        angledoubler:
          'url("data:image/svg+xml;base64,PHN2ZyBpZD0iRmFBbmdsZURvdWJsZVJpZ2h0IiBkYXRhLW5hbWU9IkZhQW5nbGVEb3VibGVSaWdodCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiI+DQogICAgICA8cGF0aCBkPSJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHptMTkyLTM0bC0xMzYtMTM2Yy05LjQtOS40LTI0LjYtOS40LTMzLjkgMGwtMjIuNiAyMi42Yy05LjQgOS40LTkuNCAyNC42IDAgMzMuOWw5Ni40IDk2LjQtOTYuNCA5Ni40Yy05LjQgOS40LTkuNCAyNC42IDAgMzMuOWwyMi42IDIyLjZjOS40IDkuNCAyNC42IDkuNCAzMy45IDBsMTM2LTEzNmM5LjQtOS4yIDkuNC0yNC40IDAtMzMuOHoiIC8+DQogICAgPC9zdmc+")',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
        'ping-slow': 'ping 1.15s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
