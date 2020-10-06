const soundFrequency = require('./SoundFreq')

var track1 = [30, 40, 50, 1000, 1200, 300];
var modifiedTrack1 = [40, 40, 50, 1000, 1000, 300];

defaultMin = 40;
defaultMax = 1000;

describe('soundtrack1 using default min, max', () => {
  it('should change 30 to 40 and 1200 to 1000', ()=> {
    expect(soundFrequency(track1, defaultMin, defaultMax)).toEqual(modifiedTrack1);
  })
});

