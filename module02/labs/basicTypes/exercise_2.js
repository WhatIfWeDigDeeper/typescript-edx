"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
})(Colors || (Colors = {}));
var ColorChanger = /** @class */ (function () {
    function ColorChanger(div) {
        this.div = div;
    }
    ColorChanger.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = color;
        return true;
    };
    return ColorChanger;
}());
var elementSets = [];
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
// let Elements = {
//     "div": document.createElement("div"),
//     "button": document.createElement("button")
// }
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
elementSets.map(function (elem, index) {
    var colorChanger = new ColorChanger(elem.div);
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) { colorChanger.changeColor(Colors[index]); };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
exports.default = {};
