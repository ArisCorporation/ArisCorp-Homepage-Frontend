module.exports = {
  mode: "jit",
  content: ['src/pages/**/*.{js,jsx}', 'src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#00FFE8',
        'secondary': '#E48632',
        'bg-primary': '#111111',
      },
      fontFamily: {
        'anurati': ['Anurati-Regular', 'sans-serif']
      }
    },
  },
  plugins: [],
}
