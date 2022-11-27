import isEmpty from '../src/isEmpty.js';
import { expect } from 'chai';

describe('isEmpty.js', () =>
{
  describe('Positive tests', () =>
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
    });
  });

  describe('Negative tests', () =>
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