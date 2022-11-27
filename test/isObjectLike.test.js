import isObjectLike from '../src/isObjectLike.js';
import { expect } from 'chai';

describe("isObjectLike.js", () => {

    it("Should return false when used with a string", () => {
        expect(isObjectLike("testing")).to.equal(false);
    });

    it("Should return false when used with a boolean", () => {
        expect(isObjectLike(true)).to.equal(false);
    });

    it("Should return false when used with a number", () => {
        expect(isObjectLike(2.5)).to.equal(false);
    });

    it("Should return false when used with an integer", () => {
        expect(isObjectLike(1)).to.equal(false);
    });

    it("Should return true when used with an array", () => {
        const array = [0, 1];
        expect(isObjectLike(array)).to.equal(true);
    });

    it("Should return true when used with an object", () => {
        const object = {property: "value"};
        expect(isObjectLike(object)).to.equal(true);
    });

    it("Should return false when used with null", () => {
         expect(isObjectLike(null)).to.equal(false);
    });

    it("Should return false when used with undefined", () => {
        expect(isObjectLike(undefined)).to.equal(false);
    });

    it("Should return false when used with a function", () => {
        expect(isObjectLike(Function)).to.equal(false);
    });

    it("Should return false when used with a symbol", () => {
        const symbol = Symbol("symbol");
        expect(isObjectLike(symbol)).to.equal(false);
    });
        
});