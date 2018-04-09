/**Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

 For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
 // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
 // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number**/

function persistence(num) {
    if (num.toString().split('').length === 1) {
        return 0;
    } else {
        var outputArray = num.toString().split('');
        var resultOfMultiplying = num;
        var howManyTimesNeedsToLoop = num.toString().split('').length;
        var count = 0;
        while (howManyTimesNeedsToLoop >= 0 && outputArray.toString().split('').length !== 1) {
            outputArray = resultOfMultiplying.toString().split('').reduce(function (prevVal, currVal) {
                return prevVal * currVal;
            }, 1);
            howManyTimesNeedsToLoop = howManyTimesNeedsToLoop - 1;
            resultOfMultiplying = outputArray;
            count++
        }
        return count;
    }
}