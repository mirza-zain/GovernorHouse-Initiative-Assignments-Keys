"use strict";
//Creating a list of places I would like to visit
let placesToVist = ["Saudi Arabia", "Turkey", "Algeria", "Germany", "Canada"];
for (let i = 0; i < placesToVist.length; i++) {
    console.log(`Places I want to visit, ${placesToVist[i]}`);
}
placesToVist.slice().sort();
console.log("List in alphabatical order");
for (let i = 0; i < placesToVist.length; i++) {
    console.log(`${placesToVist[i]}`);
}
//now printing the list in alphabatical order
placesToVist.sort();
console.log("List in alphabatical order");
for (let i = 0; i < placesToVist.length; i++) {
    console.log(`${placesToVist[i]}`);
}
//now printing the list in reverse alphabatical order
placesToVist.reverse();
console.log("List in reverse alphabatical order");
for (let i = 0; i < placesToVist.length; i++) {
    console.log(`${placesToVist[i]}`);
}
