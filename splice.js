// Adds/removes items to/from an array, and returns the removed item(s). This method changes the original array.

const color = ["red", "blue", "white", "black", "gray"];
const removed = color.splice(0, 2,'yellow')
console.log(color);
console.log(removed);
