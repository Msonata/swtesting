import filter from '../src/filter.js';
import { expect } from 'chai';

describe('filter.js', () =>
{
  describe('Positive tests', () =>
  {
    it("Should work with the example given in the documentation", () =>
    {
      const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }];

      expect(filter(users, ({ active }) => active)).to.deep.equal([users[0]]);
    });

    it("Should work with a complex predicate", () =>
    {
      const users = [
      { 'user': 'barney', 'active': true, 'age': 52 },
      { 'user': 'fred',   'active': false, 'age': 31},
      { 'user': 'simon',  'active': true, 'age': 24},
      { 'user': 'alicia', 'active': true, 'age': 32},
      { 'user': 'amanda', 'active': false, 'age': 30}];

      expect(filter(users, ({ user, active, age }) =>
        active && age < 40 && user[0] == 'a')).to.deep.equal([users[3]]);
    });

    it("Should return all the objects if the predicate is always truthy", () =>
    {
      const users = [
      { 'user': 'barney', 'active': true, 'age': 52 },
      { 'user': 'fred',   'active': false, 'age': 31},
      { 'user': 'simon',  'active': true, 'age': 24},
      { 'user': 'alicia', 'active': true, 'age': 32},
      { 'user': 'amanda', 'active': false, 'age': 30}];

      expect(filter(users, ({ age }) => age < 60)).to.deep.equal(users);
    });

    it("Should return an empty array if the predicate is never truthy", () =>
    {
      const users = [
      { 'user': 'barney', 'active': true, 'age': 52 },
      { 'user': 'fred',   'active': false, 'age': 31},
      { 'user': 'simon',  'active': true, 'age': 24},
      { 'user': 'alicia', 'active': true, 'age': 32},
      { 'user': 'amanda', 'active': false, 'age': 30}];
      
      expect(filter([], ({ age }) => age > 20)).to.deep.equal([]);
    });

    it("Should return an empty array for an empty array", () =>
    {
      expect(filter([], () => true)).to.deep.equal([]);
      expect(filter([], () => false)).to.deep.equal([]);
    });

    it("Should work on an array with 1000000 elements", () =>
    {
        let even = [];
        let odd = [];

        for (let i = 0; i < 500000; i++)
        {
            even.push({ 'index': i * 2, 'value': true });
            odd.push({ 'index': i * 2 + 1, 'value': false });
        }

        let combined = [];

        for (let i = 0; i < 500000; i++)
        {
            combined.push(even[i]);
            combined.push(odd[i]);
        }

        expect(filter(combined, ({ value }) => value)).to.deep.equal(even);
        expect(filter(combined, ({ value }) => !value)).to.deep.equal(odd);
    });
  });

  describe('Negative tests', () =>
  {
    describe('Invalid array', () =>
    {
      it("Should throw if the array is null", () =>
      {
        expect(() => filter(null, () => true)).to.throw;
      });
    
      it("Should throw if the array is undefined", () =>
      {
        expect(() => filter(undefined, () => true)).to.throw;
      });
    
      it("Should throw if the array is an object", () =>
      {
        expect(() => filter({}, () => true)).to.throw;
      });
  
      it("Should throw if the array is an integer", () =>
      {
        expect(() => filter(1, () => true)).to.throw;
      });
    
      it("Should throw if the array is a float", () =>
      {
        expect(() => filter(1.0, () => true)).to.throw;
      });
  
      it("Should throw if the array is NaN", () =>
      {
        expect(() => filter(NaN, () => true)).to.throw;
      });
  
      it("Should throw if the array is a string", () =>
      {
        expect(() => filter("test", () => true)).to.throw;
      });
  
      it("Should throw if the array is a boolean", () =>
      {
        expect(() => filter(true, () => true)).to.throw;
        expect(() => filter(false, () => true)).to.throw;
      });
  
      it("Should throw if the array is a function", () =>
      {
        expect(() => filter(() => { }, () => true)).to.throw;
      });
    });

    describe('Invalid predicate', () =>
    {
      it("Should throw if the predicate is null", () =>
      {
        expect(() => filter([], null)).to.throw;
      });
    
      it("Should throw if the predicate is undefined", () =>
      {
        expect(() => filter([], undefined)).to.throw;
      });
    
      it("Should throw if the predicate is an object", () =>
      {
        expect(() => filter([], {})).to.throw;
      });
  
      it("Should throw if the predicate is an integer", () =>
      {
        expect(() => filter([], 1)).to.throw;
      });
    
      it("Should throw if the predicate is a float", () =>
      {
        expect(() => filter([], 1.0)).to.throw;
      });
  
      it("Should throw if the predicate is NaN", () =>
      {
        expect(() => filter([], NaN)).to.throw;
      });
  
      it("Should throw if the predicate is a string", () =>
      {
        expect(() => filter([], "test")).to.throw;
      });
  
      it("Should throw if the predicate is a boolean", () =>
      {
        expect(() => filter([], true)).to.throw;
        expect(() => filter([], false)).to.throw;
      });
  
      it("Should throw if the predicate is an array", () =>
      {
        expect(() => filter([], [])).to.throw;
      });
    });
  });
});