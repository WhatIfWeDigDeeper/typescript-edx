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

class ColorChanger {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
    changeColor(color: string): boolean {
        (this.div as HTMLElement).style.backgroundColor = color;
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

elementSets.map( (elem, index) => {
    let colorChanger = new ColorChanger(elem.div);
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event: Event) => { colorChanger.changeColor(Colors[index]);}
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})

export default {};

