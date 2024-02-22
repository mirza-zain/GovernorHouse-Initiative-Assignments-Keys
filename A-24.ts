//More Conditional Tests
// Tests for equality and inequality with strings 
console.log(“Hello” == “Hello”); // true 
console.log(“Hello” != “World”); // true 
console.log(“Hello” == “hello”); // false 
console.log(“Hello” != “Hello”); // false

// Tests using the lower case function 
console.log(“Hello”.toLowerCase() == “hello”); // true 
console.log(“Hello”.toLowerCase() != “world”); // true 
console.log(“Hello”.toLowerCase() == “HELLO”); // false 
console.log(“Hello”.toLowerCase() != “hello”); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to 
console.log(10 == 10); // true 
console.log(10 != 20); // true 
console.log(10 > 5); // true 
console.log(10 < 15); // true 
console.log(10 >= 10); // true c
console.log(10 <= 10); // true 
console.log(10 == 20); // false 
console.log(10 != 10); // false 
console.log(10 > 15); // false 
console.log(10 < 5); // false 
console.log(10 >= 20); // false 
console.log(10 <= 5); // false

// Tests using “and” and “or” operators 
console.log(true && true); // true 
console.log(true || false); // true 
console.log(false && false); // false 
console.log(false || false); // false 
console.log(10 > 5 && 10 < 15); // true 
console.log(10 > 5 || 10 < 5); // true 
console.log(10 < 5 && 10 > 15); // false 
console.log(10 < 5 || 10 > 15); // false

// Test whether an item is in a array 
let array: number[] = [1, 2, 3, 4, 5]; 
console.log(array.includes(3)); // true 
console.log(array.includes(6)); // false