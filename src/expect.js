const matchers = require('./matchers')

module.exports = value => {
  return matchers(value)
}
