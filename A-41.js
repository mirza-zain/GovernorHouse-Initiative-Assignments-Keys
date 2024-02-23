"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Magicians array passed to function
const magican_names = ["David Copperfield", "David Blaine", "Criss Angel", "Dynamo"];
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`Names: ${magicians[i]}`);
    }
}
show_magicians(magican_names);
