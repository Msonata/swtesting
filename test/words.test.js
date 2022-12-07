import words from '../src/words.js';
import { expect } from 'chai';

describe("words.js", () => {

        it("Should return the split words", () => {
            const string = "tupu, hupu, lupu";
            expect(words(string)).deep.equal(["tupu", "hupu", "lupu"]);
        });

        it("Should return the split words when different separators used", () => {
            const string = "tupu & hupu | lupu";
            expect(words(string)).deep.equal(["tupu", "hupu", "lupu"]);
        });

        it("Should return the split words when no spaces are used", () => {
            const string = "tupu&hupu|lupu";
            expect(words(string)).deep.equal(["tupu", "hupu", "lupu"]);
        });

        it("Should return the split words when spaces are used as separators", () => {
            const string = "The quick brown fox jumps over the lazy dog";
            expect(words(string)).deep.equal(string.split(" "));
        });

        it("Should return an empty array", () => {
            expect(words("")).deep.equal([]);
        });

        it("Should return an array with a single word", () => {
            expect(words("testing")).deep.equal(["testing"]);
        });

        it("Should return the split words with random characters as separators", () => {
            const string = ":¤¤one..(/#two..))#/ three";
            expect(words(string)).deep.equal(["one", "two", "three"]);
        });

        it("Should return the split words when some words contain numbers", () => {
            const string = "testing 123 testing123";
            expect(words(string)).deep.equal(["testing", "123", "testing123"]);
        });

        it("Should match words when a pattern is used", () => {
            const string = "tupu, hupu, & lupu";
            const pattern = "/[^, ]+/g";
            expect(words(string, pattern)).deep.equal(["tupu", "hupu", "&", "lupu"]);
        });
});