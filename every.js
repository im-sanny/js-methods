// Tests whether all elements in the array pass the test implemented by the provided function.

const num = [2, 4, 6];
const allEven = num.every((num) => num % 2 === 0);
console.log(allEven);
