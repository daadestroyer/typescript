# Typescsript Basic Things
Typescript is a superset of Javscript and ECMAScript


## step:1 create typescript file with .ts extension

myfiledemo.ts
-------------
console.log("Hello World...")

## step:2 compiling the code
web browser do not understand TypeScript natively 
have to convert TypeScript code to JavaScript code 
This is known as "transpiling"

transpiling is accomplished with "tsc" command
mydemo.ts -----> mydemo.js

## step:3 run the code
to run javscript code , we use the node command
run the generated javascript code (.js file)

>> node mydemo.js

# Basic datatypes

boolean  true/false 
number   supports integer and floating point numbers
string   text data enclosed in a single or double quotes
any      support any datatype assignment
others   <a href="https://www.typescriptlang.org">see details</a>


## defining a variable:
let <variableName> : <type> = <initial_value>;
let found : boolean = true;

found --> variable name
boolean --> datatype
true --> value

# Typescript let keyword:
## 1. We are using the new TypeScript let keyword for variables declarations
   As opposed to using traditional javascript "var" keyword
## 2. The javascript var keyword had a number of gotchas and pitfalls

   Scoping , capturing , shadowing etc.

## 3. The new TypeScript let keyword helps to eliminate those issues 

### >>> Typescript is stronly typed

# Template String

let fname : string "shubham";
let lname : string "nigam";
console.log("Hi "+fname+" "+lname);
console.log("Hi "+${fname}+" "+${lname});


# For loop
### a) loops in typescript is exactly same as normal javascript code 
### b) loops are use to perform any task repeatidly
for(let i=0 ; i<5 ; i++){
    console.log(i)
}

# Arrays
### a) arrays are those which can store some values at a time and whenever we want we can retrieve those values from array







