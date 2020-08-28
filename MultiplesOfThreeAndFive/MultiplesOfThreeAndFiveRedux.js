function getSumOfNumberUsingMultiplesOfThreeAndFive(number){ 

  function getSumOfMultiple(multiple, number){
    n = Math.floor((number-1)/multiple);
    sumOfMultiple = ((multiple * n) / 2) * (1 + n)
    return sumOfMultiple
  };

  var sumOfMultiplesThreeAndFive = getSumOfMultiple(3, number) + getSumOfMultiple(5, number);
  var sumOfCommonMultipleOfThreeAndFive = getSumOfMultiple(15, number);

  return sumOfMultiplesThreeAndFive - sumOfCommonMultipleOfThreeAndFive

}

module.exports = getSumOfNumberUsingMultiplesOfThreeAndFive;

