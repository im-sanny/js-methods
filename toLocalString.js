// Returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods.

const dateArray = [new Date(2024, 8, 23)];
const str = dateArray.toLocaleString("en-US");
console.log(str);
