"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//When there's no user present in list, checking through if condtion
var users = [];
for (var i = 0; i <= users.length; i++) {
    if (users[i] == "admin") {
        console.log("Hello ".concat(users[i], ", would you like to see a status report?"));
    }
    else {
        console.log("We need to find some USers!");
    }
}
