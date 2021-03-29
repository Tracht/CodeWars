// Given the number of Facebook likes, display the correct message.

const facebookLikes = (array) => {
  if (array.length === 0) return 'No one likes this';
  
  if ( array.length === 1) {
    return array[0] + " likes this"
  }
  
  if (array.length === 2 ) {
    return array.join(" and ") + " like this"
  }

  if (array.length === 3 ) {
    return array[0] + ", " + array.slice(1,3).join(" and ") + " like this"
  }

  else {
    return array.slice(0,2).join(", ") + " and " + (array.length - 2) +  " others like this"
  }

}

module.exports = facebookLikes;