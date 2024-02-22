"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//greetings to every user and different greetings for admin using array and if condition
var users = ["Faran", "Ali", "Gamze", "admin", "Nahla"];
for (var i = 0; i < users.length; i++) {
    if (users[i] == "admin") {
        console.log("Hello ".concat(users[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(users[i], ", thank you for logging in again!"));
    }
}
