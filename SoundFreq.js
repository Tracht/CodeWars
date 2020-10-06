const soundFrequency = (track, minFreq, maxFreq) => {

  var min = minFreq; 
  var max = maxFreq; 
  newTrack = [];

  // loop over track
  // if element < minFreq, then replace it
  // if element > maxFreq, then replace it

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