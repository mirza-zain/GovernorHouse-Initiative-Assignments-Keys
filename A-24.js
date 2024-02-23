"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//More Conditional Tests
let ex = "Hello";
// Tests for equality and inequality with strings 
console.log(ex == "hello");
console.log(ex != "World");
console.log(ex == "hello");
console.log(ex != "Hello");
// Tests using the lower case and uppercase function 
ex = "HELLO";
let ex2 = "World";
console.log(ex.toLowerCase() == "hello");
console.log(ex2.toLowerCase() != "world");
console.log(ex.toUpperCase() == "HELLO");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to 
console.log(5 == 5);
console.log(10 != 10);
console.log(10 > 5);
console.log(10 < 15);
console.log(10 >= 10);
console.log(20 <= 20);
//Tests using “and” and “or” operators 
console.log(true && true);
console.log(true || false);
console.log(10 < 5 && 10 > 15);
console.log(10 < 5 || 10 > 15);
// Test whether an item is in a array 
let array = [1, 2, 3, 4, 5];
console.log(array.includes(3));
console.log(array.includes(6));
