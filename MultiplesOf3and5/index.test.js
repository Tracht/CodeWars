const getSumOfNumberUsingMultiplesOf3and5 = require('./index');

describe('getSumOfNumberUsingMultiplesOf3and5', () => {
  it('input of 20 returns a sum of 78', () => {
    expect(getSumOfNumberUsingMultiplesOf3and5(20)).toEqual(78);
  })
});

