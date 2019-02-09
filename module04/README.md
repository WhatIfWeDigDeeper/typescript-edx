# Module 04

## Iteratables

Implement for the `Symbol.iterator` property

### Difference between `in` vs. `of`

```typescript
let list = ["a", "b", "c"];

// keys "0, 1, 2"
for (let i in list) {
  console.log(i);
}

// actual items
for (let i of list) {
  console.log(i);
}
```

## Intersection Types

## Union Types

A value that can be one of several types:

```typescript
let age: number | string = 27;
age = "27";

type Env = "dev" | "stage" | "prod";
```

## Discriminated Unions (from [Anders Hejlsberg](https://www.youtube.com/watch?v=ET4kT88JRXs))

```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}
```

## Type Guards and Differentiating Types

"A type guard is some expression that performs a runtime check that guarantees the type in some scope... A predicate takes the form parameterName is Type, where parameterName must be the name of a parameter from the current function signature."

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

// primitive checks
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

These typeof type guards are recognized in two different forms: typeof v === "typename" and typeof v !== "typename", where "typename" must be "number", "string", "boolean", or "symbol".

## instanceof type guards

The right side of the `instanceof` needs to be a constructor function,and TypeScript will narrow down to

1. the type of the function's prototype property if its type is not any
1. the union of types returned by that type's construct signatures

```typescript
// Type is 'SpaceRepeatingPadder | StringPadder'
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  padder; // type narrowed to 'SpaceRepeatingPadder'
}
```

## Generics

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

### String property name maps (from [Anders Hejlsberg](https://www.youtube.com/watch?v=ET4kT88JRXs))

```typescript
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = { text: "hello", count: 42 };

let s = getProp(obj, "text"); // string
let n = getProp(obj, "count"); // number
let x = getProp(obj, "foo"); // compile error
```

### types (from [Anders Hejlsberg](https://www.youtube.com/watch?v=ET4kT88JRXs))

```typescript
{ x: T, y: U }        // Object
T | U                 // Union
T & U                 // Intersection
keyof T               // Index
T[K]                  // Lookup
{ [P in K]: X }       // Mapped
T extends U ? X : Y   // conditional
```
