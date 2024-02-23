"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function car_info(manufacture, model, ...args) {
    let car = {
        manufacture,
        model
    };
    for (let i = 0; i < args.length; i += 2) {
        let key = args[i];
        car[key] = args[i + 1];
    }
    return car;
}
let car1 = car_info("Dodge", "Challenger", "color", "midnight blue", "year", 2022);
console.log(car1);
