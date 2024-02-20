//Changing my Guest List with other person
let guestList = ["Faran", "Mustansir", "Gamze Dogan", "Nahla Saadi"];

console.log(`${guestList[3]}, can't attend the party because her flight got delayed.`);
guestList[3] = "Ali Jamal";
for(let i = 0; i < guestList.length; i++){
    console.log(`You are invited to dinner party at night, ${guestList[i]}`);
}

export{}