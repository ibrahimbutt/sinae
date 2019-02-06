const sinae = require('../index')
const describe = sinae.describe
const it = sinae.it
const expect = sinae.expect

describe('Sinae Tests', () => {
  it('runs a test and prints result', () => {
    expect(1).toEqual(1)
  })

  it('shows on fail what was expected and returned', () => {
    expect(1).toEqual(2)
  })
})
