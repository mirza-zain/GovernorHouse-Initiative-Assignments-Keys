//creating car object in function, and adding values inside and then displaying it.
interface Car {
    manufacture : string,
    model: string,
    [key_values: string]: any
}

function car_info(manufacture: string, model: string, ...args: any[]): Car{
    let car: Car = {
        manufacture,
        model
    }
    for(let i = 0; i < args.length; i += 2){
        let key = args[i];
        car[key] = args[i+1];
    }
    return car;
}

let car1: Car = car_info("Dodge", "Challenger", "color", "midnight blue", "year", 2022);

console.log(car1);
export{}