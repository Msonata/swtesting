import slice from '../src/slice.js';
import { expect } from 'chai';

describe('slice.js', () =>
{
  describe('Positive tests', () =>
  {
    /*it("Should work with the example given in the documentation", () =>
    {
      var array = [1, 2, 3, 4]

      expect(_.slice(array, 2)).to.deep.equal([3, 4]);
    });*/

    it("Should return the original array when slicing from beginning to end", () =>
    {
      let array = [1, 2, 3, 4];

      expect(slice(array, 0, array.length)).to.deep.equal(array);
    });

    it("Should return an empty array when the start and end position are the same", () =>
    {
      let array = [1, 2, 3, 4];

      expect(slice(array, 2, 2)).to.deep.equal([]);
    });

    it("Should return an empty array when the end position is before the start position", () =>
    {
      let array = [1, 2, 3, 4];

      expect(slice(array, 2, 0)).to.deep.equal([]);
    });

    it("Should work with negative indices", () =>
    {
        let array = [1, 2, 3, 4, 5, 6];

        expect(slice(array, -4, -2)).to.deep.equal([3, 4]);
    });


    it("Should work on an array with different data types", () =>
    {
        let array = [1, "banana", null, [], {}, true, 4.3];

        expect(slice(array, 1, 5)).to.deep.equal(["banana", null, [], {}]);
    });

    it("Should work on an array with 1000000 elements", () =>
    {
      let firstHalf = [];
      let secondHalf = [];

      for (let i = 0; i < 500000; i++)
      {
        firstHalf.push(i);
        secondHalf.push(i + 500000);
      }

      let combined = [];

      for (let i = 0; i < 500000; i++)
      {
        combined.push(firstHalf[i]);
      }

      for (let i = 0; i < 500000; i++)
      {
        combined.push(secondHalf[i]);
      }

      expect(slice(combined, 0, 500000)).to.deep.equal(firstHalf);
      expect(slice(combined, 500000, 1000000)).to.deep.equal(secondHalf);
    });
  });

  describe('Negative tests', () =>
  {
    it("Should throw if the start position is beyond the array size", () =>
    {
      let array = [1, 2, 3, 4];

      expect(() => slice(array, 5, 4)).to.throw;
    });

    it("Should throw if the end position is beyond the array size", () =>
    {
      let array = [1, 2, 3, 4];

      expect(() => slice(array, 3, 5)).to.throw;
    });

    it("Should throw if the array is null", () =>
    {
      expect(() => slice(null, 2)).to.throw;
    });

    it("Should throw if the array is undefined", () =>
    {
      expect(() => slice(undefined, 2)).to.throw;
    });

    it("Should throw if the array is an object", () =>
    {
      expect(() => slice({}, 2)).to.throw;
    });

    it("Should throw if the array is an integer", () =>
    {
      expect(() => slice(1, 2)).to.throw;
    });

    it("Should throw if the array is a float", () =>
    {
      expect(() => slice(1.0, 2)).to.throw;
    });

    it("Should throw if the array is a string", () =>
    {
      expect(() => slice("test", 2)).to.throw;
    });

    it("Should throw if the array is a boolean", () =>
    {
      expect(() => slice(true, 2)).to.throw;
      expect(() => slice(false, 2)).to.throw;
    });

    it("Should throw if the array is a function", () =>
    {
      expect(() => slice(() => {}, 2)).to.throw;
    });
  });
});