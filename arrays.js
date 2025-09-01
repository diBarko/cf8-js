const arr1 = []
const arr2 = [1, 2, 3, 4, 5]
const arr3 = new Array(5)                 //all 5 cells are undefined [undefined, undefined, undefined, undefined, undefined]
const arr4 = new Array(5).fill(0)         // all 5 cells have 0 value [0, 0, 0, 0, 0]

let string = "hello"
const arr5 = [...string, ...arr4]         // spread operator converts a string to char array, shallow copy
                                          // e.g.: "hello" to ['h', 'e', 'l', 'l', 'o']
// console.log(arr5)

let n = 0;
while (arr5[n]) {
  // console.log(arr5[n])
  n++;
}

          // Array methods
// console.log(arr2.length)            // 5
// console.log(arr2[0])                // 1
// console.log(arr2[arr2.length - 1])  // 5
// console.log(arr2.join(','))         // "1,2,3,4,5" - Επιστρέφει ένα string από συνενωμένα στοιχεία του πίνακα, διαχωρισμένα με κόμμα
// console.log(arr2.indexOf(3))        // 2
// console.log(arr2.includes(4))       // true
// console.log(arr2.includes(6))       // false

          // Traverse
for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i])
}

for (const item of arr2) {
  // console.log(item)
}

arr2.forEach((item, index) => {
  // console.log(`Value at index ${index} is ${item}`)
})

          // Stack-like operations - LIFO
let arr = [1, 2, 3, 4, 5]
arr.push(6)                       // [1, 2, 3, 4, 5, 6]
// console.log(arr)
let popped = arr.pop()            // [1, 2, 3, 4, 5] - last was 6, which is now assigned to popped
// console.log(arr)

          // Queue-like operations - FIFO
arr.unshift(0)                    // [0, 1, 2, 3, 4, 5]
// console.log(arr)
let shifted = arr.shift()         // [1, 2, 3, 4, 5] - first was 0, which is now assigned to shifted
// console.log(arr)


          // Splice - deletes, inserts or updates elements
arr = [1, 2, 3, 4, 5]                                                       // [1, 2, 3, 4, 5]
// console.log(arr)
arr.splice(2, 1)                   // removes 1 element at index 2             [ 1, 2, 4, 5 ]
// console.log("Splice (2,1) - removes 1 element at index 2", arr)
arr.splice(2, 0, 99)               // inserts 99 at index 2                    [ 1, 2, 99, 4, 5 ]
// console.log("Splice (2,0,99) - inserts 99 at index 2", arr)
arr.splice(2, 1, 88)               // updates 99 to 88                         [ 1, 2, 88, 4, 5 ]
// console.log("Splice (2,1,88) - updates 99 to 88", arr)


arr = [1, 2, 3, 4, 5]                                                       // [1, 2, 3, 4, 5]
// arr.splice(2, 2, 33, 44)          // removes 88 and 4, inserts 33 and 44    // [ 1, 2, 33, 44, 5 ]
// console.log("Splice (2,2,33,44) - removes 88 and 4, inserts 33 and 44", arr)

          // Slice - returns a new (deep) copy of the array so the original data is not affected
let spliced = arr.slice().splice(2, 1)                // [ 1, 2, 4, 5 ]
const sliced1 = arr.slice(1)
const sliced2 = arr.slice(1, 3)                       // startIndex 1 up to endIndex -1 (3 - 1)
const sliced3 = arr.slice()                           //  shallow copy of the array
// console.log("Sliced from index 1:", sliced1);         // [2, 3, 4, 5]
// console.log("Sliced from index 1 to 3:", sliced2);    // [2, 3]


          // Array includes method - does NOT check content but the reference pointer, needs caution with objects.     ~ TBC
if (arr.includes(3)) {
  // console.log("Array includes 3");
} else {
  // console.log("Array does not include 3");
}

          // Index of -  returns -1 if not found
let index = arr.indexOf(5);               // second parameter is the (included) index to start the search 
if (index !== -1) {
  // console.log(`Array includes 5 at index ${index}.`);
} else {
  // console.log("Array does not include 5");
}

          // Last index of -  returns -1 if not found
let lastIndex = arr.lastIndexOf(5, 1);   // second parameter is the (included) index to start the search backwards
if (lastIndex !== -1) {
  // console.log(`Array includes 5 at last index ${lastIndex}.`);
} else {
  // console.log("Array does not include 5");
}

          // Concat
let myConcat = arr.concat(arr2)
// console.log("Concat result:", myConcat);

          // Spread Operator
let myConcat2 = [...arr, ...arr2]
// console.log("Spread result:", myConcat2);

          // min value using spread
let minValue = Math.min(...arr2)
let indexOfMin = arr2.indexOf(minValue)

          // max value using spread
let maxValue = Math.max(...arr2)
let indexOfMax = arr2.indexOf(maxValue)
// console.log(`Array : ${arr2}, Max value[${maxValue}] at index(${indexOfMax}), Min value[${minValue}] at index(${indexOfMin})`)

          // Destructuring
let greed = [1, 2]
let [x, y] = greed    // x = 1, y = 2       x, y is NOT an array, just multiple variables

let [first, second, ...rest] = arr2  // first = 1, second = 2, rest = [3, 4, 5]     using rest operator

function min(...arr) {        // rest operator
  return Math.min(...arr);    // spread operator
}

let minEl = min(...arr2)