//  Executes a reducer function on each element of the array, resulting in a single output value.

const num = [1, 3, 4, 5, 8];
const sum = num.reduce((acc, num) => acc + num, 0);
console.log(sum);
