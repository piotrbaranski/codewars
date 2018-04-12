/**Your task is to write function findSum.

 Upto and including n, this function will return the sum of all multiples of 3 and 5.

 For example:

 findSum(5) should return 8 (3 + 5)

 findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)**/

function findSum(n) {
    var newTable = [];
    for (var i = 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            newTable.push(i);
        }
    }
    return newTable.reduce(function(prevVal, currVal) {
        return prevVal + currVal;
    }, 0);
}