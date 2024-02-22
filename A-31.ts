//When there's no user present in list, checking through if condtion
const users: string[] = [];
for(let i = 0; i <= users.length; i++){
    if(users[i] == "admin"){
        console.log(`Hello ${users[i]}, would you like to see a status report?`);
    } else {
        console.log("We need to find some USers!");
    }
}

export{}