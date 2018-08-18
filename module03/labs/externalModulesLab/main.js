"use strict";
exports.__esModule = true;
var arrayUtils_js_1 = require("./arrayUtils.js");
var array1 = [
    1,
    2,
    3,
    4,
    5
];
var array2 = [
    6,
    7,
    8,
    9,
    10
];
function callArrayUtil(util, ary1, ary2) {
    if (ary2 === void 0) { ary2 = null; }
    document.getElementById("output").innerHTML = arrayUtils_js_1["default"][util](ary1, ary2).toString();
}
var _loop_1 = function (property) {
    document.getElementById(property).onclick = function () {
        callArrayUtil(property, array1, array2);
    };
};
// matches id of div, such as reverseArray with property name of ArrayUtils, like reverseArray
for (var property in arrayUtils_js_1["default"]) {
    _loop_1(property);
}
document.getElementById("output").innerHTML = array1.toString();
