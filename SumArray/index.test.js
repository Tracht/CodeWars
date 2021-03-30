const { sumArrayWithReduce, getSum } = require('./index');

const array1 = [1,2,3,4,5];
const array2 = [1];
const array3 = [4,5,6,7];

describe('[1,2,3,4,5]', () => {
    it('returns a sum of 15', () => {
      expect(sumArrayWithReduce(array1, getSum)).toEqual(15);
    })
});

describe('[1]', () => {
    it('returns a sum of 1', () => {
      expect(sumArrayWithReduce(array2, getSum)).toEqual(1);
    })
});

describe('[4,5,6,7]', () => {
    it('returns a sum of 22', () => {
      expect(sumArrayWithReduce(array3, getSum)).toEqual(22);
    })
});
  