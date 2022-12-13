import add from '../src/add.js';
import { expect } from 'chai';

describe('add.js', () =>
{
  describe('Normal addition', () =>
  {
    it("Should correctly calculate all sums with integers -100 to 100", () =>
    {
      for (let i = -100; i <= 100; i++)
      {
        for (let j = -100; j <= 100; j++)
        {
          expect(add(i, j)).to.equal(i + j);
        }
      }
    });

    it("Should correctly calculate all sums with floats -1e-10 to 1e-10 at intervals of 1e-12", () =>
    {
      for (let i = -1e-10; i <= 1e-10; i += 1e-12)
      {
        for (let j = -1e-10; j <= 1e-10; j += 1e-12)
        {
          expect(add(i, j)).to.equal(i + j);
        }
      }
    });

    it("Should correctly calculate all sums with integers -1e12 to 1e12 at intervals of 1e10", () =>
    {
      for (let i = -1e12; i <= 1e12; i += 1e10)
      {
        for (let j = -1e12; j <= 1e12; j += 1e10)
        {
          expect(add(i, j)).to.equal(i + j);
        }
      }
    });

    it("Should correctly calculate sum with very large positive integer", () =>
    {
      expect(add(Number.MAX_SAFE_INTEGER - 1, 1)).to.equal(Number.MAX_SAFE_INTEGER);
    });

    it("Should correctly calculate sum with very large negative integer", () =>
    {
      expect(add(Number.MIN_SAFE_INTEGER + 1, -1)).to.equal(Number.MIN_SAFE_INTEGER);
    });
  });

  describe('Unusual but valid addition', () =>
  {
    it("Should equal NaN when adding together any integer -10000 to 10000 with NaN", () =>
    {
      for (let i = -10000; i <= 10000; i++)
      {
        expect(add(i,NaN)).to.be.NaN;
      }
      for (let i = -10000; i <= 10000; i++)
      {
        expect(add(NaN,i)).to.be.NaN;
      }
    });

    it("Should equal positive infinity when adding together any integer -10000 to 10000 with positive infinity", () =>
    {
      for (let i = -10000; i <= 10000; i++)
      {
        expect(add(i,Number.POSITIVE_INFINITY)).to.equal(Number.POSITIVE_INFINITY);
      }
      for (let i = -10000; i <= 10000; i++)
      {
        expect(add(Number.POSITIVE_INFINITY,i)).to.equal(Number.POSITIVE_INFINITY);
      }
    });

    it("Should equal negative infinity when adding together any integer -10000 to 10000 with negative infinity", () =>
    {
      for (let i = -10000; i <= 10000; i++)
      {
        expect(add(i,Number.NEGATIVE_INFINITY)).to.equal(Number.NEGATIVE_INFINITY);
      }
      for (let i = -10000; i <= 10000; i++)
      {
        expect(add(Number.NEGATIVE_INFINITY,i)).to.equal(Number.NEGATIVE_INFINITY);
      }
    });

    it("Should equal NaN when adding together positive infinity with negative infinity", () =>
    {
      expect(add(Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)).to.be.NaN;
      expect(add(Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY)).to.be.NaN;
    });
  });
});