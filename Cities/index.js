const cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006},
];

// 1. WRITE A FUNCTION THAT SORTS CITIES BY NAME
const sortCities = (array, sortFunction) => {
    return array.sort(sortFunction);
};
const sortAtoZ = (a, b) => {
    var memberA = a.name;
    var memberB = b.name;
    return memberA < memberB ? -1 : memberA > memberB ? 1 : 0;
}
const sortZtoA = (a, b) => {
    return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
}
sortCities(cities, sortAtoZ);
sortCities(cities, sortZtoA);



// 2. WRITE A FUNCTION THAT RETURNS BIG CITIES (>2.5m)
const ascPopulation = (a, b) => a.population - b.population;
const descPopulation = (a, b) => b.population - a.population;

const isBigCity = (e) => { return e.population > 2500000 };

const bigCitites = (arrayOfObjects, cb) => {
    return arrayOfObjects.filter(cb);
}

bigCitites(cities, isBigCity).sort(ascPopulation);
bigCitites(cities, isBigCity).sort(descPopulation);



// 3. WRITE A FUNCTION THAT RETURNS SMALL CITIES (<2.5m)
const isSmallCity = (e) => { return e.population < 2500000 };

const smallCities = (arrayOfObjects, cb) => {
    return arrayOfObjects.filter(cb);
}

smallCities(cities, isSmallCity).sort(ascPopulation);
smallCities(cities, isSmallCity).sort(descPopulation);



module.exports = {
    sortCities,
    sortAtoZ,
    ascPopulation,
    descPopulation,
    sortZtoA,
    isSmallCity,
    isBigCity,
    bigCitites,
    smallCities,
};