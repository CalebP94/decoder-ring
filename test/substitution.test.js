// Write your tests here!
const { expect } = require("chai");
const { substitution }= require("../src/substitution");

describe("subsitution", () => {
    it('"message" should be encoded as "ykrrpik"', () => {
    const expected = 'ykrrpik';
    const alphabet = "plmoknijbuhvygctfxrdzeswaq"
    const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
    expect(alphabet).to.have.length(26);
    expect(actual).to.equal(expected);
    });
});

describe("subsitution", () => {
    it('"returns false if given alphabet does not have 26 letters', () => {
    const alphabet = "plmoknijbuhvygc"
    const actual = substitution("message", alphabet);
    expect(actual).to.be.false;
    });
});

describe("subsitution", () => {
    it('returns false if there are duplicate letters in alphabet', () => {
    const alphabet = "abcabcabcabcabcabcabcabcyz"
    const actual = substitution("message", alphabet);
    expect(actual).to.be.false;
    });
});

describe("subsitution", () => {
    it('should maintain spaces in input parameter', () => {
    const expected = 'elp xhm xf mbymwwmfj dne'
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution("You are an excellent spy", alphabet);
    expect(alphabet).to.have.length(26);
    expect(actual).to.equal(expected);
    });
});

describe("subsitution", () => {
    it('"a message" should encode the same value as "A Message"', () => {
    const expected = 'p ykrrpik'
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution("a message", alphabet);
    const actualII = substitution("A message", alphabet);
    expect(alphabet).to.have.length(26);
    expect(actual).to.equal(expected);
    expect(actualII).to.equal(expected);
    });
});
