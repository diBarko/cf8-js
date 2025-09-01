import PI from "./lib2.js";
console.log(PI);
import { EPSILON, API_URL } from "./lib2.js";
console.log(EPSILON, API_URL);

let radius = 10
let circumference = 2 * PI * radius
const equal = Math.abs(circumference) < EPSILON
console.log(circumference, equal)