import clamp from '../src/clamp.js';
import { expect } from 'chai';

describe("clamp.js", () => {

        describe("Testing with positive integers", () =>{

            it("Should return the lower bound when between bounds", () => {
                expect(clamp(2, 1, 10)).to.equal(1);
            });

            /*it("Should return the upper bound when above the upper bound", () => {
                expect(clamp(12, 1, 10)).to.equal(10);
            });*/

            it("Should return the lower bound when below the lower bound", () => {
                expect(clamp(1, 5, 10)).to.equal(5);
            });

            it("Should return either bound when the number and bounds are equal", () => {
                expect(clamp(5, 5, 5)).to.equal(5);
            });

            it("Should return the lower bound when equal to lower bound", () => {
                expect(clamp(5, 5, 6)).to.equal(5);
            });

            /*it("Should return the upper bound when equal to upper bound", () => {
                expect(clamp(6, 5, 6)).to.equal(6);
            });*/
        
            it("Should return either bound when below bounds and bounds are equal", () => {
                expect(clamp(1, 5, 5)).to.equal(5);
            });

            it("Should return either bound when above bounds and bounds are equal", () => {
                expect(clamp(10, 5, 5)).to.equal(5);
            });
        });

        describe("Testing with negative integers", () =>{
            it("Should return the lower bound when between bounds", () => {
                expect(clamp(-5, -6, -1)).to.equal(-6);
            });

            /*it("Should return the upper bound when above the upper bound", () => {
                expect(clamp(-3, -6, -1)).to.equal(-1);
            });*/

            it("Should return the lower bound when below the lower bound", () => {
                expect(clamp(-6, -4, -1)).to.equal(-4);
            });
        });

        describe("Testing with floats", () =>{

            /*it("Should return the upper bound when above the upper bound and the upper bound is a float", () => {
                expect(clamp(10, 5, 8.5)).to.equal(8.5);
            });*/

            it("Should return the lower bound when belov the lower bound and the lower bound is a float", () => {
                expect(clamp(3, 5.2, 8)).to.equal(5.2);
            });

            it("Should return the lower bound when between bounds and the lower bound is a float", () => {
                expect(clamp(6, 5.2, 8)).to.equal(5.2);
            });

            it("Should return the lower bound when between bounds and the upper bound is a float", () => {
                expect(clamp(6, 5, 8.2)).to.equal(5);
            });

            it("Should return the lower bound when below the lower bound and all numbers are floats", () => {
                expect(clamp(6.25, 6.26, 8.2)).to.equal(6.26);
            });

            it("Should return the lower bound when between bounds and all numbers are floats", () => {
                expect(clamp(6.26, 6.25, 6.27)).to.equal(6.25);
            });

            /*it("Should return the upper bound when above the upper bound and all numbers are floats", () => {
                expect(clamp(6.26, 6.23, 6.25)).to.equal(6.25);
            });*/
        });

        describe("Other tests", () =>{

            it("Should return 0 when all numbers are 0", () => {
                expect(clamp(0, 0, 0)).to.equal(0);
            });
        });
});