// Currency Formatter     -   Not allowed NaN, undefined, null, +/-infinite     isFinite covers all these except null, but Number.isFinite covers null aswell

const formatCurrency = (amount) => {
  if (!Number.isFinite(amount)) return `Invalid Amount ${amount}`
  return `${amount.toFixed(2)}`
}

// console.log(formatCurrency(12.3456)); console.log(formatCurrency(null)); console.log(formatCurrency(NaN));
// console.log(formatCurrency(undefined)); console.log(formatCurrency(Infinity)); console.log(formatCurrency(-Infinity)); 

//  Safe Division         -   By default in js, zero division will return infinity. We need to check for both if are null or undefined and if denominator is zero
const safeDivide = (a, b) => {
  a = a ?? 0    // nullish coalescing operator  checks null and undefined,  if a is null or undefined, it will be set to 0, else to its own value
  b = b ?? 1    // to avoid zero division, we set default value of denominator to 1
  return (b === 0) ? Infinity : (a / b)
}

// console.log(safeDivide(10, 2)); console.log(safeDivide(10, 0));
// console.log(safeDivide(null, 2)); console.log(safeDivide(10, undefined));

// Random Hex Color Generator
const getRandomHexColor = () => {
  const randomColor = Math.floor(Math.random() * (0xFFFFFF + 1)).toString(16).padStart(6, '0');  // Parameter 16 converts number to hex.   0xFFFFFF +1 can be replaced by 16777215
  return `#${randomColor}`;
}

// console.log(getRandomHexColor()); console.log(getRandomHexColor()); console.log(getRandomHexColor());
// console.log(getRandomHexColor()); console.log(getRandomHexColor()); console.log(getRandomHexColor());