//checking username from current name list using if conditon to determine if any name is repeating
let current_users: string[] = ["Faran", "Gamze", "Nahla", "Junaid", "Shahraiz"];
let new_users: string[] = ["Mustansir", "Gamze", "Talha", "Shahraiz", "Ahmed"];

for(let i = 0; i < current_users.length; i++){
    for(let j = 0; j < new_users.length; j++){
        if(current_users[i].toLowerCase() == new_users[j].toLowerCase()){
            console.log(`This ${current_users[i]} username is not avaliable, create new!!`);
        }
    }
}

export {}