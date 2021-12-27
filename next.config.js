const withPWA = require('next-pwa')

const settings = {
  env: {},
  devIndicators: {
    autoPrerender: false,
  },

  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
}

// module.exports =
//   process.env.NODE_ENV === 'development' ? settings : withPWA(settings)

module.exports = withPWA(settings)
