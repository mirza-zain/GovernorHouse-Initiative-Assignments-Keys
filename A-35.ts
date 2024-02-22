//Animals characterstics determination using if condition to see any is same or not
const pet: string[] = ["dog", "cat", "parrot"];
for(let i = 0; i < pet.length; i++){
    console.log(`${pet[i]}`)
}
//Modified to print sentence with the kinds
for(let i = 0; i < pet.length; i++){
    if(pet[i] == "cat"){
        console.log(`${pet[i]}, they are cute and crazy`);
    }else if(pet[i] == "dog"){
        console.log(`${pet[i]}, they a helpful`);
    }else if(pet[i] == "parrot"){
        console.log(`${pet[i]}, they copycat your words`);
    }
}
console.log("They can be made great pets");

export{}