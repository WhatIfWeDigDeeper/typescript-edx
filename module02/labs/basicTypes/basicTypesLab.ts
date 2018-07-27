const color: string = "green";
const squareSizeNum: number = 100;
const squareSize: string = `${squareSizeNum}px`;

const div: Element = document.createElement("div");
(div as HTMLElement).style.width = squareSize;
(div as HTMLElement).style.height = squareSize;

const button: Element = document.createElement("button");
const colorChanger: Function = (elem: Element, color: string): boolean => {
    (elem as HTMLElement).style.backgroundColor = color;
    return true;
}

button.textContent = "Change Color";
(button as HTMLElement).onclick = (event: Event) => { colorChanger(div, color);}

document.body.appendChild(button);
document.body.appendChild(div);

// tsc basicTypesLab.ts  
// will generate basicTypesLab.js

export default {};

