/**Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

 Note: a and b are not ordered!**/

function GetSum(a, b) {
    if (a === b) {
        return a;
    } else {
        var z = a;
        var x = b;
        var array = [];
        if (a < b) {
            while (z <= b) {
                array.push(z);
                z++;
            }
        } else {
            while (x <= a) {
                array.push(x);
                x++;
            }
        }
        return array.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
    }
}