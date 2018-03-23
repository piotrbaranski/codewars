/**Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

    the returned string should only contain lowercase letters**/

function kebabize(str) {
    var array = str.split('').filter(function(item) {return isNaN(item)})
    for (var i = 0; i < array.length; i++) {
        if (array[0] === array[0].toUpperCase()) {
            array[i] = array[i].toLowerCase()
        }
        if (array[i] === array[i].toUpperCase() && i !== 0) {
            array[i] = '-' + array[i].toLowerCase()
        }
    }
    return array.join('');
}