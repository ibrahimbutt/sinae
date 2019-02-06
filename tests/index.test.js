const sinae = require('../index')
const describe = sinae.describe
const it = sinae.it
const expect = sinae.expect

describe('Sinae Tests', () => {
  it('runs a test and prints result', () => {
    expect(1).toEqual(1)
  })
})
