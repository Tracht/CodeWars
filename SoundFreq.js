const soundFrequency = (track, minFreq = 40, maxFreq = 1000) => {

  var min = minFreq; 
  var max = maxFreq; 
  newTrack = [];

  track.map((element) => {
    if ( element < min ) { 
      newTrack.push(element = min); 
    } else if ( element > max ) { 
      newTrack.push(element = max); 
    }  
    else {
      newTrack.push(element);
    }
  })

  return newTrack;

}

module.exports = soundFrequency;