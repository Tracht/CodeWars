function getSum(total, num) {
    return total + num; 
}

function sumArrayWithReduce(array, cb){
    return array.reduce(cb, 0);
}

sumArrayWithReduce([1,2,3], getSum);

module.exports = {
    sumArrayWithReduce,
    getSum
};
