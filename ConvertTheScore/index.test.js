const convertTheScore = require('./index');

const score1 = "The score is four nil";
const score2 = "new score: two three";
const score3 = "two two";
const score4 = "Arsenal just conceded another goal, two nil";

describe("The score is four nil", () => {
    it("returns [4,0]", () => {
        expect(convertTheScore(score1)).toEqual([4,0]);
    });
});

describe("new score: two three", () => {
    it("returns [2,3]", () => {
        expect(convertTheScore(score2)).toEqual([2,3]);
    });
});

describe("two two", () => {
    it("returns [2,2]", () => {
        expect(convertTheScore(score3)).toEqual([2,2]);
    })
});

describe("Arsenal just conceded another goal, two nil", () => {
    it("returns [2,0]", () => {
        expect(convertTheScore(score4)).toEqual([2,0]);
    })
});