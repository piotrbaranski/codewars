/**A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

 Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.**/

function isPangram(string) {
    var alphabet = function () {
        var alphabetArray = [];
        for (var i = 65; i < 91; i++) {
            alphabetArray.push(String.fromCodePoint(i));
        }
        return alphabetArray;
    };
    var stringToArr = string.toUpperCase().split('').sort();
    var filteredString = stringToArr.filter(function (item, index) {
        return stringToArr.indexOf(item) === index;
    });
    return alphabet().every(elem => filteredString.indexOf(elem) > -1);
}