//    Falsy values, οι τιμές που κάνουν evaluate σε false σε ένα boolean context:
// Αριθμοί: 0, 0.0, 0n
// Strings: "", '', ``
// null, undefined, NaN

//    Truthy values, οι τιμές που κάνουν evaluate σε true σε ένα boolean context:
// Αριθμοί: όλοι πέραν των Falsy
// Strings1: όλα τα μη κενά strings
// Όλα τα αντικείμενα, functions, και arrays(κενά και μη).



let inputName = undefined
let username = inputName || 'default user'

console.log(username); // Output: default user

let inputName2 = 'bob'
let username2 = inputName2 || 'default user'

console.log(username2); // Output: bob

let apiURL = "https://api.aueb.gr"
const publicAPIURL = apiURL && getFromURL(apiURL);

console.log(publicAPIURL);

function getFromURL(url) {
  return 'something from URL'
}

let value = 0
let result = value || 'default value'

console.log(result); // Output: default value