"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Iniviting more guests to the party 
let guestList = ["Faran", "Mustansir", "Ali Jamal", "Gamze"];
for (let i = 0; i <= guestList.length; i++) {
    console.log(`Hi ${guestList[i]}, you are invited to the dinner party!`);
}
//Tell the guests that, I have found a bigger dinner table
console.log("Hey Everyone, I have found a bigger Dinner Table!, so now I'm going to invite more people");
//Adding more guests to the array
//In the beginning 
guestList.unshift("Nahla");
//In the middle
guestList.splice(3, 0, "Ali Ahmed");
//In the end
guestList.push("Shahraiz Zahid");
//Printing new invitations
for (let i = 0; i < guestList.length; i++) {
    console.log(`You guy's are invited to dinner party at night, ${guestList[i]}`);
}
