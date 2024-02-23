"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Name Cases 
let name = "Mirza zain";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
function titleCase(name) {
    let title = name.split(' ');
    let newTitle = [];
    for (let word of title) {
        newTitle.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return newTitle.join(' ');
}
console.log(titleCase(name));
