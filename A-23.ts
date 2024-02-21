//Condtional Test 
//True Predictions
let car = "subaru";
console.log("Is car == 'subaru'? I predict true");
console.log(car == "subaru");

car = "audi";
console.log("Is car == 'audi'? I predict true");
console.log(car == "audi");

car = "BMW";
console.log("Is car == 'BMW'? I predict true");
console.log(car == "BMW");

car = "Mercedes";
console.log("Is car == 'Mercedes'? I predict true");
console.log(car == "Mercedes");

let car1 = "subaru";
let car2 = "audi";
console.log("Is car1 == 'subaru' and car2 == 'audi'? I predict true");
console.log(car1 == "subaru" && car2 == "audi");

//False Predictions
let car3 = "Nissan";
console.log("Is car1 == 'subaru' && car3 == 'audi'? I predict false");
console.log(car1 == "subaru" && car3 == "audi");

console.log("Is car3 != 'Nissan'? I predict false");
console.log(car3 != "Nissan");

car2 = "BMW";
console.log("Is car1 == 'Nissan GTR' || car2 == 'audi'? I predict false");
console.log(car1 == "Nissan GTR" || car2 == "audi");

car3 = "Mercedes";
console.log("Is car3 == 'Toyota', I predict false");
console.log(car3 == "Toyota");

console.log("Is car1 == 'subaru' && car2 == 'audi' && car3 == 'Mercedes'? I predict false");
console.log(car1 == "subaru" && car2 == "audi" && car3 == "Mercedes");

export {}