"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color = "green";
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
var div = document.createElement("div");
div.style.width = squareSize;
div.style.height = squareSize;
var button = document.createElement("button");
var colorChanger = function (elem, color) {
    elem.style.backgroundColor = color;
    return true;
};
button.textContent = "Change Color";
button.onclick = function (event) { colorChanger(div, color); };
document.body.appendChild(button);
document.body.appendChild(div);
// tsc basicTypesLab.ts  
// will generate basicTypesLab.js
exports.default = {};
