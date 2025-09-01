const numbers = [1, 2, 3, 4]

// Insert
// Mutable
numbers.push(5)                         //  numbers = [1, 2, 3, 4, 5]
numbers.splice(5, 0, 6)                 //  numbers = [1, 2, 3, 4, 5, 6]

// Immutable - Fresh copy   -- 
const addToArrayEnd = (arr, num) => {
  return [...numbers, num]
}

const addToArrayFirst = (arr, num) => {
  return [num, ...numbers]
}

const addToArrayAtIndex = (arr, num, index) => {
  return [...numbers.slice(0, index), num, ...numbers.slice(index)]
}

// console.log('^0\t|\t' + addToArrayFirst(numbers, 0))            //  [0, 1, 2, 3, 4, 5, 6]
// console.log('7$\t|\t' + addToArrayEnd(numbers, 7))              //  [1, 2, 3, 4, 5, 6, 7]
// console.log('^9@3$\t|\t' + addToArrayAtIndex(numbers, 9, 3))    //  [1, 2, 3, 9, 4, 5, 6]
// console.log('x+10$\t|\t' + addToArrayAtIndex(numbers, numbers.at(numbers.length - 1) + 10, numbers.length)) //  [1, 2, 3, 4, 5, 6, 16]

// Update
// Mutable
// numbers.splice(3, 1, 8)

// Immutable - Fresh copy
const updateOne = (arr, index, newVal) => arr.map((val, i) => (i === index ? newVal : val))

// console.log('4th to 80\t|\t' + updateOne(numbers, 3, 80))   //  [1, 2, 3, 80, 5, 6]

// Delete
// Mutable
// console.log('4th element deleted:\t' + numbers.splice(3, 1))     //  [1, 2, 3, 5, 6]

// Immutable
const deleteFromArray = (arr, num) => arr.filter(n => n !== num)

console.log('4th element deleted:\t' + deleteFromArray(numbers, 3))   //  [1, 2, 3, 5, 6]