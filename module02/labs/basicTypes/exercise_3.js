"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Object.defineProperty(exports, "__esModule", { value: true });
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
})(Colors || (Colors = {}));
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var ColorChanger = /** @class */ (function () {
    function ColorChanger(div) {
        this.div = div;
    }
    ColorChanger.prototype.changeColor = function (color) {
        if (typeof (color) === "number") {
            return true;
        }
        this.div.style.backgroundColor = color;
        return true;
    };
    return ColorChanger;
}());
var NumericColor = /** @class */ (function (_super) {
    __extends(NumericColor, _super);
    function NumericColor(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        return _this;
    }
    NumericColor.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    NumericColor.Colors = Colors;
    return NumericColor;
}(ColorChanger));
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
elementSets.forEach(function (elem) {
    var colorChanger = new NumericColor(elem.div);
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) { colorChanger.changeColor(getRandomIntInclusive(0, 3)); };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
// exports.default = {};
