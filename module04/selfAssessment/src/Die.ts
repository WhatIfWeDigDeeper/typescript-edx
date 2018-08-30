import { Chance } from "chance";

export enum DieValue {
    One = 1,
    Two,
    Three,
    Four,
    Five,
    Six,
}

export interface DisplayValue {
    display: string;
    value: number;
}

export class Die {
    // public static DieValue = DieValue;
    public static randomRoll(min: number = 1, max: number = 6, randomFn: () => number): number {
        // let c = new Chance();
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(randomFn() * (max - min + 1)) + min;
    }
    private _displayValue: DisplayValue;
    constructor() {
        this._displayValue = this.internalRoll();
    }
    public roll(): DisplayValue {
        this._displayValue = this.internalRoll();
        return this._displayValue;
    }
    private internalRoll(): DisplayValue {
        const value: number = Die.randomRoll(1, 6, Math.random);
        const display: string = DieValue[value];
        return { value, display };
    }
}
