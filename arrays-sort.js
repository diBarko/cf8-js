const arr = [1, 8, 5, 4]

arr.sort()  // for Strings this is just ok, but for Numbers it needs comparator
arr.sort((a, b) => a - b)  // ASC sort : if a > b return a-b (something gt 0), if a < b return a-b (something lt 0), if a === b return 0
arr.sort((a, b) => b - a)  // DESC sort

const arr2 = ['Νίκη', 'Ανδρέας']
arr2.sort((a, b) => a.localeCompare(b, 'el-GR'))  // Greek locale-aware sort

const users = [
  {firstname: 'Ανδρέας', age: 25 },
  {firstname: 'Νίκη', age: 20}
]

users.sort((a,b) => a.age - b.age)    // Sort users by age ascending
users.sort((a,b) => b.age - a.age)    // Sort users by age descending
users.sort((a,b) => a.firstname.localeCompare(b.firstname, 'el-GR'))  // Sort users by firstname Greek locale-aware ascending

users.sort(function(a,b) {   // Sort users by age ascending, firstname Greek locale-aware descending
  if (a.age === b.age) {
    return b.firstname.localeCompare(a.firstname, 'el-GR');
  }
  return a.age - b.age;
});

users.sort(function(a,b) {   // Sort users by firstname ascending, age ascending
  if (a.firstname === b.firstname) {
    return a.age - b.age;
  }
  return a.firstname.localeCompare(b.firstname, 'el-GR');
});