//Only change code below this line

function multiplyArrayFunction(arr) {

    var i, j;
    var product = 0;
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
            if (i == 0 && j == 0) {
                product = arr[i][j];
            } else {
                product *= arr[i][j];
            }
        }
    }
    return [product, sum];
}
//Only change code above this line

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));

module.exports = multiplyArrayFunction;