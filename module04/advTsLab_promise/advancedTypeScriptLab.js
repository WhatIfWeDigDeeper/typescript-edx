var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.setVal = function (val) {
        this.val = val;
    };
    GenericClass.prototype.getVal = function () {
        return this.val;
    };
    return GenericClass;
}());
// predicate return type
// Can not check HTMLElement with typeof operator
function isHTMLElement(x) {
    return x.style !== undefined;
}
;
function convertElement(elem) {
    return isHTMLElement(elem)
        ? elem
        : elem;
}
function standardizeElements(elemAry) {
    for (var _i = 0, elemAry_1 = elemAry; _i < elemAry_1.length; _i++) {
        var elem = elemAry_1[_i];
        convertElement(elem);
    }
    return elemAry;
}
function animated(constructor) {
    constructor.prototype.animated = true;
    return constructor;
}
function getAvatar_Promise(elem) {
    fetch('https://uinames.com/api/')
        .then(function (response) { return (response.json()); })
        .then(function (resp) {
        console.log(resp.name);
        var avatar = "https://robohash.org/set_set3/" + resp.name + "?size=60x60";
        elem.style.backgroundImage = "url(\"" + avatar + "\")";
        document.body.appendChild(elem);
    });
}
var Rotator = /** @class */ (function () {
    function Rotator() {
    }
    Rotator.prototype.rotate = function (elem) {
        elem.style.transform = "rotate(-315deg)";
    };
    Rotator.prototype.rotateBack = function (elem) {
        elem.style.transform = "";
    };
    return Rotator;
}());
var Mover = /** @class */ (function () {
    function Mover() {
    }
    Mover.prototype.move = function (elem) {
        elem.style.transform = "translateX(50px)";
    };
    Mover.prototype.moveBack = function (elem) {
        elem.style.transform = "";
    };
    return Mover;
}());
// @animated
var MovingElement = /** @class */ (function () {
    function MovingElement(elem) {
        var _this = this;
        elem.onmousedown = function () {
            _this.move(elem);
        };
        elem.onmouseup = function () {
            _this.moveBack(elem);
        };
        elem.onmouseover = function () {
            _this.rotate(elem);
        };
        elem.onmouseout = function () {
            _this.rotateBack(elem);
        };
        if (this.animated) {
            elem.style.transition = "transform .5s ease";
        }
        this.element = elem;
    }
    MovingElement.prototype.rotate = function (elem) { };
    MovingElement.prototype.rotateBack = function (elem) { };
    MovingElement.prototype.move = function (elem) { };
    MovingElement.prototype.moveBack = function (elem) { };
    return MovingElement;
}());
function applyMixins(derivedClass, baseClasses) {
    baseClasses.forEach(function (baseClass) {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
applyMixins(MovingElement, [Mover, Rotator]);
var elem1 = new GenericClass();
var elem2 = new GenericClass();
var elem3 = new GenericClass();
elem1.setVal(document.createElement("div"));
elem2.setVal(document.createElement("div"));
elem3.setVal(document.createElement("div"));
var elemAry = [
    elem1.getVal(),
    elem2.getVal(),
    elem3.getVal()
];
for (var _i = 0, _a = standardizeElements(elemAry); _i < _a.length; _i++) {
    var elem = _a[_i];
    elem.style.width = "60px";
    elem.style.height = "60px";
    elem.style.backgroundColor = "green";
    elem.style.margin = "5px";
    var elemClass = new MovingElement(elem);
    // document.body.appendChild(elemClass.element);
    getAvatar_Promise(elemClass.element);
}
//# sourceMappingURL=advancedTypeScriptLab.js.map