// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const createPWA = false

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !createPWA
  }
})
