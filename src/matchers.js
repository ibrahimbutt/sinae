const resultLogger = require('./resultLogger')

module.exports = value => {
  return {
    toEqual(condition) {
      const result = value == condition
      resultLogger({
        result,
        condition,
        value
      })
    },
    toNotEqual(condition) {
      const result = value != condition
      resultLogger({
        result,
        condition,
        value
      })
    },
    toBe(condition) {
      const result = value === condition
      resultLogger({
        result,
        condition,
        value
      })
    },
    toNotBe(condition) {
      const result = value !== condition
      resultLogger({
        result,
        condition,
        value
      })
    },
    contains(condition) {
      const result = value.includes(condition)
      resultLogger({
        result,
        condition,
        value
      })
    },
    doesNotContain(condition) {
      const result = !value.includes(condition)
      resultLogger({
        result,
        condition: `to not contain ${condition}`,
        value
      })
    }
  }
}
