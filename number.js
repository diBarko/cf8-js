if (Number.isInteger(42)) {
  console.log(`42 is an integer.`);
} else {
  console.log(`42 is not an integer.`);
}

console.log("Number min value: "          + Number.MIN_VALUE);
console.log("Number max value: "          + Number.MAX_VALUE);
console.log("Number min safe integer: "   + Number.MIN_SAFE_INTEGER);
console.log("Number max safe integer: "   + Number.MAX_SAFE_INTEGER);
console.log("Number negative infinity: "  + Number.NEGATIVE_INFINITY);
console.log("Number positive infinity: "  + Number.POSITIVE_INFINITY);

let aNum = 10 / "Hello";
console.log("aNum (10 / 'Hello'): " + aNum);
if (Number.isNaN(aNum)) {
  console.log(`aNum is NaN.`);
} else {
  console.log(`aNum is not NaN.`);
}

console.log((5/4).toFixed(1)); // "1.3"
console.log(Math.ceil(5/4));   // 2
console.log(Math.floor(5/4));  // 1