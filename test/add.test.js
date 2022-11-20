import add from '../src/add.js';
import { expect } from 'chai';

describe('add.js', () =>
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
  it("Should throw when adding together any integer -10000 to 10000 with a string", () =>
    {
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add("hello", i) }).to.throw;
      }
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add(i, "hello") }).to.throw;
      }
   });
  it("Should throw when adding together any integer -10000 to 10000 with a boolean", () =>
    {
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add(true, i) }).to.throw;
      }
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add(i, true) }).to.throw;
      }
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add(false, i) }).to.throw;
      }
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add(i, false) }).to.throw;
      }
   });
  it("Should throw when adding together any integer -10000 to 10000 with null", () =>
    {
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add(null, i) }).to.throw;
      }
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add(i, null) }).to.throw;
      }
   });
  it("Should throw when adding together any integer -10000 to 10000 with an object", () =>
    {
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add({}, i) }).to.throw;
      }
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add(i, {}) }).to.throw;
      }
   });
  it("Should throw when adding together any integer -10000 to 10000 with an array", () =>
    {
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add([], i) }).to.throw;
      }
      for (let i = -10000; i <= 10000; i++)
      {
        expect(() => { add(i, []) }).to.throw;
      }
   });
});