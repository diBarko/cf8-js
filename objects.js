// Instantiate an object using the Object constructor
const point3D = new Object();
point3D.x = 5;
point3D.y = 10;
point3D.z = 20;

const user = {
  firstname: 'Alice',
  lastname: 'Wonderland',
  hobbies: [{id: 1, title: 'Reading'}, {id: 2, title: 'Traveling'}, {id: 3, title: 'Cooking'}]
}

// Instantiate an object using literals
const point2D = {
  x: 10,
  y: 20,

  // showY: function() { return `${this.y}`} // old style, ECMA Script 5  
  showY() {
    return `${this.y}`;
  }
}

// Accessing properties using dot notation and bracket notation
// console.log(point2D.x); // 10
// console.log(point2D['y']); // 20

// Adding method as simple as adding a property
point2D.showX = function() {
  return `${this.x}`
}

// Enhanced For
for (let key in point3D) {
  // console.log(`[${key}: ${point3D[key]}]`);
}

// Object.entries()
for (const [key, value] of Object.entries(point3D)) {
  // console.log(`[${key}: ${value}]`);
}

const shoppingCart = {
  items: [],
  addItem(item, price) {          // This method is mutable, to make it immutable: items = [...items, { item, price }]
    this.items.push({ item, price });
  },
  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
  removeItem(item) {
    this.items = this.items.filter(i => i !== item);
  },
  viewCart() {
    return this.items;
  }
}

shoppingCart.addItem('Milk', 2);
shoppingCart.addItem('Eggs', 5);
// console.log(shoppingCart.calculateTotal());

// Object Destructuring
const { x: myX = 0, y = 0, z = 0, t = 0 } = point3D   //  all variables are pre-set to 0, if value comes from point3D they will be re-set.
// console.log(`x: ${myX}, y: ${y}, z: ${z}` );  // x variable renamed to myX, 

// without destructuring - verbose
function display3DPoint(point) {
  console.log(`x: ${point.x}, y: ${point['y']}, z: ${point.z}`);
}

// with destructuring   - concise (non-verbose)
function display3DPoint2({ x, y, z = 'Not provided'}) {
  console.log(`x: ${x}, y: ${y}, z: ${z}`);
}

const p2 = {
  x: 15,
  y: 18
  // , z: 22
}

display3DPoint(p2)
display3DPoint2(p2)