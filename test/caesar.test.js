// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");



describe("caesar", () => {
    it("If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.", () => {
    const actual = caesar("thinkful");
    const actualII = caesar("thinkful", 0);
    const actualIII = caesar("thinkful", -26);
    const actualIV = caesar("thinkful", 26);
    expect(actual).to.be.false;
    expect(actualII).to.be.false;
    expect(actualIII).to.be.false;
    expect(actualIV).to.be.false;
    });
});

describe("caesar", () => {
    it('"Thinkful" should shift 3 and encode as "wklqnixo", changing capital to lowercase', () => {
    const expected = 'wklqnixo';
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
    });
});

describe("caesar", () =>{
    it('"wklqnixo" should shift 3 and decode as "thinkful"', () => {
        const expected = 'wklqnixo';
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
        });
});

describe("caesar", () => {
    it('It maintains spaces and other nonalphabetic symboles in the message, before and after decoding. "This is a secret message!" encodes as "bpqa qa i amkzmb umaaiom!"', () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
    });
});

describe("caesar", () => {
    it('It maintains spaces and other nonalphabetic symboles in the message, before and after decoding. "BPQA qa I amkzmb umaaiom!" decodes as "this is a secret message!"', () => {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
    expect(actual).to.equal(expected);
    });
});




