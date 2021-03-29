function getSumOfNumberUsingMultiplesOf3and5(number){ 

  function getSumOfMultiple(multiple, number){
    var n = Math.floor((number-1)/multiple);
    var sumOfMultiple = ((multiple * n) / 2) * (1 + n)
    return sumOfMultiple
  };

  var sumOfMultiplesThreeAndFive = getSumOfMultiple(3, number) + getSumOfMultiple(5, number);
  var sumOfCommonMultipleOfThreeAndFive = getSumOfMultiple(15, number);

  return sumOfMultiplesThreeAndFive - sumOfCommonMultipleOfThreeAndFive

}

module.exports = getSumOfNumberUsingMultiplesOf3and5;

