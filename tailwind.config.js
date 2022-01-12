module.exports = {
  mode: "jit",
  content: ['src/pages/**/*.{js,jsx}', 'src/components/**/*.{js,jsx}'],
  theme: {
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
        'anurati': ['Anurati-Regular', 'sans-serif'],
        'nasa': ['Nasalization', 'sans-serif']
      },
      backgroundImage: {
        'type-post': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAmklEQVR4AZXRsQkCQRBA0V240UwwkstE7EJQbEBb0AIUSzCwDTPNlONEFMQK5NLNLMRE8F8wIMuAa/DCzzAzbhpeFa6Jqjq4QJAlONVBCZfoqIFHjpVhjswI/p/QxsQwhreCFkaRIQZowqP4DgSdSB8lCtzwjJdeQi2wwRldBMx+nTXHDnus4fRxDYihhze2cBo8QGS64wDR4APzrVvolMDO6wAAAABJRU5ErkJggg==')",
        'lines': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAAaklEQVR4Aa3MQQnEABBFse9fYmGu1bFPwUIh5J7t9v5xez7C3Q1372wX28V2sV1sF9vFdrFdbBfbxXaxXWwX3N1w98x2sV1sF9vFdrFdbBfbxXaxXWwX28V2sV1sF9vFdrFdbBfbxXahXX52x238nxzppAAAAABJRU5ErkJggg==')",
      },
      backgroundPosition: {
        '00': '0 0'
      }
    },
  },
  plugins: [],
}
