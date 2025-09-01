let bag = new Set()
bag.add("Java")
bag.add("Python")
bag.delete("Java")

if (bag.has("Python")) console.log("Bag contains Python.")

function addToSet(set, ...values) {
  values.forEach(value => set.add(value))
}

const set = new Set()
addToSet(set, "Java", "Python", "JavaScript", "C++", "C#", "Matlab")

function createSet(...elements) {
  return new Set(elements)    // Constructor that takes iterable objects and converts them into a Set, typecast Array to Set
}

console.log(createSet("Java", "Python", "JavaScript", "C++", "C#", "Matlab"))

const cities = [{id: 1, city: "Athens"}, {id: 2, city: "Lamia"}, {id: 3, city: "Athens"}]
// get unique cities
function getUniqueCities(arr) {
  return [...new Set(arr.map(cityObj => cityObj.city))] // map to get city names, then convert to Set to get unique names, then spread into an array
}
console.log(getUniqueCities(cities))