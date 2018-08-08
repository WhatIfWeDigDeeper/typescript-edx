import { DiceCup } from "./DiceCup";
import { Die, DieValue, DisplayValue } from "./Die";

describe("Dice Game", () => {
    const assertValidDie = (actual: DisplayValue): void => {
        // tslint:disable-next-line no-console
        console.log(`out of bounds: ${DieValue[100]}`);
        expect(actual.value).toBeGreaterThanOrEqual(1);
        expect(actual.value).toBeLessThanOrEqual(6);
    };

    it("should roll a single die", () => {
        const die = new Die();
        const actual = die.roll();

        assertValidDie(actual);
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
        actual.forEach(die => {
            assertValidDie(die);
        });
    });
});
