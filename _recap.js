/*     Question: 1. What is the output of this code?   [Hoisting - undefined & ReferenceError]
 a) 5   b) undefined    c) ReferenceError   d) null*/
console.log(x)
var x = 5;
/* Answer: b) undefined
Explanation: Variable declarations (var) are hoisted to the top of their scope and initialized with 'undefined'.
In case of 'let' and 'const', they are also hoisted but not initialized, leading to a ReferenceError if accessed before declaration.*/


/*     Question: 2. What does this code output?    [Closure  - private variables, encapsulation, function factory]
 a) 1 2   b) 1 1    c) 0 1    d) undefined undefined*/
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}
const counter = outer();
console.log(counter(), counter());
/*Answer: a) 1 2
Explanation: State is preserved between invocations to counter().
Closure allows the inner function to access the outer function's variables even after the outer function has finished executing.
const counter is invoked as counter(), because the outer function returns a function- the inner function.
closure, keeps 'count' variable private, persistent data, function factory and customization
This is the definition of encapsulation in java( and every oop language), private fields with setters/getters*/


 /*     Question: 3.  What is 'this' in the arrow function?       [Global Object - Lexical Scope]
a) undefined    b) 'Alice'     c) window/global object    d) throws an error*/
const obj = {
  name: 'Alice',
  greet: () => console.log(this.name)
} 
obj.greet()
/*Answer: a) undefined
Explanation: Arrow functions inherit lexical scope and do not have their own 'this' context; they inherit 'this' from the surrounding lexical scope.
Technically object.name does not exist - in the lexical scope of the arrow function-, so 'this.name' is undefined.

* If function a calls function b, 'this' in function b would refer to the same object as 'this' in function a. - using arrow function
* If this was a regular -not arrow- function, 'this' would refer to the object calling the method.*/
/*
const name = 'Global Alice';

const obj = {
  name: 'Object Alice',
  
  // Regular function - 'this' depends on call
  regularGreet: function() {
    console.log(this.name); // 'Object Alice' (when called as obj.regularGreet())
  },
  
  // Arrow function - 'this' is from lexical scope (global)
  arrowGreet: () => {
    console.log(this.name); // 'Global Alice' (or undefined if no global.name)
  }
};

obj.regularGreet(); // 'Object Alice'
obj.arrowGreet();   // 'Global Alice' (or undefined)*/


 /*     Question: 4. What does this output?      [Construction Function - Prototype object in Object]
a) true    b) false   c) undefined      d) throws an error*/
function Person(name) {
  this.name = name
}
Person.prototype.sayHi = function() {
  console.log(`Hi, my name is ${this.name}`)
}
const bob = new Person('Bob')
console.log(bob.hasOwnProperty('sayHi'))
/*Answer: b) false
Explanation: 'sayHi' is not a property of the instance 'bob', but rather a method on the prototype.
hasOwnProperty checks only the object's own properties, NOT inherited ones.*/


 /*     Question: 5. What is the output?       [Object Reference - Assignment, dereference, stack&heap]
a) 10   b) 20   c) undefined    d) throws an error*/
const obj1 = { value: 10 }
const obj2 = obj1
obj2.value = 20
console.log(obj1.value)
/* Answer: b) 20
Explanation: Both obj1 and obj2 reference the same object in memory.
When obj2.value is changed, obj1.value is also affected by the change, because they are both pointing to the same object in heap.*/


 /*     Question: 6. What does this code return?       [Array Methods - map/filter]
a) [4, 6]   b) [2, 4, 6]   c) [6]    d) []*/
const nums = [1, 2, 3].map(n => n * 2).filter(n => n > 3)
/* Answer: a) [4, 6]
Explanation:
The map() function doubles each element, resulting in [2, 4, 6].
The filter() function then removes any elements not greater than 3, leaving [4, 6].*/


 /*     Question: 7. How do we import a named export?       [ES6 Modules - Import/Export]
 a) import apiKey from './module.js'   b) import { apiKey } from './module.js'    c) import default as apiKey from './module.js'  d) require('./module.js').apiKey*/
