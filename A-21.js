"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friend = [{
        name: "Faran",
        age: 19,
        hobby: ["Gaming", "Coding"]
    }, {
        name: "Gamze",
        age: 19,
        hobby: ["Drawing", "Eating", "Photography"]
    }];
for (let lists of friend) {
    console.log(`Name: ${lists.name}\nAge: ${lists.age}\nHobbies: ${lists.hobby.join(", ")}`);
}
