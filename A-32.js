"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//checking username from current name list using if conditon to determine if any name is repeating
var current_users = ["Faran", "Gamze", "Nahla", "Junaid", "Shahraiz"];
var new_users = ["Mustansir", "Gamze", "Talha", "Shahraiz", "Ahmed"];
for (var i = 0; i < current_users.length; i++) {
    for (var j = 0; j < new_users.length; j++) {
        if (current_users[i].toLowerCase() == new_users[j].toLowerCase()) {
            console.log("This ".concat(current_users[i], " username is not avaliable, create new!!"));
        }
    }
}
