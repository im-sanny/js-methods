// Returns the value of the first element in the array that satisfies the provided testing function.

const num = [1, 2, 3, 4];
const firstEven = num.find((num) => num % 2 === 0);
console.log(firstEven);
