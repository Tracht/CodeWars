// Given an array of integers (representing sound frequencies), 
// return a new array that brings the values into the specified range, 
// where the default range is 40 min and 1000 max, 
// but these values can be amended.

const soundFrequency = (track, minFreq = 40, maxFreq = 1000) => {

  var newTrack = [];

  track.map((element) => {
    if ( element < minFreq ) { 
      newTrack.push(element = minFreq); 
    } else if ( element > maxFreq ) { 
      newTrack.push(element = maxFreq); 
    } else { 
      newTrack.push(element) 
    }
  })

  return newTrack;

}

module.exports = soundFrequency;