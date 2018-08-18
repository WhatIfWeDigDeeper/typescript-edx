import ArrayUtilities from "./arrayUtils.js"

let array1 = [
    1,
    2,
    3,
    4,
    5
];
let array2 = [
    6,
    7,
    8,
    9,
    10
];
function callArrayUtil(util, ary1, ary2 = null) {
    document.getElementById("output").innerHTML = ArrayUtilities[util](ary1, ary2).toString()
}

// matches id of div, such as reverseArray with property name of ArrayUtils, like reverseArray
for (let property in ArrayUtilities) {
    document.getElementById(property).onclick = function() {
        callArrayUtil(property, array1, array2)
    }
}

document.getElementById("output").innerHTML= array1.toString();

