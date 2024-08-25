// Shallow copies part of an array to another location in the same array and returns it, without modifying its length.

const num = [1, 2, 3, 4, 5, 6];
num.copyWithin(0, 3);
console.log(num);
