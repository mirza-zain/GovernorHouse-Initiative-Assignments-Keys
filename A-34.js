"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Favourite Pizza kinds looping them and printing answers through if condition
var pizza_kinds = ["pepperoni", "fajita", "arabian"];
for (var i = 0; i < pizza_kinds.length; i++) {
    console.log("".concat(pizza_kinds[i]));
}
//Modified to print sentence with the kinds
for (var i = 0; i < pizza_kinds.length; i++) {
    if (pizza_kinds[i] == "pepperoni") {
        console.log("".concat(pizza_kinds[i], ", it's mostly filled with small peppers"));
    }
    else if (pizza_kinds[i] == "fajita") {
        console.log("".concat(pizza_kinds[i], ", it puts your mouth into hell fire"));
    }
    else if (pizza_kinds[i] == "arabian") {
        console.log("".concat(pizza_kinds[i], ", it's less spieced but good"));
    }
}
console.log("I really love to eat Pizza!!");
