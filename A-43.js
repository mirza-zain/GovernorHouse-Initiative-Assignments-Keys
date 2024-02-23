"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Magicians array passed to function then it will be passed to make_great function and it will change the array and will add The Great with every magician name and then it will be added to copy of array and then display original and copy of it.
const magican_names = ["David Copperfield", "David Blaine", "Criss Angel", "Dynamo"];
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`Names: ${magicians[i]}`);
    }
}
function make_great(magician) {
    return magician + " the Great";
}
let great_magicians = magican_names.map(make_great);
console.log("Original Array");
show_magicians(magican_names);
console.log("Copy of Original Array");
show_magicians(great_magicians);
