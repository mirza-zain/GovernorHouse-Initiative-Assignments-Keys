//Shrinking the guest list to make it up for only 2 people
const guestList: string[] = ["Faran", "Mustansir", "Ali Jamal", "Gamze", "Nahla Saadi"];

console.log("Due to some issue's now, I can only invite 2 people at Dinner");

//Removing the guests from the list
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, I can't no more invite you to dinner due to some issues.`);
}

//Letting last 2 members know that you are invited
for(let i = 0; i < guestList.length; i++){
    console.log(`You guy's are invited to dinner party today, ${guestList[i]}`);
}

//removing the last 2 people also
guestList.pop();
guestList.pop();

//displaying empty array
console.log(guestList);