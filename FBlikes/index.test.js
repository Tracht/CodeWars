const facebookLikes = require('./index');

array1 = [];
array2 = ['Peter'];
array3 = ['Jacob', 'Alex'];
array4 = ['Jacob', 'Mark', 'Max'];
array5 = ['Alex', 'Jacob', 'Mark', 'Max'];
array6 = ['Kathy', 'Suzie', 'Alex', 'Jacob', 'Mark', 'Max', 'Jane', 'Bo', 'Su', 'Jo'];

describe("Empty array", () => {
  it("`No one likes this`", () => {
    expect(facebookLikes(array1)).toEqual(`No one likes this`);
  })
});

describe("One person likes it", () => {
  it("returns `Peter likes this`", () => {
    expect(facebookLikes(array2)).toEqual(`Peter likes this`);
  })
});

describe("Two people like it", () => {
  it("returns `Jacob and Alex like this`", () => {
    expect(facebookLikes(array3)).toEqual(`Jacob and Alex like this`);
  })
});

describe("Three people like it", () => {
  it("returns `Jacob, Mark and Max like this`", () => {
    expect(facebookLikes(array4)).toEqual(`Jacob, Mark and Max like this`);
  })
});

describe("Four people like it", () => {
  it("returns `Alex, Jacob and 2 others like this`", () => {
    expect(facebookLikes(array5)).toEqual(`Alex, Jacob and 2 others like this`);
  })
});

describe("10 people like it", () => {
  it("returns `Kathy, Suzie and 8 others like this`", () => {
    expect(facebookLikes(array6)).toEqual(`Kathy, Suzie and 8 others like this`);
  })
});