/**Complete the method which accepts an array of integers, and returns one of the following:

 "yes, ascending" - if the numbers in the array are sorted in an ascending order
 "yes, descending" - if the numbers in the array are sorted in a descending order
 "no" - otherwise
 You can assume the array will always be valid, and there will always be one correct answer.**/

function isSortedAndHow(array) {
    var isAscending = array.every(function (x, i) {
        return i === 0 || x >= array[i - 1];
    });
    var isDescending = array.every(function (x, i) {
        return i === 0 || x <= array[i - 1];
    });
    if (isAscending === true) {
        return 'yes, ascending';
    }
    if (isDescending === true) {
        return 'yes, descending';
    }
    if (isAscending === false && isDescending === false) {
        return 'no';
    }
}