let str = "Coding Factory"
console.log(...str);
// Parse

let s1 = str.substring(1, 5)  // "odin"
let s2 = str.slice(1, 5)  // "odin"
let s3 = str.slice(-5)  // "ctory"

// console.log(s1);
// console.log(s2);
// console.log(s3);

// Split
let tokens = str.split(" ");  // ["Coding", "Factory"]
// console.log(tokens);

// Delimeter is NOT included in the splitted array
let tokens2 = str.split("o");  // ["C", "ding Fact", "ry"]
// console.log(tokens2);

// Split works with RegEx aswell
let tokens3 = str.split(/\s+/); // ["Coding", "Factory"]
// console.log(tokens3);

// Strings are char arrays
let index = str.indexOf('o');  // str.indexOf('!'); returns -1 if argument not found
let lIndex = str.lastIndexOf('o');
// console.log((index === -1)?"Not Found":`Found at (${index})`);

// console.log(str.charAt(0));
// console.log(index);  // 1
// console.log(lIndex);  // 11

// Equality - Case sensitive
let str1 = "Athens"
let str2 = "ATHENS"
// console.log((str1 === str2)?"Equal":"Not Equal");

// Case insensitive - Normalization
let str3 = "Athens"
let str4 = "ATHENS"
// console.log((str3.toUpperCase() === str4.toUpperCase())?"Equal":"Not Equal");

// Trim
let str5 = "   Hello World!   "
let str6 = str5.trimStart()
let str7 = str5.trimEnd()
// console.log(`[${str5}] trimmed: [${str5.trim()}]`);
// console.log(`[${str5}] trimmedStart: [${str6}]`);
// console.log(`[${str5}] trimmedEnd: [${str7}]`);

// Concat using +
let concatenation = str1 + "|" + str2 + "|" + str3
// console.log(concatenation);

// Concat using concat()
let concatenation2 = str1.concat("|", str2, "|", str3)
// console.log(concatenation2);

// Replace + reverse
let str8 = str.replace("Factory", "Academy".split("").reverse().join(""))
// console.log(str8);

// RegEx

let strInput = 'Hello All!'; // User input validation
// console.log((/hello/.test(strInput)?"M":"No m") + "atch was found");
// console.log((/hello/i.test(strInput)?"M":"No m") + "atch was found");   // i-flag post RegEx makes it case insensitive.

// more flags:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags
// Flag	      Description	                                                                          Corresponding property
// d	        Generate indices for substring matches.	                                                          hasIndices
// g	        Global search.	                                                                                      global
// i	        Case-insensitive search.	                                                                        ignoreCase
// m	        Makes ^ and $ match the start and end of each line instead of those of the entire string.	         multiline
// s	        Allows . to match newline characters.	                                                                dotAll
// u	        "Unicode"; treat a pattern as a sequence of Unicode code points.	                                   unicode
// v	        An upgrade to the u mode with more Unicode features.	                                           unicodeSets
// y	        Perform a "sticky" search that matches starting at the current position in the target string.	        sticky

// First match
let manyTokes = 'world watch hello'
const regex = /w\w+/;
// console.log(manyTokes.match(regex)); // ["world"]

// Find all matches
const regex2 = /w\w+/g; // g-flag for global search
let matches = manyTokes.match(regex2); // ["world", "watch"]
// console.log(matches);

let match
const regex3 = /hello/;
match = regex3.exec(manyTokes);
// console.log(`First match of '${match[0]}' at index (${match.index}).`);

let match2
// console.log("All matches of 'w':");
while(match2 = regex2.exec(manyTokes)) {
    // console.log(`Found '${match2[0]}' at index (${match2.index}).`);
}

// No matches found returns null
let match3
const regex4 = /asdf/;
match3 = regex4.exec(manyTokes);
if (match3 === null) {
    // console.log(`No match found for ${(regex4.toString().slice(1, -1))}.`);
} else {
    // console.log(`Found '${match3[0]}' at index (${match3.index}).`);
}

// Password validation
let password = "C0d!nGF@C70rY8";
function isStrongPassword(password) {
    return /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\W_]).{8,}$/.test(password);
}
console.log(`Is the password [${password}] strong?
${isStrongPassword(password)}`);