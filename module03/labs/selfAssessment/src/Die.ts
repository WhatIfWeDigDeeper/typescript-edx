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
    public static randomRoll(min: number = 1, max: number = 6): number {
        // let c = new Chance();
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
        const value: number = Die.randomRoll();
        const display: string = DieValue[value];
        return { value, display };
    }
}
