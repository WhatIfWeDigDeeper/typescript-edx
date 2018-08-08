## Namespace
dear God, why? Cons
 - adds namespace to global environment
 - non-standard
 - must use reference comment across files

If using namespace across files, may need to reference other files

    /// <reference path="ZooAnimals.ts" />
    namespace Zoo {

To reference items in namespace either

    // namespace Zoo added to the Global/Window space
    new Zoo.Bird();

    // or if nested namespaces
    import rep = Zoo.Reptile;

## Module

 - executed in their own scope, not in the global scope
 - items are not visible outside, unless specifically exported.
 - declarative with relationships specified by imports & exports
 - async & lazy module loading

### exports 

Can rename exports

    export { ZipCodeValidator as mainValidator };

Can export everything

    export * from "./ZipCodeValidator";

Single default export

    export default validator;

### Imports

Can rename imports

    import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
    let myValidator = new ZCV();

Can import every exported item:

    import * as validator from "./ZipCodeValidator";

To import default

    import validator from "./ZipCodeValidator";


## Declaration file

Saved with `.d.ts` extension and called declaration files.  They will not generate any JS files.

    // top level
    declare module Something {
        let x;
        function showMessage(msg:string);
    }

    // single
    function showMessage(msg:string);

    // can generate declaration file from compiler for your code to share
    > tsc example --declaration

    // to generate for 3rd party, not supported in @types
    > npm i -g dts-gen
    // 3rd party, have to install global
    > npm i -g chance
    > dts-gen -m chance
    // or quick way
    declare let chance: any;

### Ambient Modules

    declare module "url" {
        export interface Url {
            protocol?: string;
            hostname?: string;
            pathname?: string;
        }

        export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
    }

    // then have to reference in other file
    /// <reference> node.d.ts
    import * as URL from "url".

### shorthand

    // all members will have any type
    declare module "url";  


### Resolution

"TypeScript will also use a field in package.json named `typings` to mirror the purpose of `main` - the compiler will use it to find the `main` definition file to consult."

## Third Party

1. http://definitelytyped.org/ can copy and paste into a `.d.ts` file.  Have to then use the reference tag

        /// <reference> ./node.d.ts


2. https://microsoft.github.io/TypeSearch/ pulls from #1








