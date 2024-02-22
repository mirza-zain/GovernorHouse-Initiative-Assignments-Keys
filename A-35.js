"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Animals characterstics determination using if condition to see any is same or not
var pet = ["dog", "cat", "parrot"];
for (var i = 0; i < pet.length; i++) {
    console.log("".concat(pet[i]));
}
//Modified to print sentence with the kinds
for (var i = 0; i < pet.length; i++) {
    if (pet[i] == "cat") {
        console.log("".concat(pet[i], ", they are cute and crazy"));
    }
    else if (pet[i] == "dog") {
        console.log("".concat(pet[i], ", they a helpful"));
    }
    else if (pet[i] == "parrot") {
        console.log("".concat(pet[i], ", they copycat your words"));
    }
}
console.log("They can be made great pets");
