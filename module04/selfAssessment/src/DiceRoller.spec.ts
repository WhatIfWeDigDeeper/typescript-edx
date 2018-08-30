import { getRandomAsync, getRandomPromise } from "./api";
import { DiceCup } from "./DiceCup";
import { Die, DieValue, DisplayValue } from "./Die";

describe("Dice Game", () => {
    const assertValidDie = (actual: DisplayValue): void => {
        // tslint:disable-next-line no-console
        console.log(`out of bounds: ${DieValue[100]}`);
        assertBetween(1, 6, actual.value);
    };

    const assertBetween = (min = 1, max = 6, val: number): void => {
        expect(val).toBeGreaterThanOrEqual(1);
        expect(val).toBeLessThanOrEqual(6);
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
    it("should call api async", async () => {
        const rnd = await getRandomAsync();
        const actual = Die.randomRoll(1, 6, () => rnd);
        assertBetween(1, 6, actual);
    });
    it("should call api promise", done => {
        return getRandomPromise().then(val => {
            const result = Die.randomRoll(1, 6, () => val);
            assertBetween(1, 6, result);
            return done();
        });
    });
});
