"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Determining the stages of life of a person using if conditional
let age = 19;
if (age < 2) {
    console.log("The person is Baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person os Toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is Kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is Teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is Adult");
}
else if (age >= 65) {
    console.log("The personm is Elder");
}
else {
    console.log("The person died");
}
