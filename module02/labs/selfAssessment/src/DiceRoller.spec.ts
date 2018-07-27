import { DiceCup } from "./DiceCup";
import { Die } from "./Die";

describe("Dice Game", () => {
    it("should roll a single die", () => {
        const die = new Die();
        const actual = die.roll();

        expect(actual.value).toBeGreaterThanOrEqual(1);
        expect(actual.value).toBeLessThanOrEqual(6);
        // tslint:disable-next-line no-console
        console.log(actual);
    });
    it("should roll five dice", () => {
        const dice: Die[] = [
            new Die(),
            new Die(),
            new Die(),
            new Die(),
            new Die(),
        ];
        const highRoller = new DiceCup(dice);
        const actual = highRoller.roll();
        // tslint:disable-next-line no-console
        console.log(actual);
        expect(actual.length).toEqual(dice.length);
    });
});
