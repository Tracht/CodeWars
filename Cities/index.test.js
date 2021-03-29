const { 
    sortCities,
    sortAtoZ,
    ascPopulation,
    descPopulation,
    sortZtoA,
    isSmallCity,
    isBigCity,
    bigCitites,
    smallCities, } = require('./index');

const cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006},
];

const cities_AtoZ = [
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Philadelphia', population: 1526006},
];

const cities_ZtoA = [
    {name: 'Philadelphia', population: 1526006},
    {name: 'New York', population: 8175133},
    {name: 'Los Angeles', population: 3792621},
    {name: 'Houston', population: 2099451},
    {name: 'Chicago', population: 2695598},
];

const BigCities_LowtoHigh = [
    {name: 'Chicago', population: 2695598},
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
];

const BigCities_HighToLow = [
    {name: 'New York', population: 8175133},
    {name: 'Los Angeles', population: 3792621},
    {name: 'Chicago', population: 2695598},
];

const SmallCities_LowtoHigh = [
    {name: 'Philadelphia', population: 1526006},
    {name: 'Houston', population: 2099451},
];

const SmallCities_HighToLow = [
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006},
];

describe('Sort Cities', () => {
    it('should sort them from A to Z', () => {
      expect(sortCities(cities, sortAtoZ))
      .toEqual(cities_AtoZ);
    });

    it('should sort them from Z to A', () => {
        expect(sortCities(cities, sortZtoA))
        .toEqual(cities_ZtoA);
    });
  });

describe('Sort BIG Cities (> 2.5m)', () => {
    it('lowest to highest population', () => {
        expect(bigCitites(cities, isBigCity).sort(ascPopulation))
        .toEqual(BigCities_LowtoHigh);
    });

    it('highest to lowest population', () => {
        expect(bigCitites(cities, isBigCity).sort(descPopulation))
        .toEqual(BigCities_HighToLow);
    });
});

describe('Sort SMALL Cities (< 2.5m)', () => {
    it('lowest to highest population', () => {
        expect(smallCities(cities, isSmallCity).sort(ascPopulation))
        .toEqual(SmallCities_LowtoHigh);
    });

    it('highest to lowest population', () => {
        expect(smallCities(cities, isSmallCity).sort(descPopulation))
        .toEqual(SmallCities_HighToLow);
    });
});
