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