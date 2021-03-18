//Only change code below this line

function splitArrayInGroups(arr, n) {
    var result = [];

    for (i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    result = result.slice(0);
    result.splice(n);
    return result;

}
//Only change code above this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
module.exports = splitArrayInGroups;

