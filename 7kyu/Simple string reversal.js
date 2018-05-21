/**In this Kata, we are going to reverse a string while maintaining spaces.

 For example:

 solve("our code") = "edo cruo"
 -- Normal reversal without spaces is "edocruo".
 -- However, there is a space after the first three characters, hence "edo cruo"

 solve("your code rocks") = "skco redo cruoy"
 solve("codewars") = "srawedoc"
 More examples in the test cases. All input will be lower case letters and in some cases spaces.

 Good luck!**/

function solve(str) {
    var result = str.split(' ').join('').split('').reverse();
    str.split('').map(function (item, index) {
        if (item === ' ') {
            result.splice(index, 0, ' ');
        }
    });
    return result.join('');
}

console.log(solve("i love codewars"));
