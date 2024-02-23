"use strict";
//Creating a list of places I would like to visit
let placesToVist = ["Saudi Arabia", "Turkey", "Algeria", "Germany", "Canada"];
console.log("Orignal Array");
console.log(placesToVist);
//Alphabatical Order without using orignal array
let copy = placesToVist.slice();
copy.sort();
console.log("Copy of Array sorted ");
console.log(copy);
//Showing orignal array
console.log("Orginal Array ");
console.log(placesToVist);
//now printing the copy in reverse
copy.reverse();
console.log("Copy of Array in reverse");
console.log(copy);
//Showing orignal array
console.log("Orginal Array");
console.log(placesToVist);
//now printing the list in reverse alphabatical order
placesToVist.reverse();
console.log("Orignal Array in reverse");
console.log(placesToVist);
//reversing again to make it back to orignal 
placesToVist.reverse();
console.log("Back to orignal");
console.log(placesToVist);
//Sorting the array to make it alphabetical order
placesToVist.sort();
console.log("Orginal Array sorted");
console.log(placesToVist);
//Sorting the array to make it reverse alphabetical order
placesToVist.sort().reverse();
console.log("Orignal Arrat sorted plus reverse");
console.log(placesToVist);
