//Only change code below this line

function myMutation(arr) {
    var newString, str1, str2;
    newString = "";
    str1 = arr[0].toLowerCase();
    str2 = arr[1].toLowerCase();
    for (i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) < 0) return false;
    }
    return true;
}
//Only change code above this line

console.log(myMutation(["hello", "hey"]));
module.exports = myMutation;