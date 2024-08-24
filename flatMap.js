const num = [1, 2, 3];
const doubleAndFlattened = num.flatMap((num) => [num, num * 2]);
console.log(doubleAndFlattened);
