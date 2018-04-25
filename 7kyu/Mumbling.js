/**This time no story, no theory. The examples below show you how to write function accum:

 Examples:

 accum("abcd");    // "A-Bb-Ccc-Dddd"
 accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 accum("cwAt");    // "C-Ww-Aaa-Tttt"
 The parameter of accum is a string which includes only letters from a..z and A..Z.**/

function accum(s) {
    var arr = s.split('');
    var repeatedArr = [];
    for (var i = 0; i < arr.length; i++) {
        repeatedArr.push(arr[i].repeat(i + 1).toLowerCase());
    }
    var changeFirstLetter = repeatedArr.map(function(item) {
        return (item.charAt(0).toUpperCase() + item.slice(1));
    });
    return changeFirstLetter.join('-');
}