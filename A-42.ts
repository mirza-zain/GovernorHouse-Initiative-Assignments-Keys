//Magicians array passed to function then it will be passed to make_great function and it will change the array and will add The Great with every magician name and display it.
const magican_names: string[] = ["David Copperfield", "David Blaine", "Criss Angel", "Dynamo"];

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`Names: ${magicians[i]}`);
    }
}

function make_great(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magican_names);
show_magicians(magican_names);


export{}