class GenericClass<T> {
    private val: T;
    setVal(val: T): void {
        this.val = val;
    }
    getVal(): T {
        return this.val;
    }
}

// predicate return type
// Can not check HTMLElement with typeof operator
function isHTMLElement (x: any): x is HTMLElement {
    return x.style !== undefined;
};

function convertElement(elem: Element | HTMLElement): HTMLElement {
    return isHTMLElement(elem)
        ? elem
        : <HTMLElement>elem;
}

function standardizeElements(elemAry: Array<any>): Array<HTMLElement> {
    for (let elem of elemAry) {
        convertElement(elem);
    }
    return elemAry;
}

function animated(constructor: Function) {
    constructor.prototype.animated = true;
    return constructor;
}

async function getAvatar_Async(elem: HTMLElement) {
    const uiName = await fetch('https://uinames.com/api/');
    const resp = await uiName.json();
    console.log(resp.name);
    const avatar = `https://robohash.org/set_set3/${resp.name}?size=60x60`; 
    elem.style.backgroundImage = `url("${avatar}")`;
    document.body.appendChild(elem);
};

class Rotator {
    rotate(elem: HTMLElement) {
        elem.style.transform = "rotate(-315deg)";
    }
    rotateBack(elem: HTMLElement) {
        elem.style.transform = "";
    }
}

class Mover {
    move(elem: HTMLElement) {
        elem.style.transform = "translateX(50px)";
    }
    moveBack(elem: HTMLElement) {
        elem.style.transform = "";
    }
}

// @animated
class MovingElement implements Rotator, Mover {

    rotate(elem: HTMLElement) {}
    rotateBack(elem: HTMLElement) {}
    move(elem: HTMLElement) {}
    moveBack(elem: HTMLElement) {}

    animated: false;

    element: HTMLElement;

    constructor(elem: HTMLElement) {
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

function applyMixins(derivedClass: any, baseClasses: any[]) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}

applyMixins(MovingElement, [Mover, Rotator]);

let elem1 = new GenericClass<Element>();
let elem2 = new GenericClass<HTMLElement>();
let elem3 = new GenericClass<Element>();

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
    getAvatar_Async(elemClass.element);
}


