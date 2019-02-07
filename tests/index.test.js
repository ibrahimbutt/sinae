const sinae = require('../index.js');
const describe = sinae.describe;
const it = sinae.it;
const expect = sinae.expect;

describe('Sinae Tests', () => {
  describe('scenarios', () => {
    it('runs a test and prints result', () => {
      expect(1).toEqual(1);
    });

    it('shows on fail what was expected and returned', () => {
      expect(1).toEqual(2);
    });
  });

  describe('non-strict equality', () => {
    it('can check equality', () => {
      expect(1).toEqual(1);
    });

    it('can check false equality', () => {
      expect(1).toNotEqual(2);
    });
  });

  describe('strict equality', () => {
    it('can check strict equality', () => {
      const array = [1];
      expect(array).toBe(array);
    });

    it('can check false strict equality', () => {
      expect([1]).toNotBe([1]);
    });
  });

  describe('inclusion', () => {
    it('can check if array contains', () => {
      expect([3, 2]).contains(2);
    });

    it('can check if array does not contain', () => {
      expect([3, 2]).doesNotContain(1);
    });
  });
});
