/**Your Job
 Find the sum of all multiples of n below m

 Keep in Mind
 n and m are natural numbers (positive integers)
 m is excluded from the multiples**/

function sumMul(n, m) {
    var result = 0;
    var x = n;
    if (n >= m) {
        return 'INVALID'
    } else {
        while (x <= m) {
            result += x;
            x = x + n;
        }
    }
    return result
}