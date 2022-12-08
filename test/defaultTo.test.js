import defaultTo from '../src/defaultTo.js';
import { expect } from 'chai';

describe("defaultTo.js", () => {

    describe("Should return the default value", () =>{

        it("Should return the default value when the value is null", () => {
            expect(defaultTo(null, 10)).to.equal(10);
        });

        it("Should return the default value when the value is NaN", () => {
            expect(defaultTo(NaN, 10)).to.equal(10);
        });

        it("Should return the default value when the value is undefined", () => {
            expect(defaultTo(undefined, 10)).to.equal(10);
        });

        it("Should return null as the default value when the value is null", () => {
            expect(defaultTo(null, null)).to.equal(null);
        });

    });

    describe("Should return the inputted value", () =>{

        it("Should return the value when the value is an integer", () => {
            expect(defaultTo(10, 100)).to.equal(10);
        });

        it("Should return the value when the value is 0", () => {
            expect(defaultTo(0, 100)).to.equal(0);
        });

        it("Should return the value when the value is an number", () => {
            expect(defaultTo(2.52, 100)).to.equal(2.52);
        });

        it("Should return the value when the value is a string", () => {
            expect(defaultTo("testing", 100)).to.equal("testing");
        });

        it("Should return the value when the value is a boolean", () => {
            expect(defaultTo(true, 100)).to.equal(true);
        });

        it("Should return the value when the value is an array", () => {
            const array = [0, 1];
            expect(defaultTo(array, 100)).to.equal(array);
        });

        it("Should return the value when the value is an object", () => {
            const object = {property: "value"};
            expect(defaultTo(object, 100)).to.equal(object);
        });

        it("Should return the value when the value is a function", () => {
            expect(defaultTo(Function, 100)).to.equal(Function);
        });

    });
 
});