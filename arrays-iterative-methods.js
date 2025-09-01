//    General structure of callback functions:       arr.something((value, index, array) => {} )   optional parameters
const students = ['Νίκη', 'Ανδρέας', 'Γιάννης']

students.forEach(function(stud) {
  // console.log(stud);
});

students.forEach(function(stud, index, arr) {
  // console.log(index, stud, arr);
});

students.forEach((val, index) => {
  // console.log(index, val);
});

students.forEach((stud, _, arr) => {     // placeholder '_' orders to intentionally ignore that argument
  // console.log(stud, arr);
});

const users = [
  {firstname: 'Ανδρέας', age: 25, active: true, email: "andrew@something.com" },
  {firstname: 'Νίκη', age: 20, active: false, email: "nikkie.m@something.com" }
]

    // Filter  -  Returns an array
let filtered = students.filter(stud => stud ==='Ανδρέας');    // [ 'Ανδρέας' ]
let filtered2 = students.filter(stud => stud.endsWith('ς'));
const activeUsers = users.filter(user => user.active);

    // Map
const emails = users.map(user => user.email);                 // [ 'andrew@something.com', 'nikkie.m@something.com' ]
// console.log(emails);

    // Reduce
const numbers = [1, 2, 3, 4, 5, 4, 8, 4];
let sum = numbers.reduce((total, value) => total + value, 0);  // total += value, param 0 is the initial value of total
let avg = numbers.reduce((total, value) => total + value, 0) / numbers.length;
// console.log(`Sum: ${sum}, Avg: ${avg}`);

const findIndexes = (arr, num) => {
  return arr.reduce((indexes, value, index) => ( value === num) ? [...indexes, index] : indexes , []);
}
// console.log(findIndexes(numbers, 4));

    // Find   -  Returns the first matching object
const user = users.find(user => user.email.startsWith('andre'));   // {firstname: 'Ανδρέας', age: 25, active: true, email: "andrew@something.com"}
// console.log(`Email of ${user.firstname} matches [${user.email}].`);

    // FindIndex
const user2 = users.findIndex(user => user.email.startsWith('andre'));   // returns 0 -> the index of andrew

    // Some -  Returns true for the first matching condition
const isOver24 = users.some(user => user.age > 24);   // true
// console.log(`Is anyone over 24? ${isOver24}`);

    // Every -  Returns true only if all elements match the condition
const isAnyoneUnderAge = users.every(user => user.age > 18);   // true
// console.log(`Is everyone over 18? ${isAnyoneUnderAge}`);

    // Flatmap  -  Maps and flattens nested arrays
const result = users.flatMap(user => [`${user.firstname}, ${user.age}`, user.age / 2]); // [ 'Ανδρέας, 25', 12.5, 'Νίκη, 20', 10 ]
// console.log(result);