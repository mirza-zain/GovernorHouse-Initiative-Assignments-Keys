"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Ordinal Numbers position determining by if condtion
var ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinal_num.length; i++) {
    if (ordinal_num[i] == 1) {
        console.log("".concat(ordinal_num[i], "st"));
    }
    else if (ordinal_num[i] == 2) {
        console.log("\n".concat(ordinal_num[i], "nd"));
    }
    else if (ordinal_num[i] == 3) {
        console.log("\n".concat(ordinal_num[i], "rd"));
    }
    else {
        console.log("\n".concat(ordinal_num[i], "th"));
    }
}
