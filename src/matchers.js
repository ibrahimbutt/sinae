const resultLogger = require('./resultLogger')

module.exports = value => {
  return {
    toEqual(condition) {
      result = value == condition
      resultLogger({
        result,
        condition,
        value
      })
    },
    toNotEqual(condition) {
      result = value != condition
      resultLogger({
        result,
        condition,
        value
      })
    },
    toBe(condition) {
      result = value === condition
      resultLogger({
        result,
        condition,
        value
      })
    },
    toNotBe(condition) {
      result = value !== condition
      resultLogger({
        result,
        condition,
        value
      })
    }
  }
}
