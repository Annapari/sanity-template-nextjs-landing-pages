const {ESLint} = require('eslint')

module.exports = {
  extends: [
    'next',
    'standard',
    'standard-react',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'ESLint:recommended',
  ],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'comma-dangle': 0,
    '@next/next/no-img-element': 0,
  },
}
