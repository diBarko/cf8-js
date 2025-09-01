//  Remove all duplicate elements from an array
const arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

function removeDuplicates(arr) {
  const unique = []
  for (let item of arr) {
    if (unique.indexOf(item) === -1) unique.push(item)
  }
  return unique
}
// function removeDuplicates(arr) {
//   return [...new Set(arr)]
// }

// console.log(arr + '\n=>\n' + removeDuplicates(arr))

// Array chunks
function chunkArray(arr, size) {
  const chunks = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 2))