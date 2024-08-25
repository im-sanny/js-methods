// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray);
