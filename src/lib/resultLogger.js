const logFailedTest = require('./logFailedTest')

module.exports = ({ result, condition, value }) => {
  result ? result : logFailedTest(condition, value)
}
