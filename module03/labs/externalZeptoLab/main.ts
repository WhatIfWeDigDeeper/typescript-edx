import ArrayUtilities from "./arrayUtils.js"

declare namespace zepto {
    export interface Base {
        each: Function
    }
}

declare let $: zepto.Base;

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
$.each(ArrayUtilities, function (property, index) {
    document.getElementById(property).onclick = function() {
        callArrayUtil(property, array1, array2)
    }
});

document.getElementById("output").innerHTML= array1.toString();

