/**Complete the solution so that the function will break up camel casing, using a space between words.

 Example
 solution('camelCasing') // => should return 'camel Casing'**/

function solution(string) {
    var array = string.split('');
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i].toUpperCase()) {
            array[i] = ' ' + array[i];
        }
    }
    return array.join('');
}