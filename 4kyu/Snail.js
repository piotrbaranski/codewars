/**Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

 array = [[1,2,3],
 [4,5,6],
 [7,8,9]]
 snail(array) #=> [1,2,3,6,9,8,7,4,5]
 For better understanding, please follow the numbers of the next array consecutively:

 array = [[1,2,3],
 [8,9,4],
 [7,6,5]]
 snail(array) #=> [1,2,3,4,5,6,7,8,9]

 NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

 NOTE 2: The 0x0 (empty matrix) is represented as [[]]**/

snail = function(array) {
    var result = [];
    if (array.length === 0 || array[0] == false) {
        return result;
    }
    if (array.length === 1 && array[0] == true) {
        return array[0];
    }
    if (array.length === 1) {
        return parseInt(array);
    }
    var max = array[0].length - 1;
    for (var i = 0; i <= max; i++) {
        result.push(array[0][i]);
    }
    for (var i = 1; i < max; i++) {
        result.push(array[i][max]);
    }
    for (var i = max; i >= 0; i--) {
        result.push(array[max][i]);
    }
    for (var i = max - 1; i > 0; i--) {
        result.push(array[i][0]);
    }
    var subarray = [];
    for (var i = 1; i < max; i++) {
        subarray.push(array[i].splice(1, max - 1));
    }
    result = result.concat(snail(subarray));

    return result;
}