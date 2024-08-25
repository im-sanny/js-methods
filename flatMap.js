// First maps each element using a mapping function, then flattens the result into a new array. It's identical to a map followed by a flat of depth 1.

const num = [1, 2, 3];
const doubleAndFlattened = num.flatMap((num) => [num, num * 2]);
console.log(doubleAndFlattened);
