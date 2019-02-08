const logFailedTest = require('./logFailedTest');

module.exports = ({ result, condition, value }) => {
  result || logFailedTest(condition, value);
};
