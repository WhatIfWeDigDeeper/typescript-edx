## Iteratables
Implement for the `Symbol.iterator` property   

### Difference between `in` vs. `of`

```typescript
    let list = ['a', 'b', 'c'];

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

    number | string

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