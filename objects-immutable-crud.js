const obj = {
  id: 1,firstname: 'Alice'
}
// add properties
// mutable
obj.lastname = 'Wonderland'

// immutable  -   Without brackets[], field would be added as a string "field"
const addToObj = (obj, key, value) => ({ ...obj, [key]: value })
addToObj(obj, 'lastname', 'Wonderland')

// update
// mutable
obj.firstname = 'Bob';

// immutable - fresh copy with updated field
const updateObj = (obj, key, value) => ({ ...obj, [key]: value })
updateObj(obj, 'firstname', 'Bob')

// delete
// mutable
// delete obj.firstname;

// immutable
const deleteFromObj = (obj, key) => {
  const { [key]: _, ...rest } = obj;    // destructure & rest operator
  return rest;
};

const newObj = deleteFromObj(obj, 'id');
console.log(newObj);