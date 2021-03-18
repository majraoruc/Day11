//Only change code below this line

function largestNumFromArray(arr) {

    var i, j;
    var maxNumArray = [];
    var maxTemp;
    for (i = 0; i < arr.length; i++) {
        maxTemp = arr[i][0];
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxTemp) {
                maxTemp = arr[i][j];
            }
        }
        maxNumArray.push(maxTemp);
    }
    return maxNumArray;
}
//Only change code above this line

console.log(largestNumFromArray([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

module.exports = largestNumFromArray;