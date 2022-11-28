import toNumber from '../src/toNumber.js';
import { expect } from 'chai';

describe('toNumber.js', () =>
{
  describe('Positive tests', () =>
  {
    it("Should work with integers", () =>
    {
      expect(toNumber(1)).to.equal(1);
    });
    
    it("Should work with very large positive integers", () =>
    {
      expect(toNumber(Number.MAX_SAFE_INTEGER)).to.equal(Number.MAX_SAFE_INTEGER);
    });

    it("Should work with very large negative integers", () =>
    {
      expect(toNumber(Number.MIN_SAFE_INTEGER)).to.equal(Number.MIN_SAFE_INTEGER);
    });

    it("Should work with floats", () =>
    {
      expect(toNumber(1.0)).to.equal(1.0);
    });

    it("Should work with very small float", () =>
    {
      expect(toNumber(0.000000000001)).to.equal(0.000000000001);
    });

    it("Should work with positive infinity", () =>
    {
      expect(toNumber(Infinity)).to.equal(Infinity);
    });

    it("Should work with negative infinity", () =>
    {
      expect(toNumber(-Infinity)).to.equal(-Infinity);
    });

    it("Should work with NaN", () =>
    {
      expect(toNumber(NaN)).to.be.NaN;
    });

    it("Should work with decimal strings", () =>
    {
      expect(toNumber("1.0")).to.equal(1.0);
    });

    it("Should work with decimal strings with whitespace", () =>
    {
      expect(toNumber("   1.0   \n  \r")).to.equal(1.0);
    });

    it("Should work with very large positive decimal strings", () =>
    {
      expect(toNumber("9007199254740991")).to.equal(Number.MAX_SAFE_INTEGER);
    });

    it("Should work with very large negative decimal strings", () =>
    {
      expect(toNumber("-9007199254740991")).to.equal(Number.MIN_SAFE_INTEGER);
    });

    it("Should work with very small decimal strings", () =>
    {
      expect(toNumber("0.000000000001")).to.equal(0.000000000001);
    });

    it("Should work with positive infinity string", () =>
    {
      expect(toNumber("Infinity")).to.equal(Infinity);
    });

    it("Should work with negative infinity string", () =>
    {
      expect(toNumber("-Infinity")).to.equal(-Infinity);
    });

    it("Should work with NaN string", () =>
    {
      expect(toNumber("NaN")).to.be.NaN;
    });

    it("Should work with hexadecimal strings", () =>
    {
      expect(toNumber("0xFF")).to.equal(255);
    });

    it("Should work with binary strings", () =>
    {
      expect(toNumber("0b11111111")).to.equal(255);
    });

    it("Should work with octal strings", () =>
    {
      expect(toNumber("0o377")).to.equal(255);
    });
  });

  describe('Negative tests', () =>
  {
    it("Should return NaN with non-number strings", () =>
    {
      expect(toNumber("test")).to.be.NaN;
    });

    it("Should throw with booleans", () =>
    {
      expect(() => { toNumber(true); }).to.throw;
    });

    it("Should throw with objects", () =>
    {
      expect(() => { toNumber({}); }).to.throw;
    });

    it("Should throw with arrays", () =>
    {
      expect(() => { toNumber([]); }).to.throw;
    });

    it("Should throw with functions", () =>
    {
      expect(() => { toNumber(() => { }); }).to.throw;
    });

    it("Should throw with null", () =>
    {
      expect(() => { toNumber(null); }).to.throw;
    });

    it("Should throw with undefined", () =>
    {
      expect(() => { toNumber(undefined); }).to.throw;
    });
  });
});