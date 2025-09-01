function createCounter() {
  let count = 0;

  return {
    increment: function increment() {
      count++;
    },
    getCount: function getCount() {
      return count;
    } 
  };
}
const counter = createCounter()
console.log(counter.getCount())
counter.increment()
console.log(counter.getCount())
counter.increment()
console.log(counter.getCount())

function calculator() {
  let memory = 0;

  return function add(a, b) {
      // memory += a + b   // stores previous condition - executes the addition and adds sums
      memory = a + b    // does not store previous condition - executes the addition without summing previous
      return memory
  }
}

const myAdd = calculator()
console.log(myAdd(3, 10))

// No (this.) operator, υπάρχει closure κι επομένως οι inner functions έχουν πρόσβαση
// στο private state - outer state
// Τα variables είναι private by default
// private & public API

function calculator2() {
  let memory = 0;

  return {
    add: function(a, b) {
      memory = a + b
      return memory
    },
    sub: function(a, b) {
      memory = a - b
      return memory
    }
  };
}

let calc = calculator2()
console.log(calc.add(5, 6))
console.log(calc.sub(10, 2))