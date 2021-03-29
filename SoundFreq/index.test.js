const soundFrequency = require('./index')

var track1 = [30, 40, 50, 1000, 1200, 300];
var modifiedTrack1 = [40, 40, 50, 1000, 1000, 300];
var modifiedTrack2 = [50, 50, 50, 900, 900, 300];

defaultMin = 40;
defaultMax = 1000;

bandMin = 50;
bandMax = 900;

describe('soundtrack1 using default min, max', () => {
  it('should change 30 to 40 and 1200 to 1000', ()=> {
    expect(soundFrequency(track1)).toEqual(modifiedTrack1);
  })
});

describe('soundtrack1 using different min, max', () => {
  it('should change 30 to 50 and 1200 to 900', ()=> {
    expect(soundFrequency(track1, bandMin, bandMax)).toEqual(modifiedTrack2);
  })
});

