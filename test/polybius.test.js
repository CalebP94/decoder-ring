// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it('"message" should be encoded as, "23513434112251"', () => {
    const expected = "23513434112251";
    const actual = polybius("message");
    expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it('"Message" should be encoded as, "23513434112251"', () => {
    const expected = "23513434112251";
    const actual = polybius("Message");
    expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it('"Hello world" should be encoded as, "3251131343 2543241341", spaces should be maintained', () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello world");
    expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it('"3251131343 2543241341" should be decoded as, "hello world", spaces should be maintained and all letters should be lower case.', () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);
    });
});


describe("polybius", () => {
    it('"4432423352125413" should be decoded as, "th(i/j)nkful", spaces should be maintained and all letters should be lower case.', () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.equal(expected);
    });
});

describe("polybius()", () => {
    it("should translate both 'i' and 'j' to 42", () => {
        const message = "jiggle";
        const actual = polybius(message);
        const expected = "424222221351";
  
        expect(actual).to.equal(expected);
      });
});


