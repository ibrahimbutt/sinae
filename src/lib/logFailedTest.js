/* eslint no-throw-literal: 0 */

module.exports = (condition, result) => {
  throw `\nExpected: ${condition}\nGot: ${result}\n`;
};
