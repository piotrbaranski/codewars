/**In this kata, you must create a digital root function.

 A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.**/

function digital_root(n) {
    var result = n;
    while (result.toString().length > 1) {
        var convertToArray = result.toString().split('');
        var makeArrayOfNumbers = convertToArray.map(function (item) { return Number(item)});
        result = makeArrayOfNumbers.reduce((prev, curr) => prev + curr)
    }
    return result;
}