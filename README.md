# typescript-edx

For Microsoft EdX course [Introduction to TypeScript 2](https://courses.edx.org/courses/course-v1:Microsoft+DEV273x+2T2018/course/)

## Module 2

Optional properties, like an "options bag"

### Readonly

```typescript
ReadonlyArray<T>
```

Variables use const whereas properties use readonly

### Object literals

"Object literals get special treatment and undergo excess property checking when assigning them to other variables, or passing them as arguments. If an object literal has any properties that the "target type" doesn't have, you'll get an error."

### String Index Signature

To get around the object literal restriction, you may use a string index property.

```typescript
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

Interfaces are TypeScript's way of describing a complex object containing many types. They essentially describe the "shape" of an object, which can be especially useful when working with complicated data contracts, as it ensures not only that each property within is of the correct type, but that it exists as well.

### Constructor Interface

```typescript
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
```

### Function Interface

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

### Indexable Types indexing with numbers or strings

"describe the "dictionary" pattern, they also enforce that all properties match their return type. This is because a string index declares that obj.property is also available as obj["property"]."

```typescript
interface StringArray {
  [index: number]: string;
}
```

### Parameter Properties

```typescript
class Octopus {
  // implicitly sets readonly name;
  constructor(readonly name: string) {}
}
```

### Accessors - Getters/Setters

- A **get** without a **set** is inferred as _readonly_

```typescript
class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    this._fullName = newName;
  }
}
```

### Static Properties

```typescript
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
}
```

### Abstract Classes

```typescript
abstract class Department {
    constructor(name:string) {
        ...
    }
    abstract printMeeting(): void;
}

class MathDepartment extends Department {
    constructor() {
        super("Math");
    }
}
```

### Constructor Functions

A class represents two things:

1. a type representing instances of the class
1. a constructor function

```typescript
let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());
```

"variable will hold the class itself, or said another way its constructor function. Here we use typeof Greeter, that is "give me the type of the Greeter class itself" rather than the instance type"

### Type Compatibility

"The basic rule for TypeScript's structural type system is that x is compatible with y if y has at least the same members as x"

### Comparing functions

Compatible if at least the same number of parameters and return type. Can have more parameters.

### Comparing Classes

structural, including private/protected, but ignores static members.

### Demo type inference

```typescript
const anyString: any = "stringy";
const asLength: number = (anyString as string).length;
// or
const angleBracketLength: number = (<string>anyString).length;
```

### Functions and Function Types

Any optional parameters must follow required parameters. Default and optional parameters share the same type.

```typescript
function buildName(firstName: string, lastName?: string) {
  // ...
}

// and

function buildName(firstName: string, lastName = "Smith") {
  // ...
}

// share the same type
(firstName: string, lastName?: string) => string;
```

### Rest Parameters

```typescript
function buildName(firstName: string, ...restOfName: string[]) {}
```

### this

A top-level non-method syntax call like this will use window for `this`. (Note: under strict mode, this will be `undefined` rather than window).

Arrow functions capture the `this` where the function is created rather than where it is invoked

use `--noImplicitThis` flag to the compiler to warn of incorrect this usage

### this parameter

```typescript
let deck: Deck = {
  suits: ["H", "S", "C", "D"],
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      // this is of type deck
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  }
};

deck.createCardPicker();
```

### this in callbacks

```typescript
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    onClickGood(this: void, e: Event) {...}
}
let h = new Handler();
uiElement.addClickListener(h.onClickGood);

// or use arrow fns to still use this.
onClickGood = (e: Event) => { this.info = e.message }
```

arrow functions don't capture `this`, so you can always pass them to something that expects `this: void`. The downside is that one arrow function is created per object of type `Handler`. Methods, on the other hand, are only created once and attached to Handler's prototype. They are shared between all objects of type `Handler`.

### Function Overloads

its customary to order overloads from most specific to least specific.

```typescript
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
```
