//Magicians array passed to function
const magican_names: string[] = ["David Copperfield", "David Blaine", "Criss Angel", "Dynamo"];

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`Names: ${magicians[i]}`);
    }
}

show_magicians(magican_names);

export{}
