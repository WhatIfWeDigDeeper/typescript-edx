class GenericClass {
    setVal(val) {
        this.val = val;
    }
    getVal() {
        return this.val;
    }
}
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
    for (let elem of elemAry) {
        convertElement(elem);
    }
    return elemAry;
}
function animated(constructor) {
    constructor.prototype.animated = true;
    return constructor;
}
class Rotator {
    rotate(elem) {
        elem.style.transform = "rotate(-315deg)";
    }
    rotateBack(elem) {
        elem.style.transform = "";
    }
}
class Mover {
    move(elem) {
        elem.style.transform = "translateX(50px)";
    }
    moveBack(elem) {
        elem.style.transform = "";
    }
}
// @animated
class MovingElement {
    constructor(elem) {
        elem.onmousedown = () => {
            this.move(elem);
        };
        elem.onmouseup = () => {
            this.moveBack(elem);
        };
        elem.onmouseover = () => {
            this.rotate(elem);
        };
        elem.onmouseout = () => {
            this.rotateBack(elem);
        };
        if (this.animated) {
            elem.style.transition = "transform .5s ease";
        }
        this.element = elem;
    }
}
function applyMixins(derivedClass, baseClasses) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
applyMixins(MovingElement, [Mover, Rotator]);
let elem1 = new GenericClass();
let elem2 = new GenericClass();
let elem3 = new GenericClass();
elem1.setVal(document.createElement("div"));
elem2.setVal(document.createElement("div"));
elem3.setVal(document.createElement("div"));
let elemAry = [
    elem1.getVal(),
    elem2.getVal(),
    elem3.getVal()
];
for (let elem of standardizeElements(elemAry)) {
    elem.style.width = "60px";
    elem.style.height = "60px";
    elem.style.backgroundColor = "green";
    elem.style.margin = "5px";
    let elemClass = new MovingElement(elem);
    document.body.appendChild(elemClass.element);
}
//# sourceMappingURL=advancedTypeScriptLab.js.map