//greetings to every user and different greetings for admin using array and if condition
const users: string[] = ["Faran", "Ali", "Gamze", "admin", "Nahla"];
for(let i = 0; i < users.length; i++){
    if(users[i] == "admin"){
        console.log(`Hello ${users[i]}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${users[i]}, thank you for logging in again!`);
    }
}

export{}