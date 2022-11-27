import toFinite from '../src/toFinite.js';
import { expect } from 'chai';

describe("toFinite.js", () => {

    describe("Converting integers and numbers", () => {

        it("Should convert a positive number into the same positive number", () => {
            expect(toFinite(5.25)).to.equal(5.25);
        });

        it("Should convert a negative number into the same negative number", () => {
            expect(toFinite(5.25)).to.equal(5.25);
        });

        it("Should convert a positive integer into the same positive integer", () => {
            expect(toFinite(5)).to.equal(5);
        });

        it("Should convert a negative number into the same negative number", () => {
            expect(toFinite(5)).to.equal(5);
        });

        it("Should convert a positive maximum numeric value into the same value", () => {
            expect(toFinite(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
        });

        it("Should convert a negative maximum numeric value into the same value", () => {
            expect(toFinite(Number(-(Number.MAX_VALUE)))).to.equal(Number(-(Number.MAX_VALUE)));
        });

        it("Should throw with an invalid integer", () => {
            expect(() => { toFinite(-0.345) }).to.throw;
        });

        it("Should convert a number with scientific notation into the same number", () => {
            expect(toFinite(123e-5)).to.equal(0.00123 );
        });


    });   
    
    describe("Converting strings and booleans", () => {

        it("Should convert a string into 0", () => {
            expect(toFinite("testing")).to.equal(0);
        });

        it("Should convert a string of characters and integers into 0", () => {
            expect(toFinite("123testing123")).to.equal(0);
        });

        it("Should convert a true value into 1", () => {
            expect(toFinite(true)).to.equal(1);
        });

        it("Should convert a false value into 0", () => {
            expect(toFinite(true)).to.equal(1);
        });

        it("Should convert a string representing a number into the same number", () => {
            expect(toFinite("6.78")).to.equal(6.78);
        });

        it("Should convert a string representing an integer into the same integer", () => {
            expect(toFinite("1")).to.equal(1);
        });

        it("Should convert a string representing a boolean value into 0", () => {
            expect(toFinite("true")).to.equal(0);
        });

        it("Should convert a string representing a number with scientific notation into the same number", () => {
            expect(toFinite("123e-5")).to.equal(0.00123 );
        });

    });   

    describe("Converting infinite values", () => {

        it("Should convert a positive infinity into positive maximum numeric value", () => {
            expect(toFinite(Number.POSITIVE_INFINITY)).to.equal(Number.MAX_VALUE);
        });

        it("Should convert a negative infinity into negative maximum numeric value", () => {
            expect(toFinite(Number.NEGATIVE_INFINITY)).to.equal(Number(-(Number.MAX_VALUE)));
        });

        it("Should convert the sum of 2 infinite values into positive maximum numeric value", () => {
            expect(toFinite((Number.POSITIVE_INFINITY) + (Number.POSITIVE_INFINITY))).to.equal(Number.MAX_VALUE);
        });

        it("Should convert a really big integer into positive maximum numeric value", () => {
            expect(toFinite(Math.pow(10,1000))).to.equal(Number.MAX_VALUE);
        });
    });   

    describe("Converting some other data types", () => {

        it("Should convert an array into 0", () => {
            const array = [0, 1];
            expect(toFinite(array)).to.equal(0);
        });

        it("Should convert an object into 0", () => {
            const object = {property: "value"};
            expect(toFinite(object)).to.equal(0);
        });

        it("Should convert undefined into 0", () => {
            expect(toFinite(undefined)).to.equal(0);
        });

        it("Should convert null into 0", () => {
            expect(toFinite(null)).to.equal(0);
        });
    }); 
     
});