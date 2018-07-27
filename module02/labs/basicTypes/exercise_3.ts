enum Colors {
    Green,
    Red,
    Blue,
    Orange
}

interface ElementSet {
    div: Element;
    button: Element
}

const getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class ColorChanger {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
    changeColor(color: string | number): boolean {
        if (typeof(color) === "number") {
            return true;
        }
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

class NumericColor extends ColorChanger {
    static Colors = Colors;
    constructor(div: Element) {
        super(div);
        (this.div as HTMLElement).style.width = squareSize;
        (this.div as HTMLElement).style.height = squareSize;
    }
    changeColor(color: number): boolean {
        (this.div as HTMLElement).style.backgroundColor = Colors[color];
        return true;
    }
}

const elementSets: Array<ElementSet> = [];
const squareSizeNum: number = 100;
const squareSize: string = `${squareSizeNum}px`;

// let Elements = {
//     "div": document.createElement("div"),
//     "button": document.createElement("button")
// }

for (let index: number = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

elementSets.forEach((elem) => {
    let colorChanger = new NumericColor(elem.div);
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event: Event) => { colorChanger.changeColor(getRandomIntInclusive(0,3));}
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})


export default {};
