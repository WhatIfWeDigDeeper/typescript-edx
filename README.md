# typescript-edx
For Microsoft EdX course [Introduction to TypeScript 2](https://courses.edx.org/courses/course-v1:Microsoft+DEV273x+2T2018/course/)

## Module 2

Optional properties, like an "options bag"

### Readonly

    ReadonlyArray<T>

Variables use const whereas properties use readonly

### Object literals
"Object literals get special treatment and undergo excess property checking when assigning them to other variables, or passing them as arguments. If an object literal has any properties that the "target type" doesn't have, you'll get an error."

### String Index Signature
To get around the object literal restriction, you may use a string index property.

    interface SquareConfig {
        color?: string;
        width?: number;
        [propName: string]: any;
    }

### Constructor Interface

    interface ClockConstructor {
        new (hour: number, minute: number): ClockInterface;
    }

### Function Interface

    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

### Indexable Types indexing with numbers or strings
"describe the "dictionary" pattern, they also enforce that all properties match their return type. This is because a string index declares that obj.property is also available as obj["property"]."
    
    interface StringArray {
        [index: number]: string;
    }
    
### Parameter Properties

    class Octopus {
        // implicitly sets readonly name;
        constructor(readonly name: string) {
        }
    }

### Accessors - Getters/Setters

* A **get** without a **set** is inferred as _readonly_

      class Employee {
        private _fullName: string;

        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            this._fullName = newName;
        }
      }

### Static Properties

    class Grid {
        static origin = {x: 0, y: 0};
        calculateDistanceFromOrigin(point: {x: number; y: number;}) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
    }

### Abstract Classes

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

### Constructor Functions
A class represents two things:
  1. a type representing instances of the class
  1. a constructor function


    let greeterMaker: typeof Greeter = Greeter;
    greeterMaker.standardGreeting = "Hey there!";

    let greeter2: Greeter = new greeterMaker();
    console.log(greeter2.greet());

"variable will hold the class itself, or said another way its constructor function. Here we use typeof Greeter, that is "give me the type of the Greeter class itself" rather than the instance type"

