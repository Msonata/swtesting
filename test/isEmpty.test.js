import isEmpty from '../src/isEmpty.js';
import { expect } from 'chai';
import isBuffer from '../src/isBuffer.js';

describe('isEmpty.js', () =>
{
  describe('Normal inputs', () =>
  {
    describe('With empty collections', () =>
    {
      it("Should determine an empty array is empty", () =>
      {
        expect(isEmpty([])).to.equal(true);
      });
    
      it("Should determine an empty map is empty", () =>
      {
        expect(isEmpty(new Map())).to.equal(true);
      });
    
      it("Should determine an empty set is empty", () =>
      {
        expect(isEmpty(new Set())).to.equal(true);
      });
    
      it("Should determine an empty object is empty", () =>
      {
        expect(isEmpty({})).to.equal(true);
      });

      it("Should determine an empty string is empty", () =>
      {
        expect(isEmpty("")).to.equal(true);
      });

      it("Should determine an empty prototype is empty", () =>
      {
        expect(isEmpty(Object.prototype)).to.equal(true);
      });

      it("Should determine an empty buffer is empty", () =>
      {
        expect(isEmpty(Buffer.alloc(0))).to.equal(true);
      });

      it("Should determine an empty typed array is empty", () =>
      {
        expect(isEmpty(new Uint8Array())).to.equal(true);
      });

      it("Should determine an empty arguments is empty", () =>
      {
        function Test()
        {
          expect(isEmpty(arguments)).to.equal(true);
        };

        Test();
      });
    });

    describe('With non-empty collections', () =>
    {
      it("Should determine a non-empty array is not empty", () =>
      {
        expect(isEmpty([1])).to.equal(false);
      });
    
      it("Should determine a non-empty map is not empty", () =>
      {
        let map = new Map();
        map.set(1, 1);

        expect(isEmpty(map)).to.equal(false);
      });
    
      it("Should determine a non-empty set is not empty", () =>
      {
        let set = new Set();
        set.add(1);

        expect(isEmpty(set)).to.equal(false);
      });
    
      it("Should determine a non-empty object is not empty", () =>
      {
        expect(isEmpty({ 'test': 1 })).to.equal(false);
      });

      it("Should determine a non-empty string is not empty", () =>
      {
        expect(isEmpty("test")).to.equal(false);
      });

      it("Should determine a non-empty prototype is not empty", () =>
      {
        function Test() { }

        Test.prototype.testFunction = () => {};

        expect(isEmpty(Test.prototype)).to.equal(false);
      });

      it("Should determine a non-empty buffer is not empty", () =>
      {
        expect(isEmpty(Buffer.alloc(5))).to.equal(false);
      });

      it("Should determine a non-empty typed array is not empty", () =>
      {
        expect(isEmpty(new Uint8Array([1, 2, 3]))).to.equal(false);
      });

      it("Should determine a non-empty arguments is not empty", () =>
      {
        function Test(test1, test2, test3)
        {
          expect(isEmpty(arguments)).to.equal(false);
        }

        Test(1, 2, 3);
      });
    });
  });

  describe('Unusual inputs', () =>
  {
    it("Should determine a boolean is empty", () =>
    {
      expect(isEmpty(true)).to.equal(true);
    });

    it("Should determine an integer is empty", () =>
    {
      expect(isEmpty(1)).to.equal(true);
    });

    it("Should determine a float is empty", () =>
    {
      expect(isEmpty(1.1)).to.equal(true);
    });

    it("Should determine null is empty", () =>
    {
      expect(isEmpty(null)).to.equal(true);
    });

    it("Should determine undefined is empty", () =>
    {
      expect(isEmpty(undefined)).to.equal(true);
    });

    it("Should determine a function is empty", () =>
    {
      expect(isEmpty(() => { })).to.equal(true);
    });
  });
});