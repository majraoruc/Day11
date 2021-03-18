//Only change code below this line

function myBouncer(arr) {
    var falsyValue;
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        falsyValue = Boolean(arr[i]);
        if (falsyValue === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//Only change code above this line

console.log(myBouncer([7, 'ate', false, "", 9]));
module.exports = myBouncer;

