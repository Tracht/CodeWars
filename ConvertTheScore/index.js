const score1 = "The score is four nil";
const score2 = "new score: two three";
const score3 = "two two";
const score4 = "Arsenal just conceded another goal, two nil";

const convertTheScore = (string) => {

    stringArray = string.split(" "); // ["the", "score", "is", "four", "nil"];
    score = stringArray.slice(-2); // ["four", "nil"]

    const dictionary = {
        "nil": 0, "zero" : 0, "one": 1, "two": 2, "three": 3, "four" : 4, 
        "five": 5, "six" : 6, "seven" : 7, "eight": 8, "nine" : 9
    }

    const newScore = score.map(item => {
        const newValue = dictionary[item];
        return item = newValue;
    });

    return newScore;

}

module.exports = convertTheScore;
  