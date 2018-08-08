enum Colours {
    Green,
    Red,
    Blue,
    Orange
}

class ColourChanger {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
    changeColour(color: string): boolean {
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

//function* range(start: number, finish: number): IterableIterator<number> {
function* range(start: number, finish: number): any {
    for(let i = start; i <= finish; i++) {
        yield i;
    }
}

const createSquare = (size: string): Element => {
    const div = document.createElement("div");
    (div as HTMLElement).style.width = size;
    (div as HTMLElement).style.height = size;
    return div;
}

const createButton = (div: Element, index: number): Element => {
    const colorChanger = new ColourChanger(div);
    const button = document.createElement("button");
    button.textContent = "Change Color";
    (button as HTMLElement).onclick = (event: Event) => { colorChanger.changeColour(Colours[index]);}
    return button;
}

    // tslint:disable-next-line no-console
    console.log("outside");

for(const index of range(0,3)) {
    // tslint:disable-next-line no-console
    console.log(`i: ${index}`);
    let div = createSquare("100px");
    let button = createButton(div, index);
    document.body.appendChild(button);
    document.body.appendChild(div);
}

export default {};

