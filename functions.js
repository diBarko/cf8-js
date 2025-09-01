// Declarations:
// Using keyword function
function sayHello(name) {
  return `Hello ${name}!`;
}

// Using function expression
const add = function(a, b) {
  return a + b;
};

// Using arrow function
const mul = (a, b) => a * b;

function createDate(day = 1, month = 1, year = 2025) {
  return `${day}/${month}/${year}`;
}

console.log(createDate())
console.log(createDate(9))
console.log(createDate(6, 12))
console.log(createDate(5, 10, 1970))

// Rest operator
function max(...rest) {
  let maxVal = -Infinity

  for (let n of rest) {
    if (n > maxVal) {
      maxVal = n
    }
  }

  return maxVal
}
console.log(max(1, 2, 3, 4, 5))
console.log(`a: ${("a").charCodeAt(0)}, b: ${("b").charCodeAt(0)}, c: ${("c").charCodeAt(0)}`)
console.log(max(("a").charCodeAt(0), ("b").charCodeAt(0), ("c").charCodeAt(0)))