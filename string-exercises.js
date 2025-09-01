//  Reverse string
function reverseString(str) {
  // return str.split('').reverse().join('');    // breaks string to an array, reverse array, join back to string  -> reversed string.
  return [...str].reverse().join('')             // spread operator to break string to array, reverse array, join back to string  -> reversed string.
}

// console.log(reverseString("Coding Factory"));

//  Replace string to obfuscation symbols (a -> @, e -> 3, i -> !, o -> 0, s -> $)
function obfuscate(password) {
  return password
      .replace(/a/gi, '@')
      .replace(/e/gi, '3')
      .replace(/i/gi, '!')
      .replace(/o/gi, '0')
      .replace(/s/gi, '$')
}

// console.log(obfuscate("Password1234"));

// Compress string  -  aaaabbbccca -> a4b3c3a
function compress(str) {
  let compressed = ''
  let count = 1

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      compressed += str[i] + (count > 1 ? count : '')
      count = 1
    }
  }
  return compressed
}

console.log(compress("daaaabbbccca"))