import { Die, DisplayValue } from "./Die";

export class DiceCup {
    constructor(private _dice: Die[]) {}
    public roll(): DisplayValue[] {
        return this._dice.map(d => d.roll());
    }
}