export const apiKey = '123'
/*Answer: b) import { apiKey } from './module.js'
Explanation: Named exports must be imported using curly braces, specifying the exact names of the exports you want to import. This allows for selective importing of only the needed parts of a module.*/

// **** Default imports can be renamed during import, but named imports can not.***
// Node.js uses CommonJS (CJS) syntax for module loading, while browsers use ES6 module loading.
// CJS require = ES6 import,   CJS module.exports = ES6 export


 /*     Question: 8. What is the output?       [Scope  - Temporal Dead Zone]
a) 10   b) 20   c) undefined    d) ReferenceError*/
let x = 10;
function test() {
  console.log(x);
  let x = 20;
}
test();
/* Answer: d) ReferenceError
Explanation: The variable 'x' is hoisted to the top of the function scope, but it is not initialized until the line 'let x = 20;'.
Therefore, when 'console.log(x);' is executed, it refers to the local 'x', which is in the "temporal dead zone"
  and not yet initialized, resulting in a ReferenceError.
In comparison, if we had used 'var x = 20;' instead, the output would have been 10, because 'var' is function-scoped and would not create a new block scope.*/


 /*     Question: 9. What does this code output?     [Object Properties]
 a) 1 2 undefined   b) 1 2 null   c) 1 2 ReferenceError   d undefined 2 undefined*/
const obj2 = { a: 1 }
obj2.b = 2
console.log(obj2['a'], obj2.b, obj2?.c?.d)
/* Answer: a) 1 2 undefined
Explanation: The first two values are directly accessed from the object 'obj'.
The third value uses optional chaining to safely access 'c' and 'd', which do not exist, resulting in 'undefined'.*/


 /*     Question: 10 What is the key difference between arrow functions and regular functions?   [Arrow Functions vs Regular Functions  - 'this']
 a) Arrow functions do not have their own 'this' binding   b) Regular functions inherit 'this' from parent scope
 c) Arrow functions inherit 'this' from parent scope      d) Both have identical 'this' binding*/
 const arrow = () => this
 const regular = function() { return this }
 /* Answer: a) Arrow functions do not have their own 'this' binding
 Explanation: Arrow functions capture the 'this' value from their enclosing lexical context,
 while regular functions have their own 'this' binding based on how they are called.
 if a invokes b, then b.this = a.this
 dynamic 'parent' policy for regular functions*/


//                    Challenges: Complete the blanks for the code to work:
/* 1) // sum elements of arr
    function sumArray(arr) {
      return arr.reduce((sum, num) => ________, 0)
    }      
*/

// Answer: sum + num
// for each element in arr, sum = sum + num       which translates in 'sum + num' for arrow function.

/* 2) first letter only to capital
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }      
*/

// Answer: sum + num
// for each element in arr, sum = sum + num       which translates in 'sum + num' for arrow function.

/* 3) filter evens
    function filterEvens(arr) {
      return arr.filter(______);
    }
*/

// Answer: num => num % 2 === 0
// keeps only even numbers in arr, removes odd numbers

/* 4) find max element in array
    function findMax(arr) {
      return Math.___(...arr);
    }
*/

// Answer: max

/* 5) reverse string
    function reverseString(str) {
      return str._____('').______().______('');
    }
*/

/*Answers for const str = "hello";

// Method 1: Split → Reverse → Join
const reversedStr = str.split("").reverse().join(""); // "olleh"
// Method 2: Spread operator → Reverse → Join  
const reversedStr2 = [...str].reverse().join(""); // "olleh"
// Method 3: Array.from → Reverse → Join
const reversedStr3 = Array.from(str).reverse().join(""); // "olleh"*/

/* 6) merge two arrays but remove duplicates
    function mergeUnique(arr1, arr2) {
      return [...__________];
    }
*/

// Answer: new Set([...arr1, ...arr2])
// Set automatically removes duplicates, spread operator to merge arrays